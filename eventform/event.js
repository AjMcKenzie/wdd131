
const form = document.querySelector("#eventForm");
const login = document.querySelector("#login");
const studentIdContainer = document.querySelector("#studentIdContainer");
const accessCodeContainer = document.querySelector("#accessCodeContainer");
const studentId = document.querySelector("#studentId");
const accessCode = document.querySelector("#accessCode");
const output = document.querySelector("#output");


/* 
Decided to add a new object to store access codes for fun and to test it out. 
This way I can easily add this access code anywhere in the code and if I need to change it, I can just change it here.
Also it allows for easy expansion if I want to add more access codes in the future, I can just add them to this object and reference them by key.
I am just trying to keep my code dynamic and easy to maintain.

If this is an issue for the assignment, I can easily change it back to a string in the if statement, but I thought this was a fun way to test out using an object for something simple like this.
*/

const accessCodes = {
  guest: "EVENT131"
}; 


function updateNotesField() {
    const value = login.value;
    
    if(value === "student") {
        studentIdContainer.hidden = false;
        studentId.required = true;

        accessCodeContainer.hidden = true;
        accessCode.required = false;
        accessCode.value = "";
        
    } 
    else if (value === "guest") {
        accessCodeContainer.hidden = false;
        accessCode.required = true;

        studentIdContainer.hidden = true;
        studentId.required = false;
        studentId.value = "";
    } 
    else {
        studentIdContainer.hidden = true;
        accessCodeContainer.hidden = true;
        studentId.required = false;
        accessCode.required = false;
        studentId.value = "";
        accessCode.value = "";
    }

}

login.addEventListener("change", updateNotesField);
updateNotesField();


function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const login = form.login.value;
    const studentId = form.studentId.value.trim();
    const accessCode = form.accessCode.value.trim();
    const eventDate = form.eventDate.value;

    if (login === "student" && studentId.length !== 9) {
        output.textContent = "Student I# must be 9 digits";
        return;
    }

    if (login === "guest" && accessCode !== accessCodes.guest) {
        output.textContent = "Access code is incorrect. Please enter the correct access code.";
        return;
    }


    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${login}</p>
    <p>${eventDate}</p>
    `;

    form.reset();
    updateNotesField();
});
          