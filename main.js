// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", enterClick)

// Funçôes
function handleTryClick(event) {
  event.preventDefault() // Não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")
  
  verifyInput()

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function verifyInput() {
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value > 10)) {
    alert("Somente números de 0 a 10, por favor não colocar números maiores ou menores que eles.")
    xAttempts--
  } else if (!Number(inputNumber.value) && Number(inputNumber.value)!=0) {
    alert("Coloque números, não letras!")
    xAttempts--
  } else if (inputNumber.value == ""){
    alert("Coloque os números, não deixe vazio")
    xAttempts--
  }
}

function enterClick(e) {
  if(e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}