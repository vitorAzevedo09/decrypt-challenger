function decrypt() {
  var input = document.getElementById("input-text").value;
  var output = document.getElementById("output-text");

  verifyPlaceholder(input);

  output.value = input.replaceAll("enter", "\n").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
}

function encrypt() {
  var input = document.getElementById("input-text").value;
  var output = document.getElementById("output-text");

  verifyPlaceholder(input);

  output.value = input.replaceAll("\n", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
}

function verifyPlaceholder(input) {
  var output_title = document.getElementById("output-title");
  var output_info = document.getElementById("output-info");
  var output_img = document.getElementById("output-img");
  var output = document.getElementById("output-text");

  if (input !== "") {
    output_title.style.display = "none";
    output_info.style.display = "none";
    output_img.style.display = "none";
    output.style.display = "block";
  } else {
    output_title.style.display = "block";
    output_info.style.display = "block";
    output_img.style.display = window.matchMedia("(max-width: 768px)") ? "none" : "block";
    output.style.display = "none";
  }
}

function copy() {
  var output = document.getElementById("output-text");
  output.select();
  document.execCommand("copy");
}
