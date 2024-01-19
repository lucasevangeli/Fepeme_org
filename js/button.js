document.addEventListener('DOMContentLoaded', function () {
    var videoButton = document.getElementById('videoButton');
    var notificationDot = document.getElementById('notificationDot');

    // Emitir um bip na carga da página
    var audio = new Audio('bip.mp3');
    audio.play();

    // Adicionar classe "active" para iniciar a animação
    videoButton.classList.add('active');

    // Exibir o ponto de notificação
    notificationDot.style.display = 'block';

    // Fazer o ponto de notificação piscar
    setInterval(function () {
        notificationDot.style.visibility = (notificationDot.style.visibility === 'hidden' ? '' : 'hidden');
    }, 500);
});
