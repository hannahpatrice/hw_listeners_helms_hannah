//var changeImage = document.getElementById('Fuchs');

//changeImage.addEventListener('mouseover', function () {
//    document.changeImage.src = 'img/prezfuchs.jpg';
//});

// WITH MOUSEOVER ADD FIGCAPTION

var captionThis = document.getElementById('Fuchs');

captionThis.addEventListener('mouseover', function () {
    var caption = document.createElement('figcaption');
    caption.innerHTML = 'Can I get a "Go Gators"?';
    document.getElementsByClassName('addText')[0].appendChild(caption);
});

// WITH CLICK REMOVE IMG

var logoUF = document.getElementById('logoUF');

logoUF.addEventListener('click', function () {
    var imgRemove = document.getElementById('logoUF');
    imgRemove.remove();
    var caption = document.createElement('figcaption');
    caption.innerHTML = 'Where did it go?';
    document.getElementsByClassName('whereGo')[0].appendChild(caption);
});

// WITH DOUBLECLICK ADD IMG

var asideStuff = document.getElementById('addImg');

asideStuff.addEventListener('dblclick', function () {
    var itsGreat = document.createElement('img');
    itsGreat.src = './img/gators.png';
    itsGreat.setAttribute('width', '100%');
    itsGreat.setAttribute('alt', 'Gators');
    document.getElementsByClassName('asideStuff')[0].appendChild(itsGreat);
});
