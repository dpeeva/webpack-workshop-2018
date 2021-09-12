import { footer } from './footer'
import makeButton from './button'
import { makeColorStyle } from './button-styles'
import './footer.css'
import './button.css'

const button = makeButton('Yay! A button!')
button.style = makeColorStyle('red')
document.body.append(button)
document.body.appendChild(footer)