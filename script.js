const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

//adiciona um ouvidor de evento, vai dois argumentos, 1ª qual evento ele vai ficar ouvindo 'click'(vai ouvir toda vez que clickar) e em segundo a função que vai ser executada após o click
button.addEventListener('click', add)
//quando ouver um change(mudança) no form, a função save sera executada
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5) //pegar a data de hoje com a confg "pt-br" e DD/MM
    const dayExists = nlwSetup.dayExists(today) //vai retornar um valor booleano, true se o dia já foi adicionado e false se o dia ainda não foi adicionado 

    if (dayExists) { //se o valor for true o "if" é executado 
        alert("Dia já incluso 🤷‍♂️"); //e o alert será exibido 
        return //quando a função chega no return ela para
    }

    alert("Adicionado com sucesso😊") //se o valor for false o "if" vai ser pulado como se não existisse, executando esse alert
    nlwSetup.addDay(today); //e adicionando o dia na página 
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) //localStorage é uma maneira de guardar dados no navegador
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data)
nlwSetup.load()

