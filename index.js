function togglePasswordVisibility() {
    var passwordInput = document.querySelector(".password");
    var eyeIcon = document.querySelector(".eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("bx-hide");
        eyeIcon.classList.add("bx-show");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("bx-show");
        eyeIcon.classList.add("bx-hide");
    }
}

function togglePasswordVisibility2() {
    var passwordInput = document.querySelector(".password2");
    var eyeIcon = document.querySelector(".eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("bx-hide");
        eyeIcon.classList.add("bx-show");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("bx-show");
        eyeIcon.classList.add("bx-hide");
    }
}