function encryptor() {
    var userInput = document.getElementById("userInput").value/*.toUpperCase().replace(/ /g, "");*/
    console.log("User input: " + userInput);
    var key = parseInt(document.getElementById("key").value);
    console.log("Key: " + key);

    if(!isNaN(key)) {
        var output = "";

        for(var i=0; i<userInput.length; i++) {
           output += String.fromCharCode(userInput.charCodeAt(i)+key);
        }
        console.log(output);
        document.getElementById("output").value = output;
    }
    else {
        window.alert("Key error! The inserted key is not a number.");
    }
}

function decryptor() {
    var userInput = document.getElementById("userInput").value;
    console.log("User input: " + userInput);
    var key = parseInt(document.getElementById("key").value);
    console.log("Key: " + key);

    if(!isNaN(key)) {
        var output = "";

        for(var i=0; i<userInput.length; i++) {
           output += String.fromCharCode(userInput.charCodeAt(i)-key);
        }
        console.log(output);
        document.getElementById("output").value = output;
    }
    else {
        window.alert("Key error! The inserted key is not a number.");
    }
}


function copyToClipboard() {
    //select the element with the id "copyMe", must be a text box
     var textToCopy = document.getElementById("output");
     //select the text in the text box
     textToCopy.select();
     //copy the text to the clipboard
     document.execCommand("copy"); 
     alert("Output copiato negli appunti.");
     /*
     Navigator.clipboard.writeText(document.getElementById(output).value);
     alert("Output copiato negli appunti."); */
}
