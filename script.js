function insert(text) {
  let insert = document.getElementById("number").value;
  if (insert == "0") {
    document.getElementById("number").value = text;
  } else {
    document.getElementById("number").value += text;
  }
}

document.getElementById("number").addEventListener("focus", () => {
  if (document.getElementById("number").value == "0") {
    document.getElementById("number").value = "";
  }
});

function percent() {
  let reg = /[^0-9]/g;
  let percent = document.getElementById("number").value;
  if (percent.match(reg) == null) {
    document.getElementById("number").value = percent / 100;
  } else {
    let lastNaN = percent.match(reg).pop();
    let indexOfNaN = percent.lastIndexOf(lastNaN);
    let lastNumber = percent.slice(indexOfNaN + 1);

    let newPercent = percent.replace(lastNumber, lastNumber / 100);

    document.getElementById("number").value = newPercent;
  }
}

function sqrt() {
  let sqrt = Math.sqrt(Number(document.getElementById("number").value));
  document.getElementById("number").value = sqrt;
}

function pow() {
  let pow = Math.pow(Number(document.getElementById("number").value), 2);
  document.getElementById("number").value = pow;
}

function validateLastCharacter(character) {
  if (isNaN(character.slice(-1))) {
    return false;
  } else return true;
}

function calcular() {
  let calculo = document.getElementById("number").value;
  try {
    if (calculo != "" && validateLastCharacter(calculo)) {
      document.getElementById("number").value = eval(calculo);
      console.log("here 1");
    }
    if (!validateLastCharacter(calculo)) {
      console.log("here 2");
      calculo = document.getElementById("number").value += calculo.replace(
        calculo.match(/[^0-9]/g).pop(),
        ""
      );

      document.getElementById("number").value = eval(calculo);
    }
    if (calculo == "") {
      document.getElementById("number").value = 0;
    }
  } catch (err) {
    console.log(err);
    if ((err.name = ReferenceError)) {
      document.getElementById("number").value = "Erro";
    }
  }
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector("#equal");

    btn.click();
  }
});

function clean() {
  document.getElementById("number").value = "0";
}
