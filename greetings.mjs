import cats from "./cats.mjs";
export const greetOneCat = (name) => { 
    cats.forEach((cat) => {
        console.log(cat.name);
        if(cat.name.match(name))
        name = cat.name
            return name
    })
    console.log(`Hello! my name is ${name}. Nice to meet you`)
}

export const greetAllCats = () => {
    cats.forEach((cat) => {
        const catgreeting = cat.says;
        console.log(catgreeting);
    })
}