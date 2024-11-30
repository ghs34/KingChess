const movesData = [
  {
      moves: ['/jugadasIMG/enroque1.png', '/jugadasIMG/enroque2.png', '/jugadasIMG/enroque4.png', '/jugadasIMG/enroque5.png', '/jugadasIMG/enroque3.png', '/jugadasIMG/enroque6.png'],
      title: 'Enroque',
      explanation: [
          'El enroque es un movimiento especial en el ajedrez que implica mover el rey y una de las torres al mismo tiempo.',
          'Enroque corto: El rey se mueve dos casillas hacia la torre que está a su derecha, y la torre se coloca al lado izquierdo del rey.',
          'Enroque largo: El rey se mueve dos casillas hacia la torre que está a su izquierda, y la torre se coloca al lado derecho del rey.',
          'El enroque no se puede realizar siempre, estas son las situaciones: El rey está en jaque.',
          'Alguna de las posiciones por las que pasa el rey para hacer el enroque está amenazada por alguna pieza rival.',
          'El rey ya ha realizado un movimiento.'
      ],
      currentMoveIndex: 0
  },
  {
      moves: ['/jugadasIMG/jaque1.png', '/jugadasIMG/jaque2.png', '/jugadasIMG/jaque3.png', '/jugadasIMG/jaque4.png'],
      title: 'Jaque',
      explanation: [
          'El jaque ocurre cuando el rey de un jugador está siendo atacado por una pieza adversaria.',
          'Mover el rey a una casilla segura.',
          'Capturar la pieza que está dando el jaque.',
          'Interponer una pieza entre el rey y la pieza que está dando el jaque.'
      ],
      currentMoveIndex: 0
  },
  {
      moves: ['/jugadasIMG/jm1.png', '/jugadasIMG/jm2.png', '/jugadasIMG/jm3.png', '/jugadasIMG/jm4.png'],
      title: 'Jaque Mate',
      explanation: [
          'El jaque mate es la situación en la que el rey de un jugador está en jaque y no hay ninguna manera legal de evitar el jaque.',
          'Para dar jaque mate y ganar la partida se deben cumplir los siguientes requisitos: dar jaque al rey enemigo con alguna pieza.',
          'El rey enemigo no puede moverse a ninguna otra posición debido a que todas las posiciones a las que podría moverse están siendo amenazadas por alguna pieza nuestra.',
          'El rival no puede bloquear el jaque interponiendo alguna pieza entre nuestra pieza que da el jaque y su rey. <br><br> El rival no puede comer la pieza que da el jaque de ninguna manera.'
      ],
      currentMoveIndex: 0
  },
  {
      moves: ['/jugadasIMG/pp1.png', '/jugadasIMG/pp2.png', '/jugadasIMG/pp3.png'],
      title: 'Peón al Paso',
      explanation: [
          'Permite que un peón que avanza dos casillas desde su posición inicial pueda ser capturado por un peón enemigo como si solo se hubiera movido una casilla. <br><br> Movimiento inicial de dos casillas: Cuando un peón se encuentra en su posición inicial y tiene la opción de avanzar dos casillas en lugar de una, como es el caso en su primer movimiento, está sujeto a la regla del peón al paso.',
          'Oportunidad de captura al paso: Si un peón enemigo se encuentra en una casilla adyacente a la que ha avanzado dos casillas el peón inicial, el peón enemigo tiene la opción de capturar al paso. La oportunidad de capturar al paso solo está disponible en el próximo movimiento inmediato después de que se haya movido el peón dos casillas. Si el jugador no realiza la captura al paso en el siguiente turno, pierde la oportunidad y el juego continúa normalmente.',
          'Captura al paso: Para llevar a cabo la captura al paso, el peón enemigo se mueve a la casilla que habría ocupado el peón que avanzó dos casillas, como si este último solo hubiera avanzado una. Luego, el peón que realizó el movimiento al paso se retira de la tabla, como si hubiera sido capturado normalmente.',
      ],
      currentMoveIndex: 0
  },
  {
      moves: ['/jugadasIMG/coronacion1.png', '/jugadasIMG/coronacion2.png', '/jugadasIMG/coronacion3.png'],
      title: 'Coronación de Peones',
      explanation: [
          'La coronación de peones es un evento emocionante en el ajedrez que ocurre cuando un peón alcanza la última fila del tablero.',
          'En este momento, el peón se convierte en otra pieza más poderosa, generalmente una dama, pero también puede ser una torre, un alfil o un caballo, según la elección del jugador.',
          'El jugador debe elegir la pieza a la que desea convertir su peón al alcanzar la octava fila.'
      ],
      currentMoveIndex: 0
  }
];

function changeBoard(moveIndex) {
  const boardImages = document.getElementById('board');
  const currentPlay = movesData[currentPlayIndex];

  if (moveIndex >= 0 && moveIndex < currentPlay.moves.length) {
      boardImages.src = currentPlay.moves[moveIndex];

      const explanation = document.getElementById('explanation');
      explanation.innerHTML = ''; // Limpiar la explicación actual

      currentPlay.explanation.forEach((text, index) => {
          const paragraph = document.createElement('p');
          paragraph.innerHTML = text;
          paragraph.id = `explanation_${index}`;
          if (index === moveIndex) {
              paragraph.classList.add('highlight');
          }
          explanation.appendChild(paragraph);
      });

      const moveStatus = document.getElementById('moveStatus');
      moveStatus.textContent = `${moveIndex + 1}/${currentPlay.moves.length}`; // Actualiza el número de movimiento actual

      const tituloJugada = document.getElementById('tituloJugada');
      tituloJugada.textContent = currentPlay.title;

      currentPlay.currentMoveIndex = moveIndex;
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