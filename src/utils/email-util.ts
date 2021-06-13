import emailjs from 'emailjs-com';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { EMAILJS_USER_ID, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } = publicRuntimeConfig;
emailjs.init(EMAILJS_USER_ID);
const EMAIL_REGEX = /\S+@\S+\.\S+/;

export type ContactMessage = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export default async function sendEmail(emailObj: ContactMessage): Promise<void> {
  validateMessage(emailObj);
  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailObj);
  } catch (err) {
    throw new Error('Some error occurred when sending. Try again later.');
  }
}

function validateMessage(msg: ContactMessage) {
  validateEmail(msg.email);
  if (msg.name.length === 0) throw new Error('Name too short');
  if (msg.subject.length === 0) throw new Error('Subject empty');
  if (msg.message.length === 0) throw new Error('Message empty');
}

function validateEmail(email: string) {
  const valid = EMAIL_REGEX.test(email);
  if (!valid) throw new Error('Email not valid');
}
