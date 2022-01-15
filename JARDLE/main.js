console.log("here");

var correctAnswer = "しちごさん";
var submittedAnswer = [];

function submit() {
    var input = document.getElementById("text-box").value;
    submittedAnswer.push(input);
    renderAnswer(input);
}

function renderAnswer(input) {
    var textArea = document.getElementById("display-area");
    textArea.appendChild(makeAnswerDisplayNodes(input));
}

function makeAnswerDisplayNodes(input) {
    var p = document.createElement("p");
    var inputs = input.split("");
    for(var i = 0; i < inputs.length; i ++) {
        if (isHit(inputs[i], i)) {
            var div = document.createElement("span");
            div.classList.add("green");
            div.innerText = inputs[i];
            p.append(div);
        } else if (isBlow(inputs[i])) {
            var div = document.createElement("span");
            div.classList.add("yellow");
            div.innerText = inputs[i];
            p.append(div);
        } else {
            var div = document.createElement("span");
            div.classList.add("gray");
            div.innerText = inputs[i];
            p.append(div);
        }
    }
    return p;
}

function isHit(character, i) {
    return correctAnswer.split("")[i] == character
}

function isBlow(character) {
    return correctAnswer.split("").includes(character);
}