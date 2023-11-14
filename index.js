function validateForm() {
    var coisa = ['nome', 'email', 'senha', 'confirmarSenha', 'telefone', 'cpf'];
    var validacao = true;
    var alerta = false;

    for (var i = 0; i < coisa.length; i++) {
        var coisaId = coisa[i];
        var coisaElement = document.getElementById(coisaId);
        var coisaValue = coisaElement.value;

        
        if (coisaValue === '') {
           
            coisaElement.classList.add('campo-vazio');
            coisaElement.style.border = '1px solid red';


            if (!alerta) {
               
                alert('Por favor, preencha todos os campos.');
                alerta = true;  
            }
            
            validacao = false;
        } else {
            
            coisaElement.classList.remove('campo-vazio');
            coisaElement.style.border = ''
        }
    }

    return validacao;
}