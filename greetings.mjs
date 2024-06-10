export const greetOneCat = (catname) => { 
    console.log(`Hello! my name is ${name}. Nice to meet you`)
}
export const catAgeMessage = (name) => { 
    const result = a * 7; 
    console.log(`I am ${a} years old. That is ${result} is cat years. 
    This equals to ${result} . 
 `)}


 export const catCalorieCounter = (calForFood1, calForFood2, calForFood3) => {
    console.log(`Now we know what how much food our kitty is eating in total`);
    const dailyCalIntake = [calForFood1, calForFood2, calForFood3]
    console.log(``);

    const[first, ...rest] = dailyCalIntake;    

    const reducedCalorieIntake = dailyCalIntake.reduce((accomulator, currentValue) => accomulator + currentValue);
    console.log(`Now we know that she had ${first} for breakkie. 
    Compared to ${reducedCalorieIntake} it's quite a heavy load.
    Might need to get easy on the breakkie! `);
 }
 /*
 export const makeCatMessage = (name, age, weight) => {
    const keys = ['name', 'age', 'weight']
    console.log(`This fn expects to receive three params: ${keys}`);
    const values = [name, age, weight];
    console.log(`You have passed the following values ${values}`);
    
    const catObject = keys.reduce((obj, key, index) => {
        return {...obj, [key]: values[index]}
        }, {});
    
    console.log(catObject);

 }*/