document.addEventListener('DOMContentLoaded',  () => { // Voy a escuchar mi aplicacion
  iniciarapp();
});

function iniciarapp() {

};

// Eventos

// Recibir binarios
  const datoBin = {
    binario: ''
  };

  const binario = document.querySelector('#binario');
  
  binario.addEventListener( 'input', (evento) => { 
    datoBin[evento.target.id] = evento.target.value;
    
    console.log(datoBin);
  });
  








