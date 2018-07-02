import mailgun from 'mailgun.js'

const notificationEmail = (recipients, subject, emailText) => {

const username = "api";
const key = 'c6c3bfaede4e422894e386cdf9893cb4-e44cc7c1-a480998e';
const domain = 'sandboxb6b9564b6a3f462fa9bc918280851d9e.mailgun.org';
const client = mailgun.client({username: username, key: key});

const data = {
  from: 'deanna2000@gmail.com',
  to: recipients,
  subject: subject,
  text: emailText
};

client.messages.create(domain, data);
}

export {notificationEmail};



