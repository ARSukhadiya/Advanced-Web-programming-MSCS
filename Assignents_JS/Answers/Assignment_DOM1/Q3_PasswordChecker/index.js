setErrorText = (error) => {
    document.getElementById("error_text").innerHTML = error;
}

resetStyle = () => {
    document.getElementById("li1").style.color = "black";
    document.getElementById("li2").style.color = "black";
    document.getElementById("li3").style.color = "black";
    setErrorText('')
}


isStrongPassword = (pass) => {
    if (pass.length < 6) {
        setErrorText('Invalid Password')
        document.getElementById("li1").style.color = 'red';
    }
    if (pass.search(/[0-9]/) == -1) {
        setErrorText('Invalid Password')
        document.getElementById("li2").style.color = 'red';
    }
    if (pass == 'password1') {
        setErrorText('Invalid Password')
        document.getElementById("li3").style.color = 'red';
    }
}

onSubmitPress = () => {
    console.log('onSubmitPressed');
    resetStyle()
    passwordText = document.getElementById('password').value
    isStrongPassword(passwordText)
}