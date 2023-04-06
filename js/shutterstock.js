require('dotenv').config()
const fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const readFileContent = util.promisify(fs.readFile);
const sstk = require('shutterstock-api');
const fileName = `html.json`;
var id = `1701952756`;

//! DON'T USE THIS SCRIPT TO GET SHUTTERSTOCK IMAGES USE REQUEST.JS INSTEAD


sstk.setAccessToken(process.env.SHUTTERSTOCK_TOKEN);

const api = new sstk.ImagesApi();

// const queryParams = {
//     view: `full`
// }

const queryParams = {
    query: 'women bodybuilding',
    sort: 'popular',  /*"newest", "popular", "relevance", "random"*/
    orientation: 'horizontal', /*"horizontal", "vertical"*/
    image_type: 'photo', /*"photo", "illustration", "vector"*/
    per_page: 20,
    // contributor: 'Lebedev Roman Olegovich',
    keyword_safe_search: false,
    safe: false,
    license: 'commercial', /*"commercial", "editorial", "enhanced"*/
    people_model_released: true,
    people_number: 1,
    // people_gender: 'female', /*'male female both',*/
    // people_age: "infants", "children", "teenagers", "20s", "30s", "40s", "50s", "60s", "older",
    // people_ethnicity: "african", "african_american", "black", "brazilian", "chinese", "caucasian", "east_asian", "hispanic", "japanese", "middle_eastern", "native_american", "pacific_islander", "south_asian", "southeast_asian", "other", "NOT african", "NOT african_american", "NOT black", "NOT brazilian", "NOT chinese", "NOT caucasian", "NOT east_asian", "NOT hispanic", "NOT japanese", "NOT middle_eastern", "NOT native_american", "NOT pacific_islander", "NOT south_asian", "NOT southeast_asian", "NOT other",
    // color: '000000',
}

// api.getImage(id, queryParams)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// api.listSimilarImages(id, queryParams)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

api.searchImages(queryParams)
    .then(function ({ data }) {
        //   console.log(data);

        var data = JSON.stringify(data);

        writeFileContent(`../json/${fileName}`, data)
            .then(() => {
                console.log(`File ${fileName} written successfully from promise`);

                readFileContent(`../json/${fileName}`, 'utf8')
                    .then((data) => {
                        data = JSON.parse(data);
                        // console.log(data);
                        data.map((val, i) => {
                            console.log(val.assets.preview_1500.url);
                        })
                    });
            });

    })
    .catch(function (err) {
        console.log(`oops something went wrong`);
        console.error(err)
    });

