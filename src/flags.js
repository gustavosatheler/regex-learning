/*!
 * @author Gustavo Bittencourt Satheler <gustavosatheler@gmail.com>
 * date 05/27/2019
 * learning how to mean the flags
 * 
 * g => global
 * i => ignore case
 */

module.exports = {

    example_1: (text) => {
        return text.match(/I|dev/)
    },

    example_2: (text) => {
        return text.match(/i|dev/i)
    },

    example_3: (text) => {
        return text.match(/I|dev/g)
    },
    
    example_4: (text) => {
        return text.match(/i|DEV/gi)
    },

    example_5: (text) => {
        return text.match(/dev|I/gi)
    }
}