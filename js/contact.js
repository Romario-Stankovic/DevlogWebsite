var characterLimit;
var enteredCharacters;

var validMSG = false;
var validMail = false;

var mailValue;
var subjectValue;
var messageValue;


function submitFunction(){
    if(validMSG && validMail){
        showConfirmOverlay(true);
        mailValue = document.getElementById('emailField').value;
        subjectValue = document.getElementById('subjectField').value;
        messageValue = document.getElementById('messageField').value;
    }else{
        alert('Invalid Input!');
    }
}

function showConfirmOverlay(value){
    if(value == true){
        $('#confirmedOverlay').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 250);
        $('#confirmPanel').css({top: 0}).animate({top: 25});
    }else{
        $('#confirmPanel').css({top: 25}).animate({top: 100});
        setTimeout(function() {$('#confirmedOverlay').css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0.0}, 250)}, 200);
        setTimeout(function() {document.getElementById('confirmedOverlay').style.visibility = "hidden"}, 450);
        clearFields();
    }
}

function showReviewMessage(value){
    if(value == true){

        document.getElementById('emailValue').innerHTML = "<b>Email: </b>" + mailValue;
        document.getElementById('subjectValue').innerHTML = "<b>Subject: </b>" +subjectValue;
        document.getElementById('messageValue').innerHTML = "<b>Message: </b>" +messageValue;

        $('#confirmPanel').css({top: 25}).animate({top: 100});
        setTimeout(function() {$('#confirmedOverlay').css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0.0}, 250)}, 200);
        setTimeout(function() {document.getElementById('confirmedOverlay').style.visibility = "hidden"}, 450);

        setTimeout(function() {
            $('#messageOverlay').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 250);
            $('#reviewMessage').css({top: -100}).animate({top: 0});
        }, 500);
    }else{
        $('#reviewMessage').css({top: 0}).animate({top: 100});
        setTimeout(function() {$('#messageOverlay').css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0.0}, 250)}, 200);
        setTimeout(function() {document.getElementById('messageOverlay').style.visibility = "hidden"}, 450);
        clearFields();
    }
}

//Implement startsWith if it is not supported by the browser (looking at you Internet Explorer!)
if(!String.prototype.startsWith){
    String.prototype.startsWith = function(string, index){
        index = index || 0;
        return this.indexOf(string, index) == index;
    }
}

function clearFields(){
    document.getElementById('emailField').value = "";
    document.getElementById('subjectField').value = "";
    document.getElementById('messageField').value = "";
    validateMessage();
    validateEmail();
}

function validateMessage(){
    enteredCharacters = document.getElementById('messageField').value.length;
    document.getElementById('charLimit').innerHTML = "Character limit: (" + enteredCharacters + "/" + characterLimit + ")";
    if(enteredCharacters > 0){
        validMSG = true;
    }else{
        validMSG = false;
    }
}

function validateEmail(){
    var input = document.getElementById('emailField').value;

    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Regular Expression for emails

    if(input.match(regex) && !input.startsWith('.') && input.indexOf("@") <= 64 && !dotCheck(input) && input.length <= 320){
        document.getElementById('emailField').style.borderColor = "";
        validMail = true;
    }else if (input.length > 0){
        document.getElementById('emailField').style.borderColor = "#ff0000";
        validMail = false;
    }else{
        document.getElementById('emailField').style.borderColor = "";
        validMail = false;
    }

}

function dotCheck(input){
    for(var i=0; i<input.length; i++){
        if(input[i] == '.'){
            if(input[i+1] == '.' || input[i-1] == '.'){
                return true;
            }
        }
    }
}

$(document).ready(function(){
    characterLimit = document.getElementById("messageField").maxLength;
    validateMessage();
    $("form").submit(function(event){
        event.preventDefault();
    });

});