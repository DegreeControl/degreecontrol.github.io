document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('XvV4_oouCJVhlC4PG'); // Replace with your EmailJS user ID
});

document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('Name');
    const email = formData.get('Email');
    const subject = formData.get('Subject');
    const comment = formData.get('Comment');

    // Send email via EmailJS
    emailjs.send('service_us8ae4i', 'template_i4qo34c', {
        from_name: name,
        from_email: email,
        subject: subject,
        message: comment,
    })
    .then(function(response) {
        alert('Message sent successfully!');
        form.reset(); // Clear form fields
    })
    .catch(function(error) {
        alert('Failed to send message. Please use your email client to send the message.');
        console.error('Error:', error);

        // Fallback to mailto
        const mailtoBody = `Hi,%0D%0A%0D%0AI am ${encodeURIComponent(name)}%0D%0A${encodeURIComponent(comment)}%0D%0A%0D%0AThank You`;
        const mailtoLink = `mailto:info@degreecontrol.ca?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;
        window.location.href = mailtoLink;
    });
});
