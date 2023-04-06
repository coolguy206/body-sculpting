require('dotenv').config();
const fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const readFileContent = util.promisify(fs.readFile);
const jsonName = `food.json`;

//exercise equipment
const baseURL = `https://api.spoonacular.com/recipes/complexSearch`;

var params = `?apiKey=${process.env.SPOONACULAR_KEY}&maxCalories=500&number=20&minProtein=20&minCarbs=20&minFat=20&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&fillIngredients=true`;

var url = `${baseURL}${params}`;

// const options = {
//   method: 'GET',
//   headers: {
//     'apiKey': process.env.SPOONACULAR_KEY,
//     'maxCalories': 500,
//     'number': 20,
//     'minProtein': 20,
//     'minCarbs': 20,
//     'minFat': 20,
//     'instructionsRequired': true,
//     'addRecipeInformation': true, 
//     'addRecipeNutrition': true
//   }
// };

fetch(url)
    .then(res => res.json())
    .then(json => {
        // console.log(json);

        var obj = {};

        json.results.map((val, i) => {
            var img = val.image;
            img = img.replace('312x231', '636x393');
            val.image = img;
        });

        var mealTypes = [
            'main course',
            'side dish',
            'dessert',
            'appetizer',
            'salad',
            'bread',
            'breakfast',
            'soup',
            'beverage',
            'sauce',
            'marinade',
            'fingerfood',
            'snack',
            'drink',
            'lunch',
            'main dish',
            'dinner',
        ];

        var allergies = [
            'Dairy',
            'Egg',
            'Gluten',
            'Grain',
            'Peanut',
            'Seafood',
            'Sesame',
            'Shellfish',
            'Soy',
            'Sulfite',
            'Tree Nut',
            'Wheat',
        ]

        var cuisines = [
            'African',
            'American',
            'Asian',
            'British',
            'Cajun',
            'Caribbean',
            'Chinese',
            'Eastern European',
            'European',
            'French',
            'German',
            'Greek',
            'Indian',
            'Irish',
            'Italian',
            'Japanese',
            'Jewish',
            'Korean',
            'Latin American',
            'Mediterranean',
            'Mexican',
            'Middle Eastern',
            'Nordic',
            'Southern',
            'Spanish',
            'Thai',
            'Vietnamese',
        ]

        var diets = [
            'gluten free',
            'dairy free',
            'ketogenic',
            'vegetarian',
            'lacto ovo vegetarian',
            'lacto-vegetarian',
            'ovo-vegetarian',
            'vegan',
            'pescetarian',
            'paleo',
            'primal',
            'fodmap friendly',
            'low fodmap',
            'whole30'
        ]

        obj.recipes = json.results;
        obj.mealTypes = mealTypes;
        obj.allergies = allergies;
        obj.cuisines = cuisines;
        obj.diets = diets;

        // console.log(json.results[0].nutrition);

        obj = JSON.stringify(obj);
        // console.log(obj);

        writeFileContent(`../json/${jsonName}`, obj)
            .then(() => {
                console.log(`File ${jsonName} written successfully`);
            }).then(() => {
                readFileContent(`../json/${jsonName}`, 'utf8')
                    .then((data) => {
                        data = JSON.parse(data);
                        console.log(data.recipes);
                        console.log(data.mealTypes);
                        console.log(data.allergies);
                        console.log(data.cuisines);
                        console.log(data.diets);
                    });
            });


    }).catch((err) => {
        console.log(`oops something went wrong`);
        console.error(err)
    });