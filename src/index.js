import { footer } from './footer'
import makeButton from './button'
import { makeColorStyle } from './button-styles'
import makeImage from './image'
import imageUrl from './logo-on-white-bg.jpg'

import './footer.css'
import './button.css'

const image = makeImage(imageUrl)

const button = makeButton('Yay! A button!')
button.style = makeColorStyle('red')
document.body.append(button)
document.body.appendChild(image)
document.body.appendChild(footer)