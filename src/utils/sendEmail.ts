import nodemailer from 'nodemailer';
import config from '../app/config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      //TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'abdullahalnoman1509@gmail.com',
      pass: 'xfqj dshz wdui ymtb',
    },
  });

  await transporter.sendMail({
    from: 'abdullahalnoman1509@gmail.com', // sender address
    to, // list of receivers
    subject: 'Reset your password within ten mins!', // Subject line
    text: '', // plain text body
    html, // html body
  });
};
