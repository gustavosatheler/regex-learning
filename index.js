const flags = require('./src/flags')

/*!
 * @author Gustavo Bittencourt Satheler <gustavosatheler@gmail.com>
 * date 05/27/2019
 * Método de inicialização 
 */

const main = () => {
    const text = 'I think therefore I "develop"'
    console.log(flags.example_1(text));
    console.log(flags.example_2(text));
    console.log(flags.example_3(text));
    console.log(flags.example_4(text));
    console.log(flags.example_5(text));
}

main();