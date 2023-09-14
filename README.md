# RETRO FUTBOL CLUB (BACK-END)
## Descripcion
<p>
Retro Futbol Club es un E-commerce el cual surge como un proyecto propuesto por <a href="https://www.plataforma5.la/" target="blank">Plataforma 5 - Coding Bootcamp.</a> 
Nos dedicamos a la venta de indumentaria deportiva antigua (precisamente Futbol) de los jugadores mas exitosos en el campo.
</p>

## Inicializacion

- Primero clonamos este repositorio.
- Abrimos una nueva terminal, nos paramos sobre la carpeta del repositorio y ejecutamos el comando  "code ." para abrirlo en **Visual Studio Code** o tu editor de texto de preferencia. 
- Una vez abierto en nuestro editor de texto, en la raiz del proyecto vamos a crear un archivo nuevo que se llame ".env", para poder crear nuestras variables de entorno. Para guiarnos sobre que valores debe tener este nuevo archivo, revisaremos el que posee el nombre ".env.example" el cual tiene las indicaciones de que deben poseer las variables de entorno de nuestro archivo ".env"
- Una vez hecho todo esto, abrimos nuevamente la terminal (siempre parados sobre la carpeta del repositorio) y ejecutamos los siguientes comandos:  
	- `npm i` - Para instalar las dependencias.
	- `npm run seedCat` - Para setear las categorias de los productos del E-commerce en la base de datos.
	- `npm run seed` - Seteamos un usuario (con permimos de administrador) y una serie de productos en la base de datos para poder interactuar con la misma. 
	- `npm start` - Para levantar el servidor.

## Metodologia de Trabajo
- Antes de arrancar a trabajar, tener en cuenta las siguientes pautas cada vez que se vaya a crear una nueva funcion en el proyecto:
	- En la terminal, parados sobre la carpeta del repositorio, movernos a la rama de produccion "develop" ejecutando `git checkout develop`.
	- Desde ahi, ejecutar `git pull` para obtener los cambios mas recientes.
	- Luego, ejecutar `git checkout -b "feature/(nombreDeLaFuncion)"` para crear una nueva rama de trabajo o `git checkout -b "bugfix/(nombreDeLaFuncion)` para crear una rama en la que arreglaras algun bug.
- Para guardar los cambios: 
	- `git add .` 
	- `git commit -m "(especificarCambios)"`
	- `git push`
	- Realizar el merge de la rama teniendo como base la develop.

## Finalmente
###### TE SUGERIMOS IR Y SEGUIR LOS PASOS DEL ARCHIVO "README.MD" DEL REPOSITORIO QUE PERTENECE AL FRONT-END DE ESTE PROYECTO: <a href="https://github.com/martinferrando2005/Ecommerce-FRONTEND.git">Ecommerce-FRONTEND</a>

## Autores

```javascript 
const autores = [ "Mateo Navarro", " Santiago Moran", " Dario Beratti", " Martin Ferrando"]
autores.join(",") // "Mateo Navarro, Santiago Moran, Dario Beratti, Martin Ferrando"
```


