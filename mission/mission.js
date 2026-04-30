let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    let body = document.querySelector('body');
    if (current == 'dark') {
        // code for changes to colors and logo
        logo.src = 'byui-logo-white.png';
        body.style.backgroundColor = '#323332';
        body.style.color = 'white';
    } else if (current == 'darker') {
        // added in a darker theme option for fun to try out more changes to the colors and logo 
        logo.src = 'byui-logo-white.png';
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        // code for changes to colors and logo
        logo.src = 'byui-logo-blue.png';
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
}      
                    