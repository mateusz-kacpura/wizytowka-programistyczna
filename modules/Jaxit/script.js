import {createJaxit} from './module.js';

//This will put the 'jax' variable as the Jaxit Object.
var jax = createJaxit();

//This will start up the Jaxit Object.
jax.init();

//If you do not want to style the console, you can default style the Jaxit Console using this method.
jax.defaultStyle();

//The first parameter is the text you want to output.
//The second parameter is the color you want it outputed it. Default is "white".

/*
First parameter: The text you want to output before the scanning. It is like an incentive to give an input.

Second parameter: The color of the pre-scanning text. Default is "white".

Third parameter: The color of the text in the user scanning area. Default is "white".

Fourth parameter: Should be set as "true" if you want the input to be parsed into an integer. Should be set as "false" if you want the input to be parsed into a string. Default is "false".

Fifth parameter: The callback. What will you do with the user input.

*/
jax.scan('What is your name', "white", "white", false, function(userInput) {
    jax.print('Hello, ' + userInput + '!');
  });

  /*
First parameter: The function you want to do.
Second parameter: The duration you want to wait for in seconds. Accepts decimals until three decimal places.
*/

jax.clear();

  /*
First parameter: The text you want to slowprint.
Second parameter: The duration for the entire string to be printed out. This is in milliseconds and does not support decimals.
Third parameter: The color of the text. (Rainbow colors are not supported.)
Fourth parameter: Since this code is asynchronous, Jaxit has a callback to do after the message is slowprinted.
*/
jax.slowprint('Cześć', 400, "green", function() {
    jax.print('Wyślij mi swoją wiadomość!');
    jax.scan('Jak masz na imię?', "white", "white", false, function(userInput) {
        jax.print('Hello, ' + userInput + '!');
      });
});

jax.scan((userResponse) => {
    // what you want the program to do after the user gives a response.
  }, text, textcolor, usertextcolor, ifint);