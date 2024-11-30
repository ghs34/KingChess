const movesData = [
    { // Principios básicos de los finales
      title: 'Principios básicos de los finales',
      moves: ['/FasesDeLaPartidaIMG/finalPartidaIMG/principios.png'],
      explanation: 'Cuando la partida está lo suficientemente avanzada y quedan pocas piezas en el tablero, llegamos a lo que se conoce como el final de la partida.<br><br>La idea principal que debemos seguir en esta fase es intentar reducir el número de piezas del rival al máximo e intentar coronar alguno de nuestros peones en alguna pieza más fuerte(dama en la mayoría de casos) para poder sacarle ventaja a nuestro rival.<br><br>Una vez hemos dejado al rey enemigo prácticamente o totalmente solo y sin oportunidades, teniendo nosotros material de ventaja, podemos llegar a un final donde el objetivo será acorralar al rey enemigo para darle jaque mate.<br><br>En las siguientes secciones os enseñamos los finales más comunes.',
      currentMoveIndex: 0
    },
    { // Rey y Dama vs Rey
      title: 'Rey y Dama vs Rey',
      moves: ['/FasesDeLaPartidaIMG/finalPartidaIMG/finalDama1.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalDama2.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalDama3.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalDama4.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalDama5.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalDama6.png'],
      explanation: 'En el final de rey y dama contra rey, el objetivo es forzar al rey contrario a una esquina del tablero y darle jaque mate.<br><br>Centralización de la dama: Primero, centraliza tu dama para controlar el tablero y limitar los movimientos del rey enemigo. <br><br>Uso del rey: Utiliza tu rey como apoyo para la dama, avanzando lentamente hacia el rey enemigo y asegurándote de mantenerlo seguro.<br><br>Creación de una red: Avanza tu dama y rey gradualmente, cerrando el espacio alrededor del rey enemigo y forzándolo hacia una esquina. <br><br>Preparación del mate: Una vez que el rey enemigo está confinado, aleja la dama del rey enemigo dejándolo acorralado en la última fila o columna cerca de la esquina, y acerca tu rey para poder dar el jaque mate. <br><br>Entrega del mate: Una vez que has logrado restringir al rey enemigo y has creado una red impenetrable, puedes darle jaque mate con tu dama mientras tu rey lo protege, asegurando la victoria.',
      currentMoveIndex: 0
    },
    { // Rey y Torre vs Rey
      title: 'Rey y Torre vs Rey',
      moves: ['/FasesDeLaPartidaIMG/finalPartidaIMG/finalTorre1.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalTorre2.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalTorre3.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalTorre4.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalTorre5.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalTorre6.png'],
      explanation: 'En el final de rey y torre contra rey, el objetivo es utilizar la torre y el rey para acorralar al rey contrario y darle jaque mate.<br><br>Creación de un muro: Fíjate en un sector del tablero donde quieras acorralar al rey enemigo. Mueve la torre cortándole el paso al rey, de forma que no pueda traspasar la fila o columna que estés controlando. <br><br>Acorrala al rey: Mueve tu torre y rey gradualmente, cerrando el espacio alrededor del rey enemigo y limitando sus movimientos, hasta tenerlo acorralado en la última fila o columna. <br><br>Mueve la torre: En caso de que el rey enemigo amenace tu torre, muévela a la otra punta y sigue persiguiendo al rey enemigo con tu rey hasta tenerlo delante y hacerle retroceder.También puedes hacer un movimiento de la torre para obligar al rey enemigo a ponerse delante del tuyo.<br><br>Entrega del mate: Una vez que has logrado restringir al rey enemigo y has creado una situación donde esté en jaque mate sin posibilidad de escapatoria, puedes darle jaque mate con tu torre, asegurando la victoria.',
      currentMoveIndex: 0
    },
    { // Rey y Peón vs Rey
      title: 'Rey y Peón vs Rey',
      moves: ['/FasesDeLaPartidaIMG/finalPartidaIMG/finalPeon1.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalPeon2.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalPeon3.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalPeon4.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalPeon5.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalPeon6.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalPeon7.png', '/FasesDeLaPartidaIMG/finalPartidaIMG/finalPeon8.png'],
      explanation: 'En el final de Rey y Peón contra Rey, el objetivo es coronar el peón en una pieza más poderosa(normalmente dama) para dar jaque mate al rey contrario.<br><br>Avance del peón: Mueve tu peón hacia la octava fila para coronarlo en una pieza más poderosa, como una dama o una torre, o para dar jaque mate.<br><br>Protección del rey: Utiliza tu rey para proteger el avance del peón y asegurarte de que esté seguro de los ataques del rey enemigo. Tu rey debería estar siempre por delante de tu peón. <br><br>Creación de una barrera: Mueve tu rey y peón de manera estratégica para crear una barrera que impida al rey enemigo acercarse al peón. <br><br>Uso del zugzwang: Una vez que has avanzado tu peón lo suficiente y has limitado los movimientos del rey enemigo, utiliza la técnica de zugzwang para forzarlo a moverse a una posición desfavorable.<br><br>Coronación o mate: Una vez que has asegurado el avance del peón y has limitado la movilidad del rey enemigo, puedes coronar el peón en una pieza más poderosa o darle jaque mate, asegurando la victoria.',
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

      const explanation = document.getElementById('explanation');
      explanation.innerHTML = ''; // Limpiar la explicación actual

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