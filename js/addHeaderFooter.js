var headerTemplate = "<nav><div class='weather'><img src='' alt='' id='weatherIcon'><p id='temperature' class='temperature'></p><p id='city' class='city'></p></div><ul><li><a href='home.html'>Home</a></li><li><a href='about.html'>About</a></li><li><a href='devlogs.html'>Devlogs</a></li><li><a href='contact.html'>Contact</a></li></ul></nav>";

var footerTemplate = "<p>Created by: Romario Stanković | 2020230210</p>";

function addHeader(){
    document.querySelector("header").innerHTML = headerTemplate;
}

function addFooter(){
    document.querySelector("footer").innerHTML = footerTemplate;
}

$(document).ready(function(){
    addHeader();
    addFooter();
});