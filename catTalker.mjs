import express from 'express'
import cats from './cats.mjs';
import { Readline } from 'readline/promises';

import { greetOneCat, catCalorieCounter, catAgeMessage } from './greetings.mjs'
const app = express()

app.use(express.json);


  
const greetAllCats = () => {
    cats.forEach((cat) => {
        const catgreeting = cat.says;
        console.log(catgreeting);
    })
}

const getName = () => {
    const name = cats.name;
    return name;
}

const name = getName()
greetAllCats()
greetOneCat(name)
catAgeMessage(name)
catCalorieCounter(name)

const talkToCats = (greeting, name) => {
    
}
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app is running on PORT ${port}`))
