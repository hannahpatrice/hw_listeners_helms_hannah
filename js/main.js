var headingText = document.getElementById('clickMe');

headingText.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    var numberX = 1;
    paragraph.innerHTML = 'This is click number ' + numberX;
    numberX++;
    document.getElementsByClassName('container')[0].appendChild(paragraph);
});
