//var changeImage = document.getElementById('Fuchs');

//changeImage.addEventListener('mouseover', function () {
//    document.changeImage.src = 'img/prezfuchs.jpg';
//});

var headingSubtitle = document.getElementById('heading');

headingSubtitle.addEventListener('click', function () {
    var subtitle = document.createElement('h2');
    subtitle.innerHTML = 'President of the University of Florida';
    document.getElementById('addSubtitleHere')[0].appendChild(subtitle);
});
