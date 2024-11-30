const movesData = [
    { // Principios básicos de la apertura
      title: 'Principios básicos de la apertura',
      moves: ['/FasesDeLaPartidaIMG/principios1.png', '/FasesDeLaPartidaIMG/principios2.png', '/FasesDeLaPartidaIMG/principios3.png', '/FasesDeLaPartidaIMG/principios4.png'],
      explanation: 'La apertura en ajedrez es la fase inicial del juego, donde se establecen las bases para el desarrollo de la partida. A continuación explicaremos los principios básicos que recomendamos seguir en la apertura para empezar una partida de manera sólida y segura:<br><br>Control del Centro: El centro del tablero es crucial en el ajedrez, ya que controlarlo proporciona mayor movilidad a las piezas y facilita el desarrollo. Las casillas centrales (d4, d5, e4, e5) son especialmente importantes. Puedes controlar el centro directamente con peones o con piezas, como los caballos y alfiles.<br><br>Desarrollo de Piezas Menores (Caballos y Alfiles): Una vez que has avanzado algunos peones para controlar el centro, es esencial desarrollar tus piezas menores (caballos y alfiles). Colocar estas piezas en posiciones activas y amenazantes te ayuda a crear presión sobre el oponente y a preparar futuros movimientos. Ubicar los alfiles y los caballos en casillas desde las cuales pueden ejercer influencia en el centro y en otras partes del tablero es fundamental.<br><br>Enroque: El enroque es una maniobra defensiva muy importante en el ajedrez. Generalmente, se recomienda enrocar temprano en el juego para proteger al rey de posibles amenazas y para conectar las torres en la defensa.',
      currentMoveIndex: 0
    },
    { // Apertura Española
      title: 'Apertura Española',
      moves: ['/jugadasIMG/inicio_partida.png', '/FasesDeLaPartidaIMG/española1.png', '/FasesDeLaPartidaIMG/española2.png', '/FasesDeLaPartidaIMG/española3.png'],
      explanation: 'La Apertura Española, también conocida como el Ruy López, es una de las aperturas más clásicas y respetadas en el ajedrez. Esta apertura comienza con los siguientes movimientos:<br><br>1-e4 e5<br>2-Nf3 Nc6<br>3-Bb5<br><br>Presión sobre e5: El alfil en b5 ataca al peón negro en e5, lo que puede obligar a las negras a defenderlo con d6 o Nf6, lo que puede conducir a una serie de variantes diferentes.<br><br>Desarrollo y Control del Centro: Al colocar el peón en e4 y el alfil en b5, las blancas también contribuyen al control del centro.<br><br>Preparación para el Enroque: Al abrir la línea para el alfil en b5, las blancas preparan el terreno para enrocar corto, ya que pueden mover su alfil fuera del camino de la torre.',
      currentMoveIndex: 0
    },
    { // Sistema Londres
      title: 'Sistema Londres',
      moves: ['/jugadasIMG/inicio_partida.png', '/FasesDeLaPartidaIMG/londres1.png', '/FasesDeLaPartidaIMG/londres2.png', '/FasesDeLaPartidaIMG/londres3.png'],
      explanation: 'El Sistema Londres es una apertura de ajedrez que se caracteriza por el desarrollo armónico de las blancas, enfocándose en la ocupación y control del centro del tablero.Esta apertura comienza con los siguientes movimientos:<br><br>1. d4 d5 <br>2.Nf3 Nf6<br>3.Bf4<br><br>Formación del esquema: La estructura típica del Sistema Londres se completa con el desarrollo del alfil a f4 y del peón a e3, creando una sólida formación defensiva.<br><br>Control del centro: Aunque las blancas no controlan el centro con peones centrales, su disposición de piezas permite un control efectivo de las casillas centrales y una preparación para ocuparlas más tarde.<br><br>Presión sobre d5: Al desplegar el alfil en f4 y el caballo en f3, las blancas ejercen presión sobre el peón negro en d5, lo que puede limitar las opciones de las negras y conducir a estructuras de juego específicas.',
      currentMoveIndex: 0
    },
    { // Gambito de Dama
      title: 'Gambito de Dama',
      moves: ['/jugadasIMG/inicio_partida.png', '/FasesDeLaPartidaIMG/gambito1.png', '/FasesDeLaPartidaIMG/gambito2.png'],
      explanation: 'El Gambito de Dama es una apertura agresiva en ajedrez que se caracteriza por el sacrificio de un peón en el centro para obtener una rápida movilidad y desarrollo de las piezas.Esta apertura comienza con los siguientes movimientos:<br><br>1. d4 d5 <br>2. c4<br><br>Donde las blancas sacrifican el peón c4 para presionar el centro y abrir líneas para el desarrollo.<br><br>Respuesta de las negras: Las negras tienen varias opciones después del Gambito de Dama, como aceptar el peón con cxd4, rechazarlo con dxc4 o continuar con otras jugadas para mantener la tensión en el centro.<br><br>Desarrollo de piezas: Independientemente de la respuesta de las negras, las blancas buscan desarrollar rápidamente sus piezas, especialmente el caballo en f3 y el alfil en c4 o b5, creando amenazas y presión sobre el centro del tablero.<br><br>Compensación dinámica: Aunque las blancas sacrifican un peón en el Gambito de Dama, obtienen una compensación dinámica en forma de desarrollo activo, control del centro y oportunidades de ataque, lo que puede generar iniciativa y ventajas a largo plazo.',
      currentMoveIndex: 0
    },
    { // Defensa Francesa
      title: 'Defensa Francesa',
      moves: ['/jugadasIMG/inicio_partida.png', '/FasesDeLaPartidaIMG/francesa1.png'],
      explanation: 'La Defensa Francesa es una sólida apertura de ajedrez para las negras que se caracteriza por la respuesta e6 al primer movimiento de las blancas, seguido por d4 d5, creando una estructura de peones en el centro. Esta apertura comienza con los siguientes movimientos:<br><br> 1.e4 e6 <br><br>Donde las negras preparan su respuesta al avance del peón de rey blanco y limitan la movilidad del alfil en f1.<br><br>Estructura de peones: Con d4 d5, las negras establecen una sólida estructura de peones en el centro, apuntando a controlar y bloquear la posición central.<br><br>Plan de juego: Las negras buscan desarrollar sus piezas de manera armoniosa, típicamente con Nc6, Bd6, y luego c5, presionando el centro y buscando contrajuego activo.<br><br>Variaciones: La Defensa Francesa tiene varias variantes, incluyendo la Variante Winawer con ...Cxd4 y la Variante Tarrasch con ...c5, cada una con sus propios planes y objetivos.',
      currentMoveIndex: 0
    },
    { // Defensa Escandinava
      title: 'Defensa Escandinava',
      moves: ['/jugadasIMG/inicio_partida.png', '/FasesDeLaPartidaIMG/escandinava1.png', '/FasesDeLaPartidaIMG/escandinava2.png', '/FasesDeLaPartidaIMG/escandinava3.png'],
      explanation: 'La Defensa Escandinava es una apertura de ajedrez poco convencional pero sólida para las negras, que comienza con la respuesta d5 al primer movimiento de las blancas e4.<br><br>La defensa comienza con d5, donde las negras buscan romper el centro blanco de manera inmediata, ofreciendo un peón para obtener un desarrollo rápido y activo de sus piezas.<br><br>Aceptación del gambito: Si las blancas aceptan el peón con exd5, las negras pueden recapturar con su peón o su caballo, manteniendo una posición sólida y activa.<br><br>Desarrollo de piezas: Tras la recaptura en d5, las negras buscan desarrollar sus piezas de manera armoniosa, típicamente con Nf6, seguido por Nc6 y/o Bd6, presionando el centro y preparándose para el enroque.<br><br>Contrajuego temprano: La Defensa Escandinava busca provocar desequilibrios en la posición desde el principio, brindando a las negras oportunidades para un juego activo y agresivo desde las primeras jugadas.',
      currentMoveIndex: 0
    },
    { // Defensa Siciliana
      title: 'Defensa Siciliana',
      moves: ['/jugadasIMG/inicio_partida.png', '/FasesDeLaPartidaIMG/siciliana1.png', '/FasesDeLaPartidaIMG/siciliana2.png','/FasesDeLaPartidaIMG/siciliana3.png','/FasesDeLaPartidaIMG/siciliana4.png','/FasesDeLaPartidaIMG/siciliana5.png'],
      explanation: 'La Defensa Siciliana es una de las aperturas más populares y dinámicas para las negras en respuesta al primer movimiento de las blancas, 1. e4. Se explicara la variante abierta de la defensa siciliana<br><br>Inicio agresivo: La defensa comienza con c5, donde las negras desafían el centro blanco desde el principio y buscan crear tensiones en la posición.<br><br>Contragolpe en el flanco: Al jugar c5, las negras buscan un contrajuego inmediato en el flanco de la dama, preparándose para expandirse en ese sector y buscar oportunidades de ataque.<br><br>Variedad de líneas: La Defensa Siciliana tiene numerosas variantes, como la Variante Najdorf, la Variante Scheveningen y la Variante Dragon, cada una con sus propias ideas y planes estratégicos.<br><br>Desarrollo dinámico: Después de c5, las negras suelen desarrollar su caballo a c6 o d7, seguido por Nf6, con el objetivo de controlar el centro y preparar el enroque.',
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
  