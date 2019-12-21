

for(var row = 0; row < 5; row++){
    var row1 = document.createElement("div");
    row1.setAttribute("id", "row+"+row);
    for(var i = 0; i< 5; i++){
        var input = document.createElement("input");
        input.setAttribute("id", "letter" + row + "-"+ i);
        input.setAttribute("maxlength", "1");
        input.setAttribute("type", "text");
        row1.appendChild(input);
    }

    lingo.appendChild(row1);
}

function readOnly(){
    for(var row = 0; row < 5; row++){
        document.getElementById("letter"+row+"-0").readOnly = true;
    }
}
readOnly();