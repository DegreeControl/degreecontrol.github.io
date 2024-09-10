const btn = document.getElementById('contact_form_button');
const send_message = document.getElementById('send_message');

document.getElementById('contact_form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'SENDING...';

        const serviceID = 'service_us8ae4i';
        const templateID = 'template_i4qo34c';
        console.log(this);

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                send_message.value = 'Thank you for your message! Our team members will contact you soon.';
            }, (err) => {
                send_message.value = 'Please provide all information so that we can better help you!';
            });
    });
