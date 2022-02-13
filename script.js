let fpassword = document.getElementById("fpassword");
let cpassword = document.getElementById("cpassword");
let message = document.getElementById("message");

let check = function () {
    if (fpassword.value == "" && cpassword.value == "") {
        fpassword.style.border = "1px solid #e5e7eb";
        cpassword.style.border = "1px solid #e5e7eb";
        message.innerHTML = "";
    } else if (fpassword.value == cpassword.value) {
        fpassword.style.border = "1px solid green";
        cpassword.style.border = "1px solid green";
        message.innerHTML = "";
        fpassword.setCustomValidity("");
        cpassword.setCustomValidity("");
    } else {
        fpassword.style.border = "1px solid red";
        cpassword.style.border = "1px solid red";
        message.innerHTML = "Passwords do not match";
        fpassword.setCustomValidity("Passwords do not match");
        cpassword.setCustomValidity("Passwords do not match");
    }
};
