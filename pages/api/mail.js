const {google} = require('googleapis');
const nodemailer = require('nodemailer');
const express = require('express');
const {OAuth2Client} = require('google-auth-library');
const client_id1 = '325363659771-tcdh9pcd9hcqicp2h1r43g415ujpgrq9.apps.googleusercontent.com';
const client_id2 = '390061901823-13ipe1ueb7dupdp2sr1i4toqavekn05i.apps.googleusercontent.com';
const client_secret1 = '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';
const client_secret2 = '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';
const redirect_uri = 'http://localhost:3000/oauth2callback';
const sender = require('./sender');
const bodyParser = require('body-parser');
const client_id = client_id1;
const client_secret = client_secret1;
const oauth2Client = new OAuth2Client(client_id, client_secret, redirect_uri);

const TEMPLATE = `I have started to try hands-on research since high school, when I performed algorithm design and analysis on the point-set diameter problem in Computational Geometry, and did an applied project in optimizing Covid group-test probability model, which made me interested in research fields in Applied Math. At UCB, I discovered my interest in combining my mathematics skills in Computer Science and Machine Learning. And that's why I worked as a Data Analyst intern in Quantum Kingdom’s project in assessing teamwork skill through video gameplay. From this experience, I learned to collect gameplay data and apply NLP models to analyze it.

During my college experience, I feel that model building interests me very much, and I like experimenting with modifications on existing machine learning models with my own understanding so that they can perform better in some specific data-sets.

For instance, in the previous semester I became interested in the current unemployment trend, and did a factor analysis on the U.S. unemployment rate. During the process, I wanted to use SVM to classify a high dimensional set of data, but I found that the points do not behave well near the boundary. Thus, I instead applied only its kernel function, and built my own classification method, combining logistic regression and the existing concept of penalty methods in SVM, to focus more on global performance instead of the performance near the support vector, and yielded a 30% higher accuracy than directly implementing SVM itself.

Also, I am interested in software development, and I participated in a web development internship in a startup company, Ursa Technology, that is focused on education in STEM fields such as programming and data-science. I am capable of programming in Java, Python, Javascript, and C, and can use React or Vue to build applications. I am also proficient in high level languages such as MATLAB and Mathematica for research purposes.

I have also put my resume link and transcript link in this email that you can click on. If possible, I would like to meet you in person or online to talk more about your research. I am available to work full time throughout summer holiday! I am also open to opportunities beyond summer!

Look forward to hearing back from you and I hope you have good luck on your research!

Best,

Jiayin Lin
`;

const TEMPLATEHTML = `<p>I have started to try hands-on research since high school, when I performed algorithm design and analysis on the point-set diameter problem in Computational Geometry, and did an applied project in optimizing Covid group-test probability model, which made me interested in research fields in Applied Math. At UCB, I discovered my interest in combining my mathematics skills in Computer Science and Machine Learning. And that is why I worked as a Data Analyst intern in <a href="https://www.quantumkingdom.co/">Quantum Kingdom’s</a> project in assessing teamwork skill through video gameplay. From this experience, I learned to collect gameplay data and apply NLP models to analyze it.</p><p>During my college experience, I feel that model building interests me very much, and I like experimenting with modifications on existing machine learning models with my own understanding so that they can perform better in some specific data-sets.</p><p>For instance, in the previous semester I became interested in the current unemployment trend, and did a factor analysis on the U.S. unemployment rate. During the process, I wanted to use SVM to classify a high dimensional set of data, but I found that the points do not behave well near the boundary. Thus, I instead applied only its kernel function, and built my own classification method, combining logistic regression and the existing concept of penalty methods in SVM, to focus more on global performance instead of the performance near the support vector, and yielded a 30% higher accuracy than directly implementing SVM itself.</p><p>Also, I am interested in software development, and I participated in a web development internship in a startup company, <a href="https://ursatechnology.com/L">Ursa Technology</a>, that is focused on education in STEM fields such as programming and data-science. I am capable of programming in Java, Python, Javascript, and C, and can use React or Vue to build applications. I am also proficient in high level languages such as MATLAB and Mathematica for research purposes.</p><p>I have also put my <a href="https://drive.google.com/file/d/16HC49E5-WKNJ1D8Kwok1rZg-svXT1Q7s/view?usp=sharing">resume link</a> and <a href="https://drive.google.com/file/d/1bwyYkTOeQiwjcUj7BGrc5kGUly-FBCqH/view?usp=sharing">transcript link</a> in this email that you can click on. If possible, I would like to meet you in person or online to talk more about your research. I am available to work full time throughout summer holiday! I am also open to opportunities beyond summer!</p><p>Look forward to hearing back from you and I hope you have good luck on your research!</p><p>Best,</p><p>Jiayin Lin</p>`;

const app = express();
PORT = 3000;

// Wait for the user to authorize the app and enter the authorization code.

const fromEmail = 'kirkq10@gmail.com';
var code = "";

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(bodyParser.json());

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Methods", "POST");
      res.header("Access-Control-Allow-Origin", "http://localhost:3001");
      res.header("Access-Control-Allow-Headers", "*");
      next();
    });

//    app.use('/oauth2callback', (req, res, next) => {
//      res.header('Access-Control-Allow-Origin', '*');
//      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//      next();
//    });

    app.get('/oauth2callback', (req, res) => {
      code = req.query.code;
      console.log(code);
      // Use the authorization code to get the access token and refresh token
      res.redirect('http://localhost:3001');
    });

    app.get('/auth', (req, res) => {
        // Generate a URL for the user to authorize the app and get an authorization code.
        const authorizeUrl = oauth2Client.generateAuthUrl({
          access_type: 'offline',
          response_type: 'code',
          scope: ['https://www.googleapis.com/auth/gmail.compose', 'https://www.googleapis.com/auth/gmail.send']
        });
        console.log(`Please authorize this app by visiting this URL: ${authorizeUrl}`);
        res.send({url: authorizeUrl})
    });

    app.post('/send', (req, res) => {
      const toEmail = req.body.toemail;
      const profname = req.body.name;
      const TEMPLATE1 = `Dear Professor ${profname},

`
        const TEMPLATEHTML1 = `<p>Dear Professor ${profname}</p>`

      if (code.length === 0) {
          return console.error("not authorized");
      }
      const content = req.body.content;
      oauth2Client.getToken(code, (err, token) => {
            if (err) {
              return console.error('Error retrieving access token', err);
            }
            console.log(token)

            const options = {
            to: toEmail,
            subject: 'UCB student looking for potential summer research assistant/opportunity',
            text: TEMPLATE1+content+TEMPLATE,
            html: TEMPLATEHTML1+`<p>${content}</p>`+TEMPLATEHTML,
            textEncoding: 'base64',
          };
          sender(options, fromEmail, token, oauth2Client).then(
            accessToken => {
                console.log(accessToken);
                res.send({success: 1});
            }
          );

      });

    });

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

module.export = app;



