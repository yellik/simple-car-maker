import express from 'express'
import cats from './cats.mjs';
import { Readline } from 'readline/promises';

import { greetOneCat, greetAllCats } from './greetings.mjs'


const talkToCats = (greeting, name) => {
    name = cats.name
    if(greeting === greetOneCat){
       return greetOneCat(name)
    }if(greetAllCats){
        return greetAllCats()
    }else{
        return 'not a valid greeting'
    }

}

talkToCats()