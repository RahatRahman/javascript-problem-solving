/**Problem-1: feetToMile calculation */
/**--------------------------------------------------- Start ------------------------------------------------ */
function feetToMile(feet) {
    const mile = feet/5280;             // 5280 feet = 1 mile;
    if(feet >= 0){
        return mile.toFixed(2);
    }
    else if(feet < 0){
        return "Warning! Negative value not acceptable";
    }
}
var totalMile = feetToMile(6000);
console.log("Total Mile: ", totalMile, "mile");
/**--------------------------------------------------- End ------------------------------------------------ */



/**Problem-2: woodCalculator  */
/**--------------------------------------------------- Start ------------------------------------------------ */
function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1;                     
    var tableCount = table * 3;                  
    var bedCount = bed * 5;                      
    var total = chairCount + tableCount + bedCount;
    if(total >= 0){
        return Math.round(total);
    }
    else if(total < 0) {
        return "Warning! Negative value not acceptable";
    }
}

var totalWood = woodCalculator(10, 3, 2);
console.log("Total Wood: ",totalWood, "cubic feet");
/**--------------------------------------------------- End ------------------------------------------------ */


/**Problem-3: brickCalculator  */
/**--------------------------------------------------- Start ------------------------------------------------ */
function brickCalculator(floorNumber) {
    if (floorNumber >= 0 && floorNumber <= 10){
        return floorNumber * 15000;
    }
    else if (floorNumber >10 && floorNumber <= 20){
        return ((floorNumber - 10) * 12000) + 150000;
    }
    else if (floorNumber > 20){
        return ((floorNumber - 20) * 10000) + 270000;
    }
    else if ( floorNumber < 0){
        return "Warning! Negative value not acceptable";
    }
}

var totalBrick = brickCalculator(55);
console.log("Total Bricks: ",totalBrick, "pcs");
/**--------------------------------------------------- End ------------------------------------------------ */



/**Problem-4: tinyFriend (find the shortest name)  */
/**--------------------------------------------------- Start ------------------------------------------------ */
function tinyFriend(friendName) {

    var tiny = friendName[0];

    for(var i=0; i<friendName.length; i++){       
        var currentName = friendName[i].length;
        if(currentName < tiny.length){
            tiny = friendName[i];
        }
    }
    return tiny;
}
 var shortestName = tinyFriend(['rahat', 'rafi', 'rifat', 'rony', 'stephan']);
 console.log("Name of the tiny friend is: ", shortestName);
/**--------------------------------------------------- End ------------------------------------------------ */
