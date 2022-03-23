function askname() {
    var username = prompt("Hi welcome to the Tempature Comverter, Im T.C.C. the second c is sighlent but it stands for Tempature Converting Computer but call me TC for short. Well i have introduced myself how about you whats your name?");
    return username
}

function askuom() {
    var uom = prompt(`Hey ${username} can you tell me how you want your tempature to be converted?`/n` Do so by entering 'f' if you want to convert tempature from Fahrenheit to Celsius, or by entering 'c' if you want to convert tempature from Celsius to Fahrenheit. Any other option will exit the program`);
    return uom
}

function tempature() {
    var temp = prompt(`What tempature do you want converted?`)
    return temp
}

function conversion(um) {
    if (um == `f`) {
        var tempc = ((temp - 32) * 5) / 9;
        
    } else if (um == `c`) {
        var tempf = ((temp * 9) / 5) + 32;
        
    }
}

function final(conversion  ) {
    if ()
        alert(`Great you tempature is ${tempc}`)
}


 
function Comverter() {

}



conversion(askuom(askname()))