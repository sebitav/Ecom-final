# **Proyecto final Coderhouse**
# Curso __Backend__

## Ecommerce
App de Ecommerce realizada como proyecto final para el curso de BackEnd de [Coderhouse](https://www.coderhouse.com/).
En la carpeta __Backend__ se encuentra el código para iniciar el servidor y la base de datos.
En la carpeta __frontend__ se encuentra el código para iniciar el front, utilizando __react__.

---

## Iniciar proyecto
### **Inicializar el servidor**


Posicionarse primero en la carpeta *Backend*
```bash
cd backend
```
Correr el comando para descargar los paquetes necesarios e iniciar el servidor
```bash	
npm install
npm run start
```
Esto iniciará el servidor en el puerto 8080 y la base de datos por defecto sera mongoDB.
Se puede iniciar el proyecto con base de datos mysql o persistiendo en un archivo json, *productos.json*
* mysql
```bash
npm run mysql
```
* file persistance
```bash
npm run file
```
### **Inicializar el frontend**

Posicionarse primero en la carpeta *frontend*
```bash
cd frontend
```

Descargar los paquetes e Iniciar el front con react
```bash
npm install
npm start
```
## Aplicacion

La aplicación redireccionará a login si el usuario no esta autenticado, ya sea para agregar un producto al carrito o crearlo. 
Primero realizar un registro de usuario y luego iniciar sesión.

Para crear un producto hay que iniciar como usuario administrador. Las credenciales del administrador son:
```javascript
{
  username: "admin",
  password: "admin" 
}
```
Con este usuario la aplicacion permitirá la creación de un producto






