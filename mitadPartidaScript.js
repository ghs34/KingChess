const movesData = [
    { // Introdución
      title: 'Introdución',
      moves: ['/FasesDeLaPartidaIMG/mitadPartidaIntroduccion.png'],
      explanation: 'Una vez hemos llevado a cabo todas las ideas básicas de la apertura, empieza el medio juego, la parte más complicada de la partida donde priman la estrategia y la táctica.<br><br>No hay una única manera de jugar el medio juego, cada partida en ajedrez es única y no siempre puede ser fácil saber qué hacer en cada momento. Pese a ello, te vamos a proporcionar algunas ideas y estrategias muy útiles que puedes seguir en caso de que no sepas qué hacer durante el medio juego.',
      currentMoveIndex: 0
    },
    { // Activar las piezas mayores
      title: 'Activar las piezas mayores',
      moves: ['/FasesDeLaPartidaIMG/activarPiezasMayores.png'],
      explanation: 'Una de las ideas básicas es acabar de activar todas las piezas. En la apertura ya deberíamos haber activado nuestras piezas menores(caballos y alfiles), y también deberíamos de habernos enrocado. De esta manera, ahora toca activar las piezas mayores(torres y dama).<br><br>Para ello, una idea muy típica es avanzar la dama para dejar conectadas nuestras dos torres en primera fila, defendiéndose entre ellas.<br><br>Además de conectar las torres, conviene intentar controlar una columna, preferiblemente si esta es una columna abierta o semiabierta. Las columnas abiertas son aquellas en las cuales no hay peones de ningún jugador, y las semiabiertas son aquellas en las que un solo jugador tiene peones.',
      currentMoveIndex: 0
    },
    { // Romper en el centro
      title: 'Romper en el centro',
      moves: ['/FasesDeLaPartidaIMG/romperCentro1.png', '/FasesDeLaPartidaIMG/romperCentro2.png'],
      explanation: 'Otra idea muy típica es romper en el centro. Esto se refiere a generar una confrontación de los peones centrales para que se intercambien y haya más espacio en un sector del tablero.<br><br>Esto es especialmente útil para cuando tenemos más piezas en ese sector del tablero, de forma que al liberarse el espacio, podamos presionar más fácilmente al rival. También resulta beneficioso para cuando tenemos nuestras torres activas en esas columnas centrales de forma que, al liberarse los peones, estas columnas pueden quedar abiertas y la presión de nuestras torres se hace mucho más evidente.',
      currentMoveIndex: 0
    },
    { // Coordinar nuestras piezas
      title: 'Coordinar nuestras piezas',
      moves: ['/FasesDeLaPartidaIMG/coordinarPiezas.png'],
      explanation: 'Un concepto fundamental que hay que conocer es el de la coordinación de nuestras piezas. Esto significa que nuestras piezas están defendidas entre sí, de forma que nunca nos puedan comer una pieza sin que nosotros podamos retomar esa pieza. Además, nuestras piezas deberían amenazar múltiples puntos débiles del rival, haciendo que varias de nuestras piezas hagan presión en un punto.<br><br>El hecho de que nuestras piezas estén bien coordinadas nos facilita a la hora de encontrar tácticas que nos puedan dar material de ventaja.',
      currentMoveIndex: 0
    },
    { // Simplificar las piezas
      title: 'Simplificar las piezas',
      moves: ['/FasesDeLaPartidaIMG/simplificarPiezas.png'],
      explanation: 'En el caso de que durante el medio juego hayamos conseguido sacar ventaja de material al rival, una estrategia muy útil es simplificar nuestras piezas. Normalmente se realiza intercambiando piezas de un valor similar.<br><br>Esto nos sirve para hacer que nuestra ventaja de material cobre fuerza, ya que al haber pocas piezas en el tablero reducimos las amenazas del rival, a la vez que nuestra ventaja se hace más evidente.<br><br>Si por ejemplo, conseguimos un par de peones de ventaja, al principio puede parecer una ventaja mínima, pero cuando solo quedan unas pocas piezas en el tablero, un par de peones pueden hacer la diferencia.',
      currentMoveIndex: 0
    }
  ];
  
  let currentPlayIndex = 0; // Índice de la jugada actual

    function changeBoard(moveIndex) {
        const boardImages = document.getElementById('board');
        const explanation = document.getElementById('explanation');
        const moveStatus = document.getElementById('moveStatus');
        const currentPlay = movesData[currentPlayIndex];
        if (moveIndex >= 0 && moveIndex < currentPlay.moves.length) {
        boardImages.src = currentPlay.moves[moveIndex];
        explanation.innerHTML = currentPlay.explanation; // Cambiamos de textContent a innerHTML
        moveStatus.textContent = `${moveIndex + 1}/${currentPlay.moves.length}`; // Actualiza el número de movimiento actual
        currentPlay.currentMoveIndex = moveIndex;
        tituloSeccion.textContent = currentPlay.title;
        }
    }
  
  
  function prevMove() {
    const currentPlay = movesData[currentPlayIndex];
    if (currentPlay.currentMoveIndex > 0) {
      currentPlay.currentMoveIndex--;
      changeBoard(currentPlay.currentMoveIndex);
    }
  }
  
  function nextMove() {
    const currentPlay = movesData[currentPlayIndex];
    if (currentPlay.currentMoveIndex < currentPlay.moves.length - 1) {
      currentPlay.currentMoveIndex++;
      changeBoard(currentPlay.currentMoveIndex);
    }
  }
  
  function selectPlay(playIndex) {
    currentPlayIndex = playIndex;
    changeBoard(0); // Al cambiar de jugada, mostrar el primer movimiento
  }
  