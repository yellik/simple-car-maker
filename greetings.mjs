import cats from "./cats.mjs";
export const greetOneCat = (name) => { 
    cats.forEach((cat) => {
        const catname = cat.name
        if(catname){
            return cat.says;
        }else{
            return 'there was no cat found with this name'
        }
    })
    console.log(`Hello! my name is ${name}. Nice to meet you`)
}

export const greetAllCats = () => {
    cats.forEach((cat) => {
        const catgreeting = cat.says;
        console.log(catgreeting);
    })
}