document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;


        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for contacting us! Your message has been sent.");
        form.reset(); 
    });
});