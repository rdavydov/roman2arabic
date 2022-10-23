const romanDigits = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const converter = function (romanNumber) {
  let result = 0;

  for (let i = 0; i < romanNumber.length; ++i) {
    const current = romanDigits[romanNumber[i]];
    const next = romanDigits[romanNumber[i + 1]];

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

let $input = document.querySelector("#input");

const ALLOWED_CHARS_REGEXP = /[ivxlcmd]+/;

$input.addEventListener("beforeinput", (e) => {
  if (!ALLOWED_CHARS_REGEXP.test(e.data)) {
    event.preventDefault();
  }
});

$input.addEventListener("keyup", (event) => {
  document.querySelector("#output").value = converter(
    $input.value.toUpperCase()
  );
});
