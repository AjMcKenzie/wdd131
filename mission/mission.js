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
    } else {
        // code for changes to colors and logo
        logo.src = 'byui-logo-blue.png';
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
}      
                    