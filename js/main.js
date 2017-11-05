var headingText = document.getElementById('clickMe');
var numberX = 1;

headingText.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'This is click number ' + numberX++;
    document.getElementsByClassName('container')[0].appendChild(paragraph);
});
