let btnMenu =  document.getElementById('btn_menu')
let menu = document.getElementById('menu_mobile')
let overlay = document.getElementById('overlay_menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir_menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir_menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir_menu')
})

const form = document.getElementById('form-contato')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    // ALERT BONITINHO
    const alert = document.createElement('div')
    alert.innerText = "Mensagem enviada com sucesso! 💚"
    
    alert.style.position = "fixed"
    alert.style.top = "20px"
    alert.style.left = "50%"
    alert.style.transform = "translateX(-50%)"
    alert.style.background = "#00FF08"
    alert.style.color = "#000"
    alert.style.padding = "15px 30px"
    alert.style.borderRadius = "10px"
    alert.style.fontWeight = "600"
    alert.style.zIndex = "99999"
    alert.style.boxShadow = "0 0 10px #00FF08"

    document.body.appendChild(alert)

    // LIMPA O FORMULÁRIO ✨
    form.reset()

    // envia depois de 2s
    setTimeout(() => {
        form.submit()
    }, 2000)
})