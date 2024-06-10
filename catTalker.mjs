
import cats from './cats.mjs';
import chalk from 'chalk';

import { greetOneCat, greetAllCats } from './greetings.mjs'


const talkToCats = (greeting, name) => {
    name = cats.name
    if(greetOneCat){
       return (greetOneCat(name))
    }if(greetAllCats){
        return greetAllCats()
    }else{
        return 'not a valid greeting'
    }

}

talkToCats()