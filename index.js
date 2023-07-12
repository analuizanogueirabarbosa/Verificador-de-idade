function verificar() {
    var number = document.getElementById('number').value
    var checkboxMasc = document.getElementById('checkboxMasc')
    var checkboxFem = document.getElementById('checkboxFem')
    var conteudo = document.getElementById('conteudo')
    // window.prompt(number)

    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - number

    // var genero1 = masculino
    // var genero2 = feminino

    if (checkboxMasc.checked) {
        conteudo.innerHTML = `Você tem ${idade} anos de idade e seu gênero é masculino`

    } if (checkboxFem.checked) {
        conteudo.innerHTML = `Você tem ${idade} anos de idade e seu gênero é feminino`

    }

}



























