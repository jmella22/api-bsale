# API Bsale

Api construida para el test tecnico de Bsale,

## Objetivos:

<ul>
<li>hola</li>
</ul>

## Dependencias:

<ul>
  <li>axios:</li>
  <li>dotenv: para el manejo de variables de entorno</li>
  <li>express: framework de javascript para trabajar web server</li>
  <li>promise-mysql: paquete que permitira administrar las consultas a la base de dato MySql de forma sincrona</li>
</ul>

## Dependencias de desarrollo:

<ul>
  <li>babel: converte el codigo de js moderno al estandar en los navegadores</li>
  <li>morgan:</li>
  <li>nodemon: permite observar los cambios</li>
</ul>

## Despliege

para utilizar trabajar de forma local la API Rest se deben realizar los siguientes pasos:

- descargar de GitHub el repositorio

https://github.com/jmella22/api-bsale

- Instalar las dependencias

```console
npm install
```

- cambiar de nombre el archivo **.env.template** por **.env** y agregar las variables de entornos correspondiente

```js
HOST=
DB_USER=
DB_PASS=
DB_NAME=
```

- Usar el comando para levantar el srevidor

```console
npm run dev
```

## Rutas

### /api/products/:category?name=

Se obtiene los productos de la sigiente forma:

**:category**
<br/>
Se refere a la categoria del producto definida así:
| ID | Category |
| - | - |
| 0 | Todos los Productos |
| 1 | bebidas energeticas |
| 2 | Pisco |
| 3 | Ron |
| 4 | bebidas |
| 5 | Snack |
|6| Cerveza |
|7| Vodka |

**?name=**
<br/>
Se usa para la busqueda de productos por el nombre

Ejemplo

```
/api/products/3?name=bacardi
```

```js
[
  {
    id: 23,
    name: "RON BACARDI AÑEJO",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
    discount: 0,
    price: 4990,
    category: "ron",
  },
  {
    id: 24,
    name: "RON BACARDI 8 AÑOS",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardianejo9463.jpg",
    discount: 0,
    price: 5990,
    category: "ron",
  },
];
```

### /api/categories

Se obtiene todas las categorias de la siguiente forma:

```js
[
  {
    id: 1,
    name: "bebida energetica",
  },
  {
    id: 2,
    name: "pisco",
  },
  {
    id: 3,
    name: "ron",
  },
  {
    id: 4,
    name: "bebida",
  },
  {
    id: 5,
    name: "snack",
  },
  {
    id: 6,
    name: "cerveza",
  },
  {
    id: 7,
    name: "vodka",
  },
];
```
