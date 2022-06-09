const textToDisplay = document.getElementsByClassName("qst-title");
const questions = document.getElementsByClassName("question");
const paragraphs = document.getElementsByClassName("p");
const images = document.getElementsByClassName("arrow-img");
const titles = document.getElementsByClassName("titleh2");
const box = document.getElementById("illustr-box");

let questionNb = 0;

const displayText = (id) => {
    questionNb = Number(id);

    [...textToDisplay].forEach(div => {
        if(titles[div.id].classList.contains('selected')) {
            paragraphs[div.id].classList.remove('display');
            paragraphs[div.id].classList.add('not-displayed');
            images[div.id].classList.remove('img-rotate');
            titles[div.id].classList.remove('selected');
            
        } else {
            if(div.id == questionNb) {
                paragraphs[div.id].classList.add('display');
                paragraphs[div.id].classList.remove('not-displayed');
                images[div.id].classList.add('img-rotate');
                titles[div.id].classList.add('selected');
                box.setAttribute("id", 'move-box');
                console.log(box);
            } else {
                paragraphs[div.id].classList.remove('display');
                paragraphs[div.id].classList.add('not-displayed');
                images[div.id].classList.remove('img-rotate');
                titles[div.id].classList.remove('selected');
            }
        }
    });
};

const moveBox = () => {
    box.style.left = "-2.8%";
}

const resetBox = () => {
    box.style.left = "0.3%";
}