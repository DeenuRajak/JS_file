// Immediately Invoked Function Expressions (IIFE)
//Global scope's polution cause problems so, to avoid global scope polutions (variable) we need Immediately Invoked function expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')