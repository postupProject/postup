const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API)

const sendWelcomeEmail = async (email, name) => {

    sgMail.send({
        from: 'postupspmproject@gmail.com', 
        to: email,
        subject: 'Thanks for joining Post Up!',
        text: `Welcome to Post Up - A unique social media platform!, ${name}. You can always open issue on our github page for any improvement`
    }).then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
}

const sendresetlink = async (email, token) => {

    sgMail.send({
        from: 'postupspmproject@gmail.com', 
        to: email,
        subject: 'password reset',
        html:`
            <p>You requested for password reset</p>
            <h5>click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset password</h5>
            `
    }).then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
}
module.exports = {
    sendWelcomeEmail,
sendresetlink

}
