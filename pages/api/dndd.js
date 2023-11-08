import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import {classes} from '../../public/class.js';

const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.get('/class', (req, res) => {
    const name = req.query.name;
    const sel = req.query.selector;
    console.log(name+" "+sel);
    if (sel == "help") {
        res.json({
            content: Object.keys(classes[name])
        })
    }
    if (sel in classes[name]) {
        res.json({
            content: classes[name][sel]
        });
    } else {
        res.status(400).send({
            message: 'Selector Does not Exist'
         });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

export {app};