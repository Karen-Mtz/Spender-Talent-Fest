# Spender
Spender es una **webapp** para  registro y proyección de gastos de proyectos desarrollada con: 

 - **ECMAScript 6**
 - **HTML5**
 - **CSS3**
 - **BOOTSTRAP**


### FUNCIONALIDAD

<a href="http://es.tinypic.com?ref=2hpqahc" target="_blank"><img src="http://i67.tinypic.com/2hpqahc.jpg" border="0" alt="Image and video hosting by TinyPic"></a>

Con esta función asignamos un nombre y presupuesto a un proyecto y confirmamos que aparezca en la interfaz.


Primero,  valida si los campos del formulario no están vacíos.

<a href="http://es.tinypic.com?ref=4scrx5" target="_blank"><img src="http://i66.tinypic.com/4scrx5.png" border="0" alt="Image and video hosting by TinyPic"></a>
<a href="http://es.tinypic.com?ref=sqmm53" target="_blank"><img src="http://i65.tinypic.com/sqmm53.png" border="0" alt="Image and video hosting by TinyPic"></a>

 y espera un objeto de la función _readFromData_ y lo pasa como argumento a la siguiente función _insertNewRecord_ para imprimir sus propiedades en pantalla.
 

<a href="http://es.tinypic.com?ref=24opt00" target="_blank"><img src="http://i64.tinypic.com/24opt00.png" border="0" alt="Image and video hosting by TinyPic"></a>

_resetForm_ es una función para limpiar los campos de los formularios y estén disponibles para otra escritura. 

<a href="http://es.tinypic.com?ref=5fg8xe" target="_blank"><img src="http://i65.tinypic.com/5fg8xe.png" border="0" alt="Image and video hosting by TinyPic"></a>

_onEdit_ y _updateRecord_ son las funciones invocadas para editar los campos del fomurario, sobreescriben los datos ya existentes (en este caso cambian el nombre del proyecto). 

<a href="http://es.tinypic.com?ref=e1epu0" target="_blank"><img src="http://i66.tinypic.com/e1epu0.png" border="0" alt="Image and video hosting by TinyPic"></a>

_onDelete_ es la función invocada para eliminar los datos ingresados 

<a href="http://es.tinypic.com?ref=2q1ggo7" target="_blank"><img src="http://i64.tinypic.com/2q1ggo7.png" border="0" alt="Image and video hosting by TinyPic"></a>

