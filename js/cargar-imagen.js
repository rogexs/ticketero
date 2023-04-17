function mostrarVistaPrevia(input) {
    var vistaPrevia = document.getElementById('vista-previa');
    if (input.files && input.files[0]) {
      var lector = new FileReader();
      lector.onload = function(e) {
        vistaPrevia.src = e.target.result;
      }
      lector.readAsDataURL(input.files[0]);
    }
  }
  