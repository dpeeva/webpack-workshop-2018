import nav from './nav'
import { top, bottom, footer } from './footer'
import makeButton from './button'
import { makeColorStyle } from './button-styles'

const button = makeButton('Yay! A button!')
button.style = makeColorStyle('red')
document.body.append(button)
document.body.appendChild(footer)

console.log(
    nav(),
    top,
    bottom,
    // makeButton('Buttoon'),
    makeColorStyle('cyan')
)