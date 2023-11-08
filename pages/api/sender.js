
const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');

const getGmailService = (tokens, auth) => {
  const oAuth2Client = auth;
  oAuth2Client.setCredentials(tokens);
  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
  return gmail;
};

const encodeMessage = (message) => {
  return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

const createMail = async (options) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};

const sendMail = async (options, user, tokens, auth) => {
  const gmail = getGmailService(tokens, auth);
  const rawMessage = await createMail(options);
  const { data: { id } = {} } = await gmail.users.messages.send({
    userId: user,
    resource: {
      raw: rawMessage,
    },
  });
  return id;
};

module.exports = sendMail;