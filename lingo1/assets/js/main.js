var random  = Math.floor(Math.random() * words.length);
var answer = words[random];
var row = 0;
var first = answer.charAt(0);
var split = answer.split("");
var input = document.getElementsByTagName("input");
var text = document.getElementsByTagName("p")[0];
var button = document.getElementById("check");

function start() {
    document.getElementById("letter0-0").value = first;
}
start();
console.log(answer);
function check(){
    split = answer.split("");
    letter2input = document.getElementById("letter"+row+"-1");
    letter2 = letter2input.value
    letter3input = document.getElementById("letter"+row+"-2");
    letter3 = letter3input.value
    letter4input = document.getElementById("letter"+row+"-3");
    letter4 = letter4input.value
    letter5input = document.getElementById("letter"+row+"-4");
    letter5 = letter5input.value

    var guessWord = first + letter2+ letter3 + letter4 + letter5;
    var guessWord2 = guessWord.split("");
    console.log(guessWord2);

    if (row == 5){
        text.innerHTML = "Je hebt het woord niet geraden. Het juiste woord was: "+ answer + ". Speel opnieuw."
        button.innerHTML = "Speel opnieuw";
        button.setAttribute("onclick", "playAgain()");
        button.style.background = "rgb(128, 255, 96)";
    }
    
    for(var i = 0; i < 5; i++){
        input = document.getElementById("letter"+row+"-"+i);
        word = input.value;
        if(word === ""){
            text.innerHTML = "Voer iets in";
            return;
        }

        if(guessWord2[i] === split[i]){
            input.style.backgroundColor = "green";
            input.style.borderRadius = "0px";
            text.innerHTML = "";
            input.innerHTML = guessWord2[i];
            split[i] = null;
            guessWord[i] = null;
            console.log(guessWord2[i]);
        }

        if(split.indexOf(guessWord2[i]) != -1){
            input.style.backgroundColor = "yellow";
            input.style.borderRadius = "30px";
            text.innerHTML = "";
        }
    }

    var checkWord = 0;

	for (var i = 0 ; i < 5; i++){
        input = document.getElementById('letter'+row+'-'+i);
        word = input.value;
		if (word != split[i]){
            checkWord = 1;
        }
    }
    
    if(checkWord == 0){
        text.innerHTML = "Je hebt het woord geraden! Gefeliciteerd. Speel opnieuw."
        button.innerHTML = "Speel opnieuw";
        button.setAttribute("onclick", "playAgain()");
        button.style.background = "rgb(128, 255, 96)";
    }
    row++;
    if(checkWord == 1){
        document.getElementById('letter'+row+'-0').value = first;
    }
}

function playAgain(){
    location.reload();
}
