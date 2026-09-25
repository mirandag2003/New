const botao = document.getElementById("modo-btn");

botao.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        botao.innerText = "☀️";
    } else{
        botao.innerText = "🌙";
    }

});