require('dotenv').config();
const fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const readFileContent = util.promisify(fs.readFile);
const jsonName = `exercise.json`;

readFileContent(`../json/${jsonName}`, 'utf8')
    .then((data) => {
        data = JSON.parse(data);
        console.log(data);

        //! LOOP
        // data.exercises.forEach((val, i) => {
        //     console.log(val);
        // });

        
        //! TO REMOVE DUPLICATES FROM ARRAY
        // var target = [];
        // target = [...new Set(target)]
        // console.log(target);


        //! CODE TO BUILD FILTERS FOR EXERCISE
        /*
                var chest = {
                    bodyPart: `chest`,
                    targert: ['pectorals', 'serratus anterior'],
                    equipment: [
                        'body weight',
                        'leverage machine',
                        'assisted',
                        'band',
                        'barbell',
                        'cable',
                        'stability ball',
                        'dumbbell',
                        'upper body ergometer',
                        'kettlebell',
                        'medicine ball',
                        'bosu ball',
                        'resistance band',
                        'roller',
                        'smith machine',
                        'weighted'
                    ]
                };
        
                var back = {
                    bodyPart: `back`,
                    target: ['lats', 'spine', 'upper back', 'traps'],
                    equipment: [
                        'cable', 'body weight',
                        'leverage machine', 'stability ball',
                        'band', 'barbell',
                        'dumbbell', 'ez barbell',
                        'kettlebell', 'rope',
                        'medicine ball', 'resistance band',
                        'roller', 'smith machine',
                        'weighted'
                    ]
                }
        
                var lowerLegs = {
                    bodyPart: `lower legs`,
                    target: ['calves'],
                    equipment: [
                        'body weight',
                        'assisted',
                        'band',
                        'barbell',
                        'cable',
                        'rope',
                        'dumbbell',
                        'sled machine',
                        'leverage machine',
                        'smith machine',
                        'weighted'
                    ]
                };
        
                var shoulders = {
                    bodyPart: `shoulders`,
                    target: ['delts'],
                    equipment: [
                        'band',
                        'barbell',
                        'rope',
                        'cable',
                        'dumbbell',
                        'ez barbell',
                        'kettlebell',
                        'body weight',
                        'leverage machine',
                        'resistance band',
                        'smith machine',
                        'weighted'
                    ]
                }
        
                var upperLegs = {
                    bodyPart: `upper legs`,
                    target: ['quads', 'glutes', 'hamstrings', 'adductors', 'abductors'],
                    equipment: [
                        'body weight', 'assisted',
                        'band', 'barbell',
                        'cable', 'dumbbell',
                        'stability ball', 'rope',
                        'kettlebell', 'leverage machine',
                        'resistance band', 'roller',
                        'sled machine', 'smith machine',
                        'bosu ball', 'tire',
                        'trap bar', 'weighted'
                    ]
                }
        
                var cardio = {
                    bodyPart: `cardio`,
                    target: ['cardiovascular system'],
                    equipment: [
                        'body weight',
                        'leverage machine',
                        'dumbbell',
                        'rope',
                        'stationary bike',
                        'elliptical machine',
                        'stepmill machine'
                    ]
                }
        
                var lowerArms = {
                    bodyPart: `lower armss`,
                    target: ['forearms'],
                    equipment: [
                        'band',
                        'barbell',
                        'cable',
                        'dumbbell',
                        'kettlebell',
                        'leverage machine',
                        'body weight',
                        'smith machine',
                        'weighted'
                    ]
                }
        
                var neck = {
                    bodyPart: `neck`,
                    target: ['levator scapulae'],
                    equipment: ['body weight']
                }
        
                var upperArms = {
                    bodyPart: `upper arms`,
                    target: ['triceps', 'biceps'],
                    equipment: [
                        'assisted', 'leverage machine',
                        'band', 'barbell',
                        'body weight', 'cable',
                        'dumbbell', 'stability ball',
                        'ez barbell', 'kettlebell',
                        'medicine ball', 'olympic barbell',
                        'resistance band', 'skierg machine',
                        'smith machine', 'weighted'
                    ]
                }
        
                var waist = {
                    bodyPart: `waist`,
                    target: ['abs'],
                    equipment: [
                        'body weight', 'assisted',
                        'medicine ball', 'band',
                        'barbell', 'cable',
                        'stability ball', 'dumbbell',
                        'kettlebell', 'leverage machine',
                        'weighted', 'roller',
                        'hammer', 'smith machine',
                        'wheel roller'
                    ]
                }
        
                var filters = [
                    back, cardio,
                    chest, lowerArms,
                    lowerLegs, neck,
                    shoulders, upperArms,
                    upperLegs, waist
                ];
        
                // console.log(filters);
        
                data.filters = filters;
        
                // console.log(data);
        
                data = JSON.stringify(data);
        
                writeFileContent(`../json/${jsonName}`, data).then((data) => {
                    console.log(`File ${jsonName} written successfully from promise`);
                });
        
        */



        // console.log(data.recipes);
        // console.log(data.mealTypes);
        // console.log(data.allergies);
        // console.log(data.cuisines);
        // console.log(data.diets);
    });
