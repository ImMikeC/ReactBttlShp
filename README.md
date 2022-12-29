# BattleShip React App.

El famoso juego de mesa, BattleShip, ahora en ReactJS.

### Instrucciones básicas.

Puedes correr 
#### npm start 

para correr el servicio o esperar que al inicio Gitpod lo haga por ti.
Es recomendable correr antes
#### npm install 
para que no te falte ninguna dependencia.

### Características.
Se usó **styled-components v5.3.6** para dar estilo dentro de cada archivo de **views** y así tener más control de la apariencia de cada elemento mientras se va desarrollando la estructura.

### Jugabilidad.
Debe digitarse una coordenada, es decir, un punto en las **x** y otro en las **y** para poder hacer un tiro en la zona/tablero del enemigo (en este caso, la computadora). 
Los tiros de esta última se generan de manera aleatoria dentro de los límites del tablero del jugador **persona** e inmediatamente después de que se haya generado nuestro tiro.
Un recuadro en verde quiere decir que el tiro no fue certero.
Un recuadro en rojo significa que se ha dado en el blanco.
Las posiciones de las naves es fija y es siempre la misma.
El juego se resetea al actualizar la página.

