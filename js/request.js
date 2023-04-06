require('dotenv').config()
const fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const readFileContent = util.promisify(fs.readFile);
var request = require('basic-request');
var HTMLParser = require('node-html-parser');
const fileName = `shutterstock.html`;
const jsonName = `shutterstock.json`;

//! YOU CAN ONLY DO ONE GET REQUEST AT A TIME
//! ADD/EDIT THE SHUTTERARR
//! USE THE NUM VARIABLE TO SPECIFIY WHICH URL TO MAKE THE GET REQUEST

var num = 2;

var shutterArr = [
    {
        search: `single women`,
        url: `https://www.shutterstock.com/search/women-bodybuilding?image_type=photo&people_number=1`
    },
    {
        search: `single men`,
        url: `https://www.shutterstock.com/search/bodybuilding?image_type=photo&gender=male&mreleased=true&people_number=1`
    },
    {
        search: `two bodybuilders`,
        url: `https://www.shutterstock.com/search/bodybuilding?image_type=photo&mreleased=true&people_number=2`
    }
];


request.get(shutterArr[num].url, (err, data) => {
    // console.log(data);
    writeFileContent(fileName, data)
        .then(() => {
            console.log(`File ${fileName} written successfully from promise`);
            readFileContent(fileName, 'utf8')
                .then((data) => {
                    const root = HTMLParser.parse(data);

                    var imgs = root.querySelectorAll('.mui-1l7n00y-thumbnail');

                    // console.log(imgs[0]._attrs.src);

                    var arr = [];

                    imgs.map((val, i) => {
                        var src = val._attrs.src;
                        src = src.replace('-260nw', '');
                        src = src.replace('https://www.shutterstock.com/image-photo/', 'https://image.shutterstock.com/z/');
                        src = src.replace('https://www.shutterstock.com/image-vector/', 'https://image.shutterstock.com/z/');
                        // console.log(src);
                        var obj = {
                            src: src,
                            alt: val._attrs.title
                        }
                        arr.push(obj);
                    })

                    return arr;

                }).then((data) => {
                    // console.log(shutterArr[2].search);
                    var obj = {
                        search: shutterArr[num].search,
                        imgs: data,
                    }
                    return obj;
                }).then((data) => {
                    readFileContent(`../json/${jsonName}`, 'utf8')
                        .then((arr) => {
                            // console.log(arr);
                            if (arr == "") {
                                arr = [];
                            } else {
                                arr = JSON.parse(arr);
                            }
                            arr.push(data);
                            // arr.splice(1, 1);
                            console.log(arr.length);
                            console.log(arr[0].search);
                            console.log(arr[1].search);
                            console.log(arr[2].search);
                            return arr;
                        }).then((data) => {
                            data = JSON.stringify(data);
                            writeFileContent(`../json/${jsonName}`, data)
                                .then(() => {
                                    console.log(`File ${jsonName} written successfully from promise`);
                                });
                        });
                });

        }).catch((err) => {
            console.log(`oops something went wrong`);
            console.log(err);
        });

});











