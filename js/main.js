var clickSubmit = document.getElementById('iAmAForm');

clickSubmit.addEventListener('submit', function () {
    event.preventDefault();
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var emailAddress = document.getElementById('emailAddress');
    var messageText = document.getElementById('messageText');
    console.log('The firstName is: ' + firstName.value);
    console.log('The lastName is: ' + lastName.value);
    console.log('The email is: ' + emailAddress.value);
    console.log('The message is: ' + messageText.value);
});
