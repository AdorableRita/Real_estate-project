// function formValidation() {
    // let fname = document.getElementById ( "fname" );
    // let lname = document.getElementById ( "lname" );
    // let email = document.getElementById ( "email" );
    // let subject = document.getElementById ( "subject" );
    // let message = document.getElementById ( "message" );

    //     let nameV = fname.value;
    //     let lnameV = lname.value;
    //     let emailV = email.value;
    //     let subjectV = subject.value;
    //     let messageV = message.value;

    //     let checkFirstName = document.getElementById("checkFirstName");
    //     let checkLastName =document.getElementById("checkLastName");
    //     let checkEmail =document.getElementById("checkEmail");
    //     let checkSubject =document.getElementById("checkSubject");
    //     let checkMessage =document.getElementById("checkMessage");

        // fname.addEventListener('input', () => {
        //     ErrorFirstName.style.display = 'none';
        //     ErrorLastName.style.display = 'none';
        //     ErrorEmail.style.display = 'none';
        //     ErrorSubject.style.display = 'none';
        //     ErrorMessage.style.display = 'none';
        // })

        // if(nameV.trim() == ""){
        //     fname.style.borderColor = '1px solid red';
        //     checkFirstName.style.display = 'block';
        //     checkFirstName.innerHTML = 'Please enter your first name';
        //     return false;
        // }
        // else if(lnameV.trim() == ""){
        //     lname.style.borderColor = '1px solid red';
        //    checkLastName.style.display = 'block';
        //    checkLastName.innerHTML = 'Please enter your Last name';
        //     return false;
        // }
        // else if(emailV.trim() == ""){
        //     email.style.borderColor = '1px solid red';
        //    checkEmail.style.display = 'block';
        //    checkEmail.innerHTML = 'Please enter your Email';
        //     return false;
        // }
        // else if(subjectV.trim() == ""){
        //     subject.style.borderColor = '1px solid red';
        //    checkSubject.style.display = 'block';
        //    checkSubject.innerHTML = 'Please enter your Subject';
        //     return false;
        // }
        // else if(messageV.trim() == ""){
        //     message.style.borderColor = '1px solid red';
        //    checkMessage.style.display = 'block';
        //    checkMessage.innerHTML = 'Leave a message';
        //     return false;
        // }
        // else{
        //     return true;
        // }
// }

function validate() {
    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }
    if (document.myForm.Email.value == "") {
        alert("Please provide your Email!");
        document.myForm.Email.focus();
        return false;
    }
    if (document.myForm.Subject.value == "") {
        alert("Please provide your subject!");
        document.myForm.Subject.focus();
        return false;
    }
    if (document.myForm.State.value == "") {
        alert("Please provide your State!");
        document.myForm.State.focus();
        return false;
    }
    return true;
}

function validateEmail() {
    var emailID = document.myForm.Email.value;
}
