var clickSubmit = document.getElementById('submit');

window.onbeforeunload = function () {
    clickSubmit.addEventListener('submit', function () {
        console.log('The firstName is: ' document.getElementsByName('firstname'))
    });
}
