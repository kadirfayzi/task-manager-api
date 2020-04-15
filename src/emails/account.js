const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'qadeer.faizy2006@gmail.com',
        subject: 'Test subject',
        text: `Welcome to the task manager app ${name}`
    })
    // .then(() => {
    //     console.log('Message sent')
    // }).catch((e) => {
    //     console.log(e)
    // })
}

module.exports = {
    sendWelcomeEmail
}


