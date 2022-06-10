const textToDisplay = document.getElementsByClassName("qst-title");
const paragraphs = document.getElementsByClassName("p");
const images = document.getElementsByClassName("arrow-img");
const titles = document.getElementsByClassName("titleh2");
const box = document.getElementById("illustr-box");

let questionNb = 0;
let isSelected = false;


/* Display paragraph when question is chosen */
const displayText = (id) => {
    questionNb = Number(id);

    [...textToDisplay].forEach(div => {
        if(titles[div.id].classList.contains('selected')) {
            paragraphs[div.id].classList.remove('display');
            paragraphs[div.id].classList.add('not-displayed');
            images[div.id].classList.remove('img-rotate');
            titles[div.id].classList.remove('selected');
            box.setAttribute("id", 'illustr-box');
            isSelected = false;
        } else {
            if (div.id == questionNb) {
                paragraphs[div.id].classList.add('display');
                paragraphs[div.id].classList.remove('not-displayed');
                images[div.id].classList.add('img-rotate');
                titles[div.id].classList.add('selected');
                box.setAttribute("id", 'move-box');
                isSelected = true;
            }
        }
    });
};

/* Move box when question hover or selected */
const moveBox = () => {
    box.setAttribute("id", "move-box");
};

/* Reset box when question unhover or unselected */
const resetBox = () => {
    if(isSelected == false) {
        box.setAttribute("id", "illustr-box");
    }
};