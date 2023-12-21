// -----> Chapter 3.1 For Loops <-----

// for (let i= 0; i < 5; i++){
//     console.log('in loop:', i);
// }
// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++){
//     // console.log(names[i]); //This will print out the first index of the array
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

//  -----> Chapter 3.2 While Loops <-----
// const names = ['shaun', 'mario', 'luigi']
// let i = 0;
// while (i < names.length){
//     console.log(names[i]);
//     i++;
// }

// let i = 0;
// while (i < 5) {
//     console.log('in loop: ', i);
//     i++;
// }

//  -----> Chapter 3.3 Do While Loops <-----

// let i = 2;
// do{
//     console.log('val of i is: ', i);
//     i++;
// } while (i < 5);

// -----> Chapter 3.4 if statement <-----
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'lee', 'yoshi']
// if (ninjas.length > 3 ){
//     console.log("that's a lot of ninjas");
// }

// const password = 'password'
// if(password.length >= 8) {
//     console.log('That password is long enough');
// }

//  -----> Chapter 3.5 else & else-if statement <-----
// const password = 'p@ssword'

// if (password.length >= 12){
//     console.log('that password is super strong');
// } else if(password.length >= 8) {
//     console.log('that password is long enough'); 
// } else {
//     console.log('pass word is not long enough');
// }

//  -----> Chapter 3.6 Logical operators <-----
// const password = 'p@ss12'

// if (password.length >= 12 && password.includes('@')){
//         console.log('that password is super strong');
//     } else if(password.length >= 8 || password.includes('@') && password.length >= 5) {
//         console.log('that password is strong enough'); 
//     } else {
//         console.log('password is not long or strong enough');
//     }

// -----> Chapter 3.7 Logical Not <-----
// let user = false;

// if (!user){
//     console.log('you must be logged in to continue');
// }
// console.log(!false);
// console.log(!true); 

// -----> Chapter 3.8 Break & Continue <-----
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++){
    
//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score:', scores[i]);
//     if(scores[i] === 100){
//         console.log('Congrats, you are 100!');
//         break;
//     }

// }

// -----> Chapter 3.9 Switch statements <-----
// const grade ='D';
// switch(grade){
//     case 'A':
//         console.log('you got an A');
//         break;
//     case 'B':
//         console.log('you got an B');
//         break;
//     case 'C':
//         console.log('you got an C');
//         break;
//     case 'D':
//         console.log('you got an D');
//         break;
//     case 'E':
//         console.log('you got an E');
//         break;
//     default:
//         console.log('not a valid grade.')

// }

// -----> Chapter 3.10 Variables and Block Scope <-----
// The same rules apply with let.
// const age = 30;

// if (true){
//     const age = 40;
//     const name = 'Mario';
//     console.log('inside 1st code block: ', age, name);

//     if(true){
//         const age = 50;
//         console.log('inside 2nd code block', age);
//         var test = 'hello'
//     }
// }

// console.log('outside code block: ', age);