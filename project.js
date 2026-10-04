// ==========================================
// BARANGAY SERVICES REQUEST TRACKER
// LOGIN PAGE JAVASCRIPT
// ==========================================


// Get HTML elements

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const loginButton = document.getElementById("loginButton");
const buttonText = document.getElementById("buttonText");
const loadingSpinner = document.getElementById("loadingSpinner");

const message = document.getElementById("message");

const forgotPassword = document.getElementById("forgotPassword");

const loginCard = document.getElementById("loginCard");


// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "🙈";

        togglePassword.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "👁";

        togglePassword.setAttribute(
            "aria-label",
            "Show password"
        );

    }

});


// ==========================================
// SHOW MESSAGE FUNCTION
// ==========================================

function showMessage(text, type) {

    message.classList.remove(
        "hidden",
        "bg-red-500/20",
        "text-red-300",
        "border-red-400/30",
        "bg-green-500/20",
        "text-green-300",
        "border-green-400/30"
    );

    message.classList.add("border");

    message.textContent = text;


    if (type === "error") {

        message.classList.add(
            "bg-red-500/20",
            "text-red-300",
            "border-red-400/30"
        );

    }

    if (type === "success") {

        message.classList.add(
            "bg-green-500/20",
            "text-green-300",
            "border-green-400/30"
        );

    }

}


// ==========================================
// LOGIN FORM
// ==========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();


    // Validate username

    if (username === "") {

        showMessage(
            "Please enter your username.",
            "error"
        );

        usernameInput.focus();

        return;
    }


    // Validate password

    if (password === "") {

        showMessage(
            "Please enter your password.",
            "error"
        );

        passwordInput.focus();

        return;
    }


    // Minimum password length

    if (password.length < 6) {

        showMessage(
            "Password must be at least 6 characters.",
            "error"
        );

        passwordInput.focus();

        return;
    }


    // Loading animation

    loginButton.disabled = true;

    buttonText.textContent = "Signing in...";

    loadingSpinner.classList.remove("hidden");


    // Simulate login request

    setTimeout(function () {

        loginButton.disabled = false;

        buttonText.textContent = "Login";

        loadingSpinner.classList.add("hidden");


        showMessage(
            "Login successful! Redirecting...",
            "success"
        );


        // Button transformation

        loginButton.classList.add(
            "scale-95"
        );


        setTimeout(function () {

            loginButton.classList.remove(
                "scale-95"
            );

            /*
                Later, when your backend is connected,
                replace this with:

                window.location.href = "dashboard.html";
            */

        }, 500);


    }, 1500);

});


// ==========================================
// FORGOT PASSWORD
// ==========================================

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    showMessage(
        "Please contact your Barangay Administrator to reset your password.",
        "error"
    );

});


// ==========================================
// 3D LOGIN CARD MOVEMENT
// ==========================================

loginCard.addEventListener("mousemove", function (event) {

    const rect = loginCard.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX =
        ((y - centerY) / centerY) * -3;

    const rotateY =
        ((x - centerX) / centerX) * 3;


    loginCard.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

});


// ==========================================
// RESET CARD TRANSFORMATION
// ==========================================

loginCard.addEventListener("mouseleave", function () {

    loginCard.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

});


// ==========================================
// INPUT FOCUS ANIMATION
// ==========================================

const inputs = document.querySelectorAll(
    ".input-field"
);

inputs.forEach(function (input) {

    input.addEventListener("focus", function () {

        input.parentElement.classList.add(
            "scale-[1.01]"
        );

    });


    input.addEventListener("blur", function () {

        input.parentElement.classList.remove(
            "scale-[1.01]"
        );

    });

});


// ==========================================
// ENTER KEY EFFECT
// ==========================================

passwordInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        loginForm.dispatchEvent(
            new Event("submit")
        );

    }

});

