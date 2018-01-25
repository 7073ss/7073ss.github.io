var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/image1.png') {
      myImage.setAttribute ('src','image/image2.png');
    }
	else {
      myImage.setAttribute ('src','image/image1.png');
    }
}
    var myButton = document.querySelector('button');
    var myHeading = document.querySelector('h1');
	
	function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}