# INTRODUCCIÓN AL GESTOR DE PAQUETES NPM

EJERCICIO
* Entra al sitio https://www.npmjs.com/, busca el paquete `nodemon`, y lee la documentación.

* En la barra de búsqueda de npm, ubica el término fake data. Con éste encontrarás paquetes que generan data de pruebas. Instala, al menos, dos paquetes que generen datos falsos, y usando la documentación, intenta hacer uso de éstos en un programa nodejs.

* Crea un nuevo proyecto con el comando `npm init`, que contenga un archivo `index.js`, un archivo `utils.js`, y un archivo `config.js`.

* En el archivo `utils.j`, crea una función que devuelva la concatenación de dos cadenas de texto, o el largo de caracteres resultante de la concatenación de las dos cadenas de texto, dependiendo de un valor booleano.

* En el archivo `config.js`, crea una variable de tipo booleana, expórtala, y haz uso de ella en la función creada en el archivo `utils.js`, para definir si la función retornará las cadenas de texto concatenadas, o el largo de caracteres de la concatenación.

* Instala en tu proyecto el paquete [Nano ID](https://www.npmjs.com/package/nanoid), y lee la documentación para generar dos id diferentes https://github.com/ai/nanoid#js, guarda cada valor en una variable independiente.

* Exporta la función de tu archivo `utils.js`, e invócala en tu archivo principal `index.js` utilizando los dos id generados.
* Cambia el valor de la variable booleana en el archivo `config.js`, para variar el resultado de tu programa.