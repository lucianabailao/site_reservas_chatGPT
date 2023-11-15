function calculateStayDuration() {
    const checkInDate = new Date(document.getElementById('checkIn').value);
    const checkOutDate = new Date(document.getElementById('checkOut').value);

    if (!isNaN(checkInDate.getTime()) && !isNaN(checkOutDate.getTime())) {
        const timeDiff = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
        const stayDuration = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Converte milissegundos para dias
        document.getElementById('stayDuration').value = stayDuration + ' diárias';
    } else {
        document.getElementById('stayDuration').value = '';
    }
}

function checkAvailability() {
    // Simulação de lógica de verificação de disponibilidade
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const checkInDate = new Date(document.getElementById('checkIn').value);
    const checkOutDate = new Date(document.getElementById('checkOut').value);
    const roomType = document.getElementById('roomType').value;
    const stayDuration = document.getElementById('stayDuration').value;
    const today = new Date();
    
    if (!name || !roomType || !stayDuration|| !phone ||!email || checkInDate > today || checkOutDate < today || checkOutDate <= checkInDate) {
        document.getElementById('availabilityResult').innerText = 'Por favor, preencha todos os campos e escolha datas válidas.';
    } else {
        document.getElementById('availabilityResult').innerText = `Quartos disponíveis! Faça sua reserva agora, ${name}! Entraremos em contato pelo telefone ${phone}.`;
    }
}
// Adicione essa linha antes de usar o campo de telefone no script.js
$(document).ready(function(){
    $('#phone').inputmask('(99) 9999-9999');
});


