const Sequelize = require("sequelize");
const db = require("../config/db");

const bcrypt = require("bcrypt");

class Users extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

Users.init(
  {
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    history: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "users",
  }
);

Users.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();

  user.salt = salt;

  return user.hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});

Users.beforeUpdate((user) => {
  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = Users;
