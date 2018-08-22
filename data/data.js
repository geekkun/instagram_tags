// Load the full build.
var _ = require('lodash');
// Load the core build.
// var _ = require('lodash/core');
// // Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');
// // Load method categories.
// var arr = require('lodash/array');

let ru = '#россия #россиявперед #россии #российскиедизайнеры #россияматушка #россия1 #россиячемпион #российскаяфедерация #россиямоялюбовь #россию #россиявперёд #россиястуденческая #российская #русский #инстаграм_порусски #инстаграманет #русскиедизайнеры #русская #русские #русскийязык #русскийстиль #русскаязима #русскиймузей #русскийостров #русскаядевушка #рф #ссср #родина #russia #russian #russiangirl #russianblue #russianboy #russiangirls #russianfederation #russianred #russiandiary #russianphotolook #russiaphoto #russianriver #russians #russland #instarussia #instagramanet #instatag #russianhair #russianpics #russiamylove #russianmodel #russianbeauty #russianboys #russiagirl #russianfood #russiandesigners #russiannature #rf #ussr #ru'

var fs = require('fs');

let str = '#moscow #moscowcity #moscowmule #moscowdays #moscowgirl #moscowmoscow #moscow_life #moscowregion #moscowraceway #moscowneversleeps #moscowriver #moscowgirls #moscowmetro #moscowmules #moscowlife #moscowviews #moscowneversleep #moscowmarathon #moscownight #moscowfashion #moscow865 #moscowzoo #moscowstyle #instamoscow #instagramanet #москва #москвасити #москварека #москваялюблютебя #московскаяобласть #москве #москва2018 #московский #московская #москвасейчас #москва24 #москвич #москву #москоу #кремль #москвы #москвамосква #московскоеметро #москвацентр #москоусити #москва2016 #москвичи #москвавыбирает #москваодежда #москвалюблютебя #инстаграм_порусски #инстаграмнедели '

// let strarr = ru.split(" ")

russia=["ussr","sovietunion","soviet","russia","россия","ロシア","russianfederation","москва","мск","ссср","советскийсоюз","moscow","モスクワ","travel","journey","comrades","history","topmoscowphoto", "#россия", "#россиявперед", "#россии", "#российскиедизайнеры", "#россияматушка", "#россия1", "#россиячемпион", "#российскаяфедерация", "#россиямоялюбовь", "#россию", "#россиявперёд", "#россиястуденческая", "#российская", "#русский", "#инстаграм_порусски", "#инстаграманет", "#русскиедизайнеры", "#русская", "#русские", "#русскийязык", "#русскийстиль", "#русскаязима", "#русскиймузей", "#русскийостров", "#русскаядевушка", "#рф", "#ссср", "#родина", "#russia", "#russian", "#russiangirl", "#russianblue", "#russianboy", "#russiangirls", "#russianfederation", "#russianred", "#russiandiary", "#russianphotolook", "#russiaphoto", "#russianriver", "#russians", "#russland", "#instarussia", "#instagramanet", "#instatag", "#russianhair", "#russianpics", "#russiamylove", "#russianmodel", "#russianbeauty", "#russianboys", "#russiagirl", "#russianfood", "#russiandesigners", "#russiannature", "#rf", "#ussr", "#ru"],

    russia = _.uniq(russia)
console.log(russia)


// for (key in strarr){
// var array = JSON.parse(fs.readFileSync('tags.json', 'utf8'));
// // console.log(array)
// var next = function(db, key) {
//     for (var i = 0; i < db.length; i++) {
//         if (db[i].key === key) {
//             return db[i + 1] && db[i + 1].value;
//         }
//     }
// };
//

// for(key in array) {
//     array[key]=_.uniq(array[key])
// }

// console.log(data.length)
// data = _.uniq(data)
// console.log(data.length)
// const ordered = {};
// Object.keys(array).sort().forEach(function(key) {
//     ordered[key] = array[key];
// });
//
// console.log(JSON.stringify(array));