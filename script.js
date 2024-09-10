const btn = document.getElementById('contact_form_button');
const send_message = document.getElementById('send_message');

document.getElementById('contact_form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'SENDING...';

        const serviceID = 'default_service';
        const templateID = 'template_i4qo34c';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                send_message.value = 'Thank you for your message! Our team members will contact you soon.';
            }, (err) => {
                btn.value = 'Please provide all information so that we can better help you!';
            });
    });
