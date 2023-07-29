var password="78962";
function passcheck() {
    if(document.getElementById('pass1').value != password ){
        alert('Wrong password, Try Again.');
        return false;
      
    }

    if(document.getElementById('pass1').value == password){
        alert('Correct password. click ok to enter emtry');
    }
}

