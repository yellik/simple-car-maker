import cats from "./cats.mjs";
export const greetOneCat = (catname) => { 
    console.log(`Hello! my name is ${name}. Nice to meet you`)
}

export const greetAllCats = () => {
    cats.forEach((cat) => {
        const catgreeting = cat.says;
        console.log(catgreeting);
    })
}