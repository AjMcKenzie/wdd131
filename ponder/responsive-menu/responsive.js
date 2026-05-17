let menuButton = document.getElementsByClassName("menu-btn")[0];

console.log(menuButton);

// event listener
menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    console.log(event);
    // toggle on/off the menu display

    //grab the nav from the DOM
    let nav = document.querySelector("nav");
    // toggle the .hide class on/off
    nav.classList.toggle("hide");

    menuButton.classList.toggle("change");
}