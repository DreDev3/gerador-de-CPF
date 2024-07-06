import GeraCPF from './modules/geraCPF'
import './assets/css/style.css'

(function(){
    const button = document.querySelector('.button-gera')
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')

    button.addEventListener('click', () => {
        cpfGerado.innerHTML = gera.geraNovoCpf()
    })
})()