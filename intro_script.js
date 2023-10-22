const texts = [
    "develop ambitious software solutions",
    "create scalable dynamic Websites",
    "develop imaginative games",
];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let deleting = false;

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];

  if (!deleting) {
    letter = currentText.slice(0, ++index);
    document.querySelector('#text').textContent = 'I ' + letter;
    if (letter.length === currentText.length) {
      deleting = true;
      setTimeout(type, 1500); // timeout before deleting
    } else {
      setTimeout(type, 25); // Speed of typing
    }
  } else {
    letter = currentText.slice(0, --index);
    document.querySelector('#text').textContent = 'I ' + letter;
    if (letter.length === 0) {
      deleting = false;
      count++;
      index = 0;
      setTimeout(type, 300); // pause before next line
    } else {
      setTimeout(type, 25); // Speed of deleting
    }
  }
})();

window.addEventListener("scroll", function () {
    const skillCards = document.querySelectorAll(".skillCard");
    skillCards.forEach(function (card) {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.1;
        if (cardPosition < screenPosition) {
            card.classList.add("visible");
        } else {
            card.classList.remove("visible");
        }
    });

    const opacityCards = document.querySelectorAll(".overviewText");
    opacityCards.forEach(function (card) {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (cardPosition < screenPosition) {
            card.classList.add("visible-opacity");
        } else {
            card.classList.remove("visible-opacity");
        }
    });
});