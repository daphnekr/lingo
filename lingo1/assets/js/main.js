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

        if(split.includes(word)){
            input.style.backgroundColor = "yellow";
            input.style.borderRadius = "30px";
            text.innerHTML = "";
        }

        if(word === split[i]){
            input.style.backgroundColor = "green";
            input.style.borderRadius = "0px";
            text.innerHTML = "";
        }
        
    }

    var checkWord = 0;

	for (var i = 0 ; i < 5; i++){
        input = document.getElementById('letter'+row+'-'+i);
        word = input.value;
        console.log(word);
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
