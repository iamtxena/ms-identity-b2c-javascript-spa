// Select DOM elements to work with
const signInButton = document.getElementById('signIn');
const signOutButton = document.getElementById('signOut')
const titleDiv = document.getElementById('title-div');
const welcomeDiv = document.getElementById('welcome-div');
const tableDiv = document.getElementById('table-div');
const tableBody = document.getElementById('table-body-div');
const callApiButton = document.getElementById('callApiButton');
const response = document.getElementById("response");
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');

function welcomeUser(username) {
    label1.classList.add('d-none');
    signInButton.classList.add('d-none');
    signOutButton.classList.remove('d-none');
    titleDiv.classList.add('d-none');
    welcomeDiv.classList.remove('d-none');
    welcomeDiv.innerHTML = `Welcome ${username}!`
    callApiButton.classList.remove('d-none');
}

function logMessage(s) {
    label2.classList.add('d-none');
    callApiButton.classList.add('d-none');
    response.appendChild(document.createTextNode('\n' + s + '\n'));
}