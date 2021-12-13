const canGiveBlood = (bloodtypeDonor, bloodtypeRecipient) => {

    let bloodtype = true;
    let rh = true;

        if (bloodtypeDonor.includes("O")) {
        bloodtype = true;
        } 
        else if (bloodtypeRecipient.includes("AB")) {
        bloodtype = true;
        }     
        else if (bloodtypeDonor[0] === bloodtypeRecipient[0]) {
        bloodtype = true;
        } 

    else {
    bloodtype = false;
    }

    if (bloodtypeDonor.includes("+") && bloodtypeRecipient.includes("-")) {
    rh = false;
    } 
    
        else {
        rh = true;
        }

  return bloodtype && rh;
}

console.log(canGiveBlood("O+", "A+"));
console.log(canGiveBlood("A-", "B-"));
console.log(canGiveBlood("A-", "AB+"));