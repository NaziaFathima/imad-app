console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');
element.InnerHTML = "New Value";

//move image
var img  = document.getElementById('madi');
img.onclick = function(){
    
    img.style.marginLeft = '100px';
};