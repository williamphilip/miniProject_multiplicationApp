// Math.random() adalah fungsi untuk membangkitkan bilangan random. 
// Math.ceil() adalah fungsi yang digunakan untuk membulatkan bilangan ke atas.
// Dan untuk membuat nomor acak dari 0 - 10 kita hanya perlu mengkalikan dengan 10.
const numberOne = Math.ceil(Math.random()*10);
const numberTwo = Math.ceil(Math.random()*10);

const jawabanBenarAnda = numberOne * numberTwo;

const scoreElemen = document.getElementById("score");

// update ke localstorage
let score = JSON.parse(localStorage.getItem("score"));
if(!score) {
  score = 0;
}

// update ke element score dan mengubah teks
scoreElemen.innerText = `score: ${score}`;

const elemenPertanyaan = document.getElementById("pertanyaan");
elemenPertanyaan.innerText = `Berapakah nilai ${numberOne} dikali ${numberTwo}?`;

const inputElemen = document.getElementById("input");

const elemenForm = document.getElementById("form");
elemenForm.addEventListener("submit", () => {
  const jawabanUser = +inputElemen.value; // + mengubah data string ke number
  if(jawabanUser === jawabanBenarAnda) {
    score++;
    updateLocaleStorage();
  } else {
    score--;
    updateLocaleStorage();
  }
});

function updateLocaleStorage() {
  localStorage.setItem("score", JSON.stringify(score))
}



