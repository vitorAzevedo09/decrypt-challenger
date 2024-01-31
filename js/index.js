function decrypt() {
  var input = document.getElementById("input-text").value;
  var output = document.getElementById("output-text");
  output.value = input.replaceAll("enter", "\n").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
}

function encrypt() {
  var input = document.getElementById("input-text").value;
  var output = document.getElementById("output-text");
  output.value = input.replaceAll("\n", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
}
