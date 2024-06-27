
//som da pagina
document.addEventListener("DOMContentLoaded", function() {
  var sound = new Howl({
      src: ['./assets/songs/fundo/It Must Have Been Love (acoustic cover) - Amber Leigh Irish (Official audio art).mp3'],
      autoplay: true,
      loop: true,
      volume: 0.5,
      onend: function() {
          console.log('Finished!');
      }
  });

  var isSoundPaused = false; // Variável para controlar se o som está pausado

  // Função para pausar ou retomar o som
  function toggleSound() {
      if (isSoundPaused) {
          sound.play(); // Retoma o som
          isSoundPaused = false; // Atualiza o estado do som
      } else {
          sound.pause(); // Pausa o som
          isSoundPaused = true; // Atualiza o estado do som
      }
      updateButton(); // Atualiza o botão
  }

  // Função para atualizar o botão de acordo com o estado do som
  function updateButton() {
      var button = document.getElementById('toggleSoundButton');
      button.classList.toggle('clicked', isSoundPaused); // Adiciona ou remove a classe 'clicked' com base no estado do som
  }

  // Adiciona um evento de clique ao botão flutuante
  document.getElementById('toggleSoundButton').addEventListener('click', toggleSound);

  // Atualiza o botão quando a música termina
  sound.on('end', function() {
      updateButton();
  });

  // Pausa o som quando outra mídia for acionada
  var otherMediaElements = document.querySelectorAll('video, audio');
  otherMediaElements.forEach(function(mediaElement) {
      mediaElement.addEventListener('play', function() {
          if (!isSoundPaused) {
              sound.pause();
          }
      });
  });

  // Inicializa o botão
  updateButton();
});
