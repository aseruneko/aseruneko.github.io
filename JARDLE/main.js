console.log("here");

var correctAnswer = "きりたんぽ";
var answers = ["ほうりつか", "あすとらる", "おやこどん", "はいたっち", "あおりんご", "かためがね", "おりえんと", "ゆーらしあ", "さどがしま", "ゆりかもめ", "ものれーる", "どうきょう", "もすきーと", "えとぴりか", "さつじんき", "ひらいしん", "しょうぐん"];
var submittedCharacters = [];
var gojuon = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽゃゅょぁぃぅぇぉー"
makeGojuon();

function seedSubmit() {
    var seedInput = document.getElementById("seed-text-box").value;
    correctAnswer = answers[parseInt(seedInput) * 6 % answers.length];
    submittedCharacters = [];
    makeGojuon();
    var displayArea = document.getElementById("display-area");
    var displayClone = displayArea.cloneNode( false );
    displayArea.parentNode.replaceChild( displayClone , displayArea );
}

function submit() {
    var input = document.getElementById("text-box").value;
    renderAnswer(input);
}

function renderAnswer(input) {
    var textArea = document.getElementById("display-area");
    textArea.appendChild(makeAnswerDisplayNodes(input));
    makeGojuon();
}

function makeGojuon() {
    var gojuonArea = document.getElementById("gojuon-area");
    var gojuonClone = gojuonArea.cloneNode( false );
    gojuonArea.parentNode.replaceChild( gojuonClone , gojuonArea );
    var gojuonArea = document.getElementById("gojuon-area");
    var gojuons = gojuon.split("");
    for(var i = 0; i < gojuons.length; i ++) {
        var div = document.createElement("span");
        if(submittedCharacters.includes(gojuons[i])) {
            div.classList.add("used");
        } else {
            div.classList.add("not-used");
        }
        div.innerText = gojuons[i];
        gojuonArea.appendChild(div);
        if(i % 15 == 14) {
            var br =document.createElement("br");
            gojuonArea.appendChild(br);
        }
    }
};

function makeAnswerDisplayNodes(input) {
    var p = document.createElement("p");
    var inputs = input.split("");
    for(var i = 0; i < inputs.length; i ++) {
        submittedCharacters.push(inputs[i]);
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