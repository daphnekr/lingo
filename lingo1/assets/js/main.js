var random  = Math.floor(Math.random() * words.length);
var answer = words[random];
var row = 0;
var first = answer.charAt(0);
var res = answer.split("");
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
    var input;
    for(var i = 0; i < 5; i++){
        input = document.getElementById("letter"+row+"-"+i);
        console.log(input.value);
        if(input.value === ""){
            text.innerHTML = "Voer iets in";
            return;
        }

        if(res.includes(input.value)){
            input.style.backgroundColor = "yellow";
            input.style.borderRadius = "15px";
            text.innerHTML = "";
        }
        if(input.value === res[i]){
            input.style.backgroundColor = "red";
            input.style.borderRadius = "0px";
            text.innerHTML = "";
        }
        
    }

    console.log(res);
    var checkWord = true;

	for (var i = 0 ; i < 5; i++){
        input = document.getElementById('letter'+row+'-'+i);
        console.log(input.value);
		if (input.value != res[i]){
            checkWord = false;
        }
    }
    
    if(checkWord){
        text.innerHTML = "Je hebt het woord geraden! Gefeliciteerd. Speel opnieuw."
        button.innerHTML = "Speel opnieuw";
        button.setAttribute("onclick", "playAgain()");
        button.style.background = "rgb(128, 255, 96)";
    }
    row++;
    if(checkWord==false){
        document.getElementById('letter'+row+'-0').value = first;
    }
}

function playAgain(){
    location.reload();
}
