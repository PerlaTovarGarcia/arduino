# Selecctivo (Alimenta a tu mascota)

## Índice


* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivo](#3-objetivo)
* [4. Consideraciones tecnicas](#4-consideraciones-tecnicas)
* [5. Entregable](#5-entregable)
* [6. Hacker Edition](#6-hacker-edition)


***

## 1. Preámbulo

Arduino es una compañía de fuente abierta y hardware abierto así como un proyecto y comunidad internacional que diseña y manufactura placas de desarrollo de hardware para construir dispositivos digitales y dispositivos interactivos que puedan detectar y controlar objetos del mundo real. Arduino se enfoca en acercar y facilitar el uso de la electrónica y programación de sistemas embebidos en proyectos multidisciplinarios. Los productos que vende la compañía son distribuidos como Hardware y Software Libre, bajo la Licencia Pública General de GNU (GPL) y la Licencia Pública General Reducida de GNU (LGPL), permitiendo la manufactura de las placas Arduino y distribución del software por cualquier individuo. Las placas Arduino están disponibles comercialmente en forma de placas ensambladas o también en forma de kits hazlo tu mismo (Del inglés DIY: "Do It Yourself").

## 2. Resumen del proyecto

En México un gran porcentaje de sus habitantes tienen alguna mascota en casa. Las mascotas adquieren un gran valor sentimental, manifestado tanto de parte del amo como del mismo animal. Las razones para adoptar un “nuevo integrante” en las familias son tan diversas como las clases de mascotas que se pueden tener dentro del hogar. Pero en su mayoría la gente prefiere como mascotas a los perros y gatos (Sánchez, 2013).

De acuerdo con el censo 2018 del Instituto Nacional de Estadística y Geografía (INEGI), México es el país de la región de América Latina con el mayor número de perros en la región, con aproximadamente 19.5 millones en todo el país.

Esto se traduce en que 7 de cada 10 hogares en México cuentan con una mascota. De hecho, el Consejo Nacional de Población (CONAPO) revela que el número de perros domésticos aumentó 20% del año 2010 al 2018; mientras que, alrededor del 80% de los habitantes con mascotas tiene caninos en su hogar.

Además de los costos económicos asociados a las mascotas, los propietarios deben pensar en el tiempo y cuidado que deben invertir en ellas. Se recomienda dedicar a la mascota al menos 45 minutos por día (Estévez, 2005). Sin embargo, mucha gente deja a sus mascotas solas durante gran parte del día debido a que no pueden abandonar sus responsabilidades cotidianas y tampoco todos los establecimientos permiten el ingreso de animales, siendo un problema especialmente cuando la persona desea salir a vacacionar (ESTILO DE VIDA, 2017).

En este proyecto se va a abordar la problemática con respecto al cuidado en la alimentación de las mascotas.

## 3. Objetivo

El objetivo principal es aprender a construir una interfaz web usando el framework Firmata. Para poder interactuar con el usuario y el dispensador.

Como primer paso debe programarse con socket.io un localhost para que puedas hacer las pruebas en web.

Como segundo paso debe programarse el motor  (servo) para que pueda abrir y cerrar con la web app que esta en el localhost. Y debe ser programado en JavaScript con el framework Johnny-Five.

Como tercer paso el motor  (servo) debe colocarse en la estructura, debe poder abrir y cerrar una compuerta donde van estar colocadas las croquetas.

Como cuarto paso debe subirse a github la web app en github-pages.

### objetivos especificos (historias de usuario)

1. Primera historia de usuario.
Yo como usuario debo poder acceder a la web app desde cualquier dispositivo.
• El usuario  necesita un visualizar una pagina con dos botones para que controle el flujo de alimento  del dispensador, uno de ellos debe abrir la compuerta y el otro debe cerrarla.


2. Segunda historia de usuario.
Yo como usuario solo debo dejar conectado desde mi casa el arduino con el dispensador.
• El arduino debe estar a su vez conectado a la luz con un regulador de voltaje de 5 voltios.
• El motor (servo) debe de estar montado en el dispensador, conectado al arduino, el cual debe poder abrir y cerrar una compuerta donde van estar colocado el alimento.


## 4. Consideraciones tecnicas.

Este proyecto se debe "resolver" de forma individual.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6+), HTML y CSS y empaquetada de manera automatizada.

Para este proyecto se considera utilizar:

1. Arduino

2. Johnny five (framework para javascript)

3. Firmata (web app)

4. Node.js

5. socket.io

## 5. Entregable (Parte obligatoria)
• Un dispensador de comida que pueda usarse desde una web app.

• Debe estar en github-pages.

• El servo debe estar funcionando y colocado en el dispensdador con el arduino funcionando, conectado a la luz.

## 6. Hacker Edition
• El usuario debe registarse con un codigo que venga en el dispensador.
