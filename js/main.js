var clickSubmit = document.getElementById('submit');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var emailAddress = document.getElementById('emailAddress');
var messageText = document.getElementById('messageText');

clickSubmit.addEventListener('submit', function () {
    event.preventDefault();
    console.log('The firstName is:' + firstName.inputType);
    console.log('The lastName is:' + lastName.value);
    console.log('The email is:' + emailAddress.value);
    console.log('The message is:' + messageText.value);
});
