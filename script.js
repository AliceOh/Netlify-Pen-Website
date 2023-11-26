document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Here you would typically send the form data to a server
                alert('Thank you for contacting us!');
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
