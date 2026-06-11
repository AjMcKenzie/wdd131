// when the button is clicked change all the die images to the gif animation

document.getElementById("rollButton").addEventListener("click", event => {
    
    // get the images
    const images = document.querySelectorAll("#gameboard img")
    // change the src
    images.forEach(image => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif"
        }
    });

    // timer wait half a second then call this anonymous function
    setTimeout(() => {
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
            }
        });
    }, 500);

});

function isDieUnlocked(dieImage){
    // retrive list of checkboxes
    checkboxes = document.querySelectorAll("#gameboard input");
    // filter out checked
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    // compare list to dieImage, if there is a match, return true
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}