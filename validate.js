function checkPass() {
    let password = document.getElementById("ps1").value;
    let repeatPassword = document.getElementById("ps2").value;

    if (password !== repeatPassword) {
        alert("პასვორდები არ ემთხვევა ერთმანეთს!");
        return false;
    }
    return true;
}

function checkEmail(input) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(mailformat)) {
        document.f1.t1.focus();
        return true;
    } else {
        alert("არასწორი ელ-ფოსტა!");
        document.f1.t1.focus();
        return false;
    }
}
