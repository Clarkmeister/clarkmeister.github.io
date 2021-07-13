let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/arthur-hawk.jpg') {
      myImage.setAttribute('src','images/arthur-hawk-down.jpg');
    } else {
      myImage.setAttribute('src','images/arthur-hawk.jpg');
    }
}