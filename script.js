const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function calcularIMC(event) {
  event.preventDefault();

  var peso = parseFloat(document.getElementById("peso").value);
  var alturaCm = parseFloat(document.getElementById("altura").value);
  var resultado = document.getElementById("resultado");

  if (peso <= 0 || alturaCm <= 0) {
    resultado.innerHTML =
      "Por favor, insira valores válidos para peso e altura.";
    return;
  }

  var altura = alturaCm / 100;
  var imc = peso / (altura * altura);

  var categoria = "";

  if (imc < 18.5) {
    categoria =
      "Abaixo do peso!<br>Procure um médico.<br>Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição.<br>É preciso saber qual é o caso.";
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria =
      "Peso normal<br>Que bom que você está com o peso normal!<br>E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.";
  } else if (imc >= 25 && imc < 29.9) {
    categoria =
      "Sobrepeso<br>Está acima do peso ideal para sua altura<br>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão.<br>Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.";
  } else if (imc >= 30 && imc < 34.9) {
    categoria =
      "Obesidade<br>Sinal de alerta!<br>Chegou na hora de se cuidar, mesmo que seus exames sejam normais.<br>Vamos dar início a mudanças hoje!<br>Cuide de sua alimentação.<br>Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.";
  } else if (imc >= 35 && imc < 39.9) {
    categoria =
      "Obesidade grau II<br>Mesmo que seus exames aparentem estar normais, é hora de se cuidar,<br>iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.";
  } else {
    categoria =
      "Obesidade grau III<br>Obesidade mórbida<br>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas.<br>O tratamento deve ser ainda mais urgente.";
  }

  resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(
    2
  )}</strong> (${categoria})`;
}
