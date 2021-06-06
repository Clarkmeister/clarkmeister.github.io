let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/arthur-hawk.jpg') {
      myImage.setAttribute('src','images/arthur-hawk-down.jpg');
    } else {
      myImage.setAttribute('src','images/arthur-hawk.jpg');
    }
}

myButton.onclick = function() {
    setUserName();
  }

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome, ' + myName;
    }
  }