function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;
    var mensagemElement = document.getElementById('mensagem');
  
    if (parseInt(campoB) > parseInt(campoA)) {
      mensagemElement.textContent = 'Sucesso';
      mensagemElement.className = 'message success';
    } else {
      mensagemElement.textContent = 'Erro: B deve ser maior que A.';
      mensagemElement.className = 'message error';
    }
  }
  