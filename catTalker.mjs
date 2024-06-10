
import { greetOneCat, greetAllCats } from './greetings.mjs'



const talkToCats = (greeting, name) => {
    if(greeting === "greetOneCat") {
        return (greetOneCat(name))    
    }else if(greeting === "greetAllCats"){
        return greetAllCats()
    }else{
        return 'not a valid greeting'
    }

}

const [,, greeting, name] = process.argv;

talkToCats(greeting, name)