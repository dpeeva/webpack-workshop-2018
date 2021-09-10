/**
 * 
 * @param {string} buttonName 
 * @returns {Element}
 */
// take a string as button label and return an element
const makeButton = (buttonName) => {
    const buttonLabel = `Button: ${buttonName}`

    const button = document.createElement('button')
    button.innerText = buttonLabel

    return button
}

module.exports = makeButton