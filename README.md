# Frigorifico backend

# Cómo enviar el token de login:

![image](https://user-images.githubusercontent.com/54594663/190881907-d8136854-fdce-403b-b92d-ba5711851d66.png)

Se debe enviar en la sección headers como "auth-token" y pegar el token que te da el login

# Endpoints:

## Clientes

> Para acceder a dicha ruta se usa el endpoint **/clientes**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos los clientes | nada | Token Bearer (header) | `/clientes/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON CLIENTES] }` |
| GET | /:id | Ruta para traer un cliente por su ID | query param + Token Bearer (header) | id | `/clientes/2` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON EL CLIENTE}` |
| POST | / | Ruta para crear un cliente | body  + Token Bearer (header) | `{ nombre, telefono, email, direccion }` | `/clientes/` | `{ "status": "ok", "status_code": 200, "data": "Cliente creado con éxito"}` |
| DELETE | / | Ruta para eliminar un cliente | body  + Token Bearer (header) | `{ cliente_id }` | `/clientes` | `{ "status": "ok", "status_code": 200, "data": "Cliente eliminado con éxito"}` |

## Compras
> Para acceder a dicha ruta se usa el endpoint **/compras**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos las compras | nada | Token Bearer (header) | `/compras/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON CLIENTES] }` |
| GET | /all/:proveedor | Ruta para traer un cliente por nombre de proveedor | query param  + Token Bearer (header) | proveedor | `/compras/all/Proveedor de prueba` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON LAS COMPRAS AL PROVEEDOR]` |
| GET | /:id | Ruta para traer una compra por su ID | query param  + Token Bearer (header) | id | `/compras/2` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON LA COMPRA}` |
| POST | / | Ruta para crear una compra | body  + Token Bearer (header) | ![image](https://user-images.githubusercontent.com/54594663/190939642-1ef0b77a-ece9-40bf-b1b7-52ab38e47eba.png) | `/compras/` | `{ "status": "ok", "status_code": 200, "data": "Compra creada con éxito"}` |
| DELETE | / | Ruta para eliminar una compra | body  + Token Bearer (header) | `{ compra_id }` | `/compras` | `{ "status": "ok", "status_code": 200, "data": "Compra eliminada con éxito"}` |

## Faenas

> Para acceder a dicha ruta se usa el endpoint **/faenas**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todas las faenas | nada | Token Bearer (header) | `/faenas/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON FAENAS] }` |
| GET | /:tropa | Ruta que trae todas las faenas por numero de tropa | query param  + Token Bearer (header) | tropa | `/faenas/1231` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON FAENAS] }` |
| POST | / | Ruta para crear una faena | body  + Token Bearer (header) | ![image](https://user-images.githubusercontent.com/54594663/190549566-e6ab76fa-94ed-4dbe-9427-d5a2c5d1959a.png) | `/faenas/` | `{ "status": "ok", "status_code": 200, "data": "Faena creada con éxito"}` |
| PUT | / | Ruta para actualizar saldo de faena | body  + Token Bearer (header) | `{ faena_id, compra_id, saldo }` | `/faenas/` | `{ "status": "ok", "status_code": 200, "data": "Saldo de faena actualizado con éxito"` |
| DELETE | / | Ruta para eliminar una faena | body  + Token Bearer (header) | `{ faena_id }` | `/faenas` | `{ "status": "ok", "status_code": 200, "data": "Faena eliminada con éxito"}` |

## Proveedores

> Para acceder a dicha ruta se usa el endpoint **/proveedores**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos los proveedores | nada | Token Bearer (header) | `/proveedores/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON PROVEEDORES] }` |
| GET | /:id | Ruta que trae un proveedor | query param  + Token Bearer (header) | id | `/proveedores/5` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON EL PROVEEDOR}` |
| POST | / | Ruta para crear un proveedor | body  + Token Bearer (header) | `{ nombre, telefono, email, direccion }` | `/proveedores/` | `{ "status": "ok", "status_code": 200, "data": "Proveedor creado con éxito"}` |
| PUT | / | Ruta para actualizar saldo de un proveedor | body  + Token Bearer (header) | `{ proveedor_id, saldo }` | `/proveedores/` | `{ "status": "ok", "status_code": 200, "data": "Saldo de proveedor actualizado con éxito"` |
| DELETE | / | Ruta para eliminar un proveedor | body  + Token Bearer (header) | `{ proveedor_id }` | `/proveedores` | `{ "status": "ok", "status_code": 200, "data": "Proveedor eliminado con éxito"}` |

## Res

> Para acceder a dicha ruta se usa el endpoint **/res**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todas las reses | nada | Token Bearer (header) | `/res/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON RESES] }` |
| GET | /all_stock | Ruta que trae las reses en stock | query param  + Token Bearer (header) | id | `/res/5` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON RESES EN STOCK]` |
| GET | /:correlativo | Ruta que trae res por correlativo | query param  + Token Bearer (header) | id | `/res/521312` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON LA RES}` |
| POST | / | Ruta para crear una res | body  + Token Bearer (header) | ![image](https://user-images.githubusercontent.com/54594663/190939735-36e2da77-6c40-4f88-a282-f65534ca5bc6.png) | `/res/` | `{ "status": "ok", "status_code": 200, "data": "Res creada con éxito"}` |
| DELETE | / | Ruta para eliminar una Res | body  + Token Bearer (header) | `{ res_id }` | `/res` | `{ "status": "ok", "status_code": 200, "data": "Res eliminada con éxito"}` |

## Stock

> Para acceder a dicha ruta se usa el endpoint **/stock**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todo el stock | nada | Token Bearer (header) | `/stock/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON STOCK] }` |

## User

> Para acceder a dicha ruta se usa el endpoint **/res**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| POST | /login | Ruta para iniciar sesión | body  + Token Bearer (header) | { name, password } | `/user/login` | `{ "status": "ok", "status_code": 200, "data": [TOKEN DE SESIÓN] }` |
| POST | /register | Ruta para registrarse | body  + Token Bearer (header) | { name, password } | `/user/register` | `{ "status": "ok", "status_code": 200, "data": [OBJETO CON EL USUARIO REGISTRADO] }` |

## Ventas

> Para acceder a dicha ruta se usa el endpoint **/ventas**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todas las ventas | nada | Token Bearer (header) | `/ventas/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON VENTAS] }` |
| GET | /all/:client_id | Ruta que trae las ventas de un cliente | query param  + Token Bearer (header) | client_id | `/ventas/all/123` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON LAS VENTAS DEL CLIENTE]` |
| GET | /:id | Ruta que trae una venta en específico | query param  + Token Bearer (header) | id | `/ventas/52` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON LA VENTA}` |
| POST | / | Ruta para crear una venta | body  + Token Bearer (header) | ![image](https://user-images.githubusercontent.com/54594663/190939688-98d1a820-3bd0-4a77-8401-967c06252e0c.png) | `/ventas/` | `{ "status": "ok", "status_code": 200, "data": "Venta creada con éxito"}` |
| PUT | / | Ruta para crear una res | body  + Token Bearer (header) | `{ venta_id, client_id, saldo }` | `/ventas/` | `{ "status": "ok", "status_code": 200, "data": "Saldo de venta actualizado con éxito" }` |
| DELETE | / | Ruta para eliminar una venta | body  + Token Bearer (header) | `{ venta_id }` | `/ventas` | `{ "status": "ok", "status_code": 200, "data": "Venta eliminada con éxito"}` |
