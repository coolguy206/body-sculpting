require('dotenv').config();
const fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const readFileContent = util.promisify(fs.readFile);
const jsonName = `exercise.json`;

//! YOU CAN ONLY DO ONE GET REQUEST AT A TIME
//! ADD/EDIT THE EXERCISEARR
//! USE THE NUM VARIABLE TO SPECIFIY WHICH URL TO MAKE THE GET REQUEST

var num = 2;

var exerciseArr = [
    {
        get: `body`,
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`
    },
    {
        get: `equipments`,
        url: `https://exercisedb.p.rapidapi.com/exercises/equipmentList`
    },
    {
        get: `exercises`,
        url: `https://exercisedb.p.rapidapi.com/exercises`
    }
];

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

fetch(exerciseArr[num].url, options)
.then(res => res.json())
.then(json => {
        // console.log(json);

        readFileContent(`../json/${jsonName}`, 'utf8')
        .then((data) => {
            if(data == "") {
                data = {};
            } else {
                data = JSON.parse(data);
            }

            var str = exerciseArr[num].get;
            data[str] = json;

            // console.log(data);

            return data;
        }).then((data) => {
            data = JSON.stringify(data);
            writeFileContent(`../json/${jsonName}`, data)
            .then(()=> {

                console.log(`File ${jsonName} written successfully from promise`);

                readFileContent(`../json/${jsonName}`, 'utf8')
                .then((data) => {
                    data = JSON.parse(data);
                    console.log(data);
                });
            });
        });


    }).catch((err) => {
        console.log(`oops something went wrong`);
        console.error(err)
    });