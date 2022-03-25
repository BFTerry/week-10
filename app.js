function askname() {
    var username = prompt("Hi welcome to the Tempature Comverter, Im T.C.C. the second c is sighlent but it stands for Tempature Converting Computer but call me TC for short. Well i have introduced myself how about you whats your name?");
    return username
} // 10

function tempature() {
    var temp = prompt(`What tempature do you want converted?`)
    return temp
} //20


function askuom(usn) {
    var uom = prompt(`Hey ${usn} can you tell me how you want your tempature to be converted?`/n` Do so by entering 'f' if you want to convert tempature from Fahrenheit to Celsius, or by entering 'c' if you want to convert tempature from Celsius to Fahrenheit. Any other option will exit the program`);
    return uom
}

function conversionf(tpr) {
            var ftemp = ((tpr - 32) * 5) / 9;
            return ftemp
        } // 20

function conversionc(tpr) {
            var ftemp = ((tpr * 9) / 5) + 32;
            return ftemp
        } //20

function conversion(unm) 
    if (unm == `f`) {
        
    } else if (unm == `c`) {
        
    }  else {
            alert(`You needed to say f or c. Goodbye`);
        }
        return ftemp
  

//80


function final(tmr) {
    alert(`Great you tempature is ${tmr}`);

}

askuom(askname())




final(conversion())