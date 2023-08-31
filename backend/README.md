# **Comandos**

```
npm run dev
```
Va a ejecutar nodemon sobre el archivo index.js
```
npm run fork
```
Va a levantar el servidor en el archivo index.js en modo FORK bajo el nombre de server1 y escuchando en el puerto 8080.
El comando tiene la opcion ```--watch``` 

```
npm run cluster
```
Va a levantar el servidor en el archivo index.js en modo CLUSTER bajo el nombre de server2 y escuchando en el puerto 8081.
Tiene la opcion ```-i 5``` para levantar 5 instancias del server y la opcion ```--watch```.

```
npm run forever
```
Va a iniciar el servidor en el archivo index.js usando forever escuchando en el puerto 8080. Se inicia con el flag ```--watch```

```
npm run loadbalance
```
Va a iniciar el servidor que se encuentra en **cluster.js** que usa el modulo nativo cluster de node y usa tambien la configuracion 1 que se encuentra en nginx.conf donde todas las consultas seran dirigidas al master en el puerto 8080 y las consultas a la ruta /api/random seran direccionadas al puerto 8081.

Las rutas habilitadas son *localhost*; *localhost/info*; *localhost/api/random*

```
npm run pm2
```
Va a iniciar el archivo de configuracion de **PM2** que crea 5 instancias de servidores del archivo **index.js** escuchando en el puerto 8080, 8082, 8083, 8084, 8085. Usa la configuracion 2 que se encuentra en el archivo nginx.conf.

Las consultas generales seran dirigidas al servidor en el puerto 8080 y las consultas a la ruta /api/random se configura un balanceo de carga en el servidor en los puertos 8082, 8083, 8084, 8085.

Las rutas habilitadas son *localhost*; *localhost/info*; *localhost/api/random*



## **Comandos para base de datos** ##

***

```
npm run file
```
Inicia el servidor persistiendo los datos en un archivo *productos.json*

```
npm run mongo
```
Inicia el servidor persistiendo los datos en una base de datos de *mongodb*

```
npm run mysql
```
Inicia el servidor persistiendo los datos en una base de datos de *mysql*


# API Restfull Endpoints #

*  ### productos
*  ### carrito

#### **Obtener todos los productos**
* **GET** http://localhost:8080/api/productos

#### **Obtener producto por ID**
* **GET** http://localhost:8080/api/productos/[id]

#### **Crear un producto**
* **POST** http://localhost:8080/api/productos

#### **Eliminar un producto** 
* **DELETE** http://localhost:8080/api/productos/[id]

#### **Actualizar un producto**
* **PUT** http://localhost:8080/api/productos/[id]


---


#### **Obtener productos en un carrito**
* **GET** http://localhost:8080/api/carrito/[idCarrito]/productos

#### **Guardar producto en un carrito**
* **POST** http://localhost:8080/api/carrito/[idCarrito]/productos

#### **Eliminar producto en un carrito**
* **DELETE** http://localhost:8080/api/carrito/[idCarrito]/productos/[idProducto]