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

    // Validar el formulario - usando destructuracion
    const { binario } = datoBin;
    console.log( binario );
    console.log( typeof binario );


    if( datoBin.binario == '0' && datoBin.binario == '1' ) {
      console.log('Si bien');
    } else {
      console.log('Error....')
    }

  });
  








