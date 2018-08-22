const token = process.env.TOKEN;
const TeleBot = require('telebot');
const bot = new TeleBot(token);
var fs = require('fs');
var _ = require('lodash');
var array = JSON.parse(fs.readFileSync('data/tags.json', 'utf8'));

bot.on(['/start'], (msg) => msg.reply.text('Welcome!'));

bot.on(/(show\s)?kitty*/, (msg) => {
    return msg.reply.photo('http://thecatapi.com/api/images/get');
});

bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

bot.on(['/keys'], (msg) => {
    let str = ''
    for (let ar in array){
        str += ar +'\n'
    }
    console.log(str)
    return bot.sendMessage(msg.from.id, str);
});

bot.on('text', (msg) => {
    let msgarr = msg.text.split(" ")
    let str = ''
    let fin = []
    let extra = []
    try {
        for (key in msgarr){
            let arr = shuffle(array[msgarr[key]])
            for (ar in arr){
                fin.push('#'+arr[ar])
            }
        }

        fin=_.uniq(fin)
        fin = shuffle(fin)

        for (ar in array['photo']){
            extra.push('#'+array['photo'][ar])
        }

        extra = shuffle(_.uniq(extra));


        if (fin.length <30){
            //TODO check uniq
            let rest = 30-fin.length;
            let str = '';
            let msgarray = [];
            // console.log(30-fin.length)
            for (var ar in fin){
                        msgarray.push(fin[ar]+'\n')
            }

            for (let i = 0; i <rest+30; i++) {
                msgarray.push(extra[i]+'\n')
            }

            // if (_.uniq(msgarray).length==60) {
            console.log(_.uniq(msgarray).length);
            for (let i = 0; i <30; i++) {
                str += msgarray[i]
            }

            if (msg.text == 'tattoo'){
                str = 'by @ \n' + str;
                console.log(msg.text)
            }

            bot.sendMessage(msg.from.id, str);


            str = '';
            for (let i = 31; i <msgarray.length; i++) {
                str += msgarray[i]
            }
            bot.sendMessage(msg.from.id, str);
            // }
            // else{
            //     rest = 60-_.uniq(msgarray).length;
            //     console.log('++++',rest)
            //     for (let i = rest; i >0; i--) {
            //         // console.log(msgarray)
            //         if (!msgarray.includes(extra[i]+'\n')){
            //             console.log('------'+extra[i]+'\n')
            //             str += extra[i]+'\n'
            //         }
            //     }
            //     bot.sendMessage(msg.from.id, str);
            // }

            // for (let i = 0; i <=30; i++) {
            //     str += extra[i]+'\n'
            // }
            // bot.sendMessage(msg.from.id, str);
        }
        else {
            console.log(fin.length)
            // let rest = 60-fin.length;
            // let str = '';
            // let str2 = '';
            // for (let i = 0; i <=30; i++) {
            //     //         str += '#'+arr[i]
            //         }

            let rest = 60-fin.length;
            let str = '';
            let msgarray = []
            // console.log(30-fin.length)
            for (var ar in fin){
                msgarray.push(fin[ar]+'\n')
            }

            for (let i = 0; i <rest; i++) {
                msgarray.push(extra[i]+'\n')
            }

            // if (_.uniq(msgarray).length==60) {
            console.log(_.uniq(msgarray).length)
            for (let i = 0; i <30; i++) {
                str += msgarray[i]
            }

            bot.sendMessage(msg.from.id, str);


            str = '';
            for (let i = 31; i <msgarray.length; i++) {
                str += msgarray[i]
            }
            bot.sendMessage(msg.from.id, str);
        }
    } catch (e) {
        console.log(e)
        bot.sendMessage(msg.from.id, "Sorry, can't find this tag");
    }
    // console.log(msg.text.split(" "))
    // let arr = shuffle(array['london'])
    // let str = ''
    // if(arr.length<=30){
    //     let str = ''
    //     for (var ar in arr){
    //         str += '#'+arr[ar]+'\n'
    //     }
    //     bot.sendMessage(msg.from.id, str);
    // }
    // else if(arr.length<=60){
    //     let str = ''
    //     let str2 = ''
    //     for (i = 0; i <=30; i++) {
    //         str += '#'+arr[i]
    //     }
    //     for (i = 31; i <=60; i++) {
    //         str2 += '#'+arr[i]
    //     }
    //     bot.sendMessage(msg.from.id, str);
    //     bot.sendMessage(msg.from.id, str2);
    // }
    // else{
    //     let str = ''
    //     let str2 = ''
    //     let str3 = ''
    //     for (i = 0; i <=30; i++) {
    //         str += '#'+arr[i]
    //     }
    //     for (i = 31; i <=60; i++) {
    //         str2 += '#'+arr[i]
    //     }
    //     for (i = 61; i <arr.length; i++) {
    //         str3 += '#'+arr[i]
    //     }
    //     bot.sendMessage(msg.from.id, str);
    //     bot.sendMessage(msg.from.id, str2);
    //     bot.sendMessage(msg.from.id, str3);
    // }
    // for (var ar in arr){
    //     str += '#'+arr[ar]+'\n'
    // }
    // bot.sendMessage(msg.from.id, str);
    // return bot.sendMessage(msg.from.id, str2);
});
// bot.on('text', (msg) => msg.reply.text(msg.text));
// bot.mod('text', (data) => {
//     let msg = data.message;
//     msg.text = `📢 ${ msg.text }`;
//     return data;
// });
bot.start();