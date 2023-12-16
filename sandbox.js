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
