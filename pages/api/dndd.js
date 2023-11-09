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
    if (!(name in classes)) {
        res.status(400).send({
            message: 'Class Does not Exist'
        });
        return
    }
    if (name == 'list') {
        res.json({
            type: Array,
            content: ['artificer', 'barbarian', 'wizard']
        })
    }
    var theClass = classes[name];
    var legalselectors = {
        source: theClass['source'],
        hd: theClass['hd']['faces'],
        savingThrow: theClass['proficiency'],
        spellcastingAbility: 'spellcastingAbility' in theClass? theClass['spellcastingAbility'] : 'Not Spellcaster',
        casterProgression: theClass['casterProgression'],
        preparedSpells: 'preparedSpells' in theClass ? theClass['preparedSpells'] : 'Not Prepared Spellcaster',
        proficiencies: {
            weapons: theClass['startingProficiencies']['weapons'],
            skills: name == 'bard' ? [[
                'Athletics',
                'Acrobatics',
                'Sleight of Hand',
                'Stealth',
                'Arcana',
                'History',
                'Investigation',
                'Nature',
                'Religion',
                'Animal Handling',
                'Insight',
                'Medicine',
                'Perception',
                'Survival',
                'Deception',
                'Intimidation',
                'Performance',
                'Persuasion'
            ], 3] : [theClass['startingProficiencies']['skills'][0]['choose']['from'], theClass['startingProficiencies']['skills'][0]['choose']['count']],
            tools: name in {artificer: 1, rogue: 1, bard: 1} ? {
                artificer: "Thieves’ tools, tinker’s tools, one type of artisan’s tools of your choice",
                rogue: "Thieves’ tools, tinker’s tools, one type of artisan’s tools of your choice",
                bard: "Three musical instruments of your choice"
            }[name] : "None"
        },
        startingEquipment: {
            a: theClass['startingEquipment']['defaultData'],
            b: theClass['startingEquipment']['goldAlternative'],
        },
        multiclassRequirement: theClass['multiclassing']['requirements'],
        table: theClass['classTableGroups'][0]
    }
    
    if (sel == "help") {
        res.json({
            type: typeof Object.keys(legalselectors),
            content: Object.keys(legalselectors)
        })
    } else if (sel in legalselectors) {
        res.json({
            type: typeof classes[name][sel],
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