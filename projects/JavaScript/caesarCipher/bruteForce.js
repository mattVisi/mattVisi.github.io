function bruteForce() {
    document.getElementById("output").value = "";  //clear the output from previous use

    let userInput = document.getElementById("userInput").value;
    console.log(userInput);
    let minKey = parseInt(document.getElementById("minKey").value);
    console.log(minKey);
    let maxKey = parseInt(document.getElementById("maxKey").value);
    console.log(maxKey);


    if (isNaN(minKey)&&isNaN(maxKey)) {
        minKey=0;
        maxKey=100;
    } else if (!isNaN(minKey)&&isNaN(maxKey)) {
        maxKey = 100;
    } else if(isNaN(minKey)&&!isNaN(maxKey)){
        minKey=0;
    }
    
    if (maxKey>minKey) {
        for (let key=minKey; key<=maxKey; key++) {
            let output = "";
            for(var i=0; i<userInput.length; i++) {
               output += String.fromCharCode(userInput.charCodeAt(i)-key);
            }
            console.log(output);
            document.getElementById("output").value = document.getElementById("output").value + key + " ==> " + output  + "\n";
    
            console.log(key);
        }
    } else window.alert("Intervallo di chiavi non valido!");
}