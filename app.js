function askname() {
    var username = prompt("Hi welcome to the Tempature Comverter, Im T.C.C. the second c is sighlent but it stands for Tempature Converting Computer but call me TC for short. Well i have introduced myself how about you whats your name?");

}

function askuom() {
    var uom = prompt(`Hey ${username} can you tell me how you want your tempature to be converted?`/n` Do so by entering 'f' if you want to convert tempature from Fahrenheit to Celsius, or by entering 'c' if you want to convert tempature from Celsius to Fahrenheit. Any other option will exit the program`);
    return uom
}

function conversionf() {

}

function conversionc() {
    
}



do {
    askuom()
}   while (uom )



if (uom == 'f') {
    var ftoc = Number(prompt(`Hey ${username} please enter the tempature you wish to convert to Celsius. Only numbers are allowed.`));
    if (typeof ftoc == "string") {
        alert(`You needed to enter a number. This program will end now`);
    }   else {
            var tempc = ((ftoc - 32) * 5) / 9;
            alert(`${ftoc} F° is ${tempc} C°`);
    }
    
}   
else if (uom == 'c') {
    var ctof = Number(prompt(`Hey ${username} please enter the tempature you wish to convert to Fahrenheit. Only numbers are allowed.`));
    if (typeof ctof == "string") {
        alert(`You needed to enter a number. This program will end now`);
    }   else {
            var tempf = ((ctof * 9) / 5) + 32;
            alert(`${ctof} C° is ${tempf} F°`);
    }
    
}   
else {
    alert(`Sorry. You could only press 'f' or 'c'. This program will end now`)
}