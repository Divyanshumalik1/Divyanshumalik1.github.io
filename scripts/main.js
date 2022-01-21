let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
      myImage.setAttribute('src','images/2.jpg');
    } else {
      myImage.setAttribute('src','images/1.jpg');
    }
}


let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setusername(){
    let myname = prompt('Please Enter Your Name !')
    localStorage.setItem('name',myname);
    myheading.textContent = 'Kya Haal hai Mere bhai !,' + myname;
}

if(!localStorage.getItem('name')){
    setusername();
}
else{
    let storedname = localStorage.getItem('name');
    myheading.textContent = 'Kya Haal hai Mere bhai ' + storedname + ' !';
}

mybutton.onclick = function(){
    setusername();
}