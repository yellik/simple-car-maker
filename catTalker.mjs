import express from 'express'
import cats from './cats.mjs';
import { Readline } from 'readline/promises';

import { greetOneCat, catCalorieCounter } from './greetings.mjs'
const app = express()

app.use(express.json);


  
const greetAllCats = () => {
    cats.forEach((cat) => {
        const catgreeting = cat.says;
        console.log(catgreeting);
    })
}

const talkToCats = (greeting, name) => {
    name = cats.name
    if(greeting === greetOneCat){
       return greetOneCat(name)
    }if(greetAllCats){
        return greetAllCats()
    }
    if(greeting === catCalorieCounter){
        return catCalorieCounter(name)
    }else{
        return 'not a valid greeting'
    }

}

talkToCats()