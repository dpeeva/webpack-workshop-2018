// import './footer.css'
// import css from './footer.css'
import { red, blue } from './button-styles'

// console.log(css)

const top = document.createElement('div')
top.innerText = 'Top of Footer'
top.style = red

const bottom = document.createElement('div')
bottom.innerText = 'Bottom of Footer'
bottom.style = blue

const footer = document.createElement('footer')
footer.appendChild(top)
footer.appendChild(bottom)

export { top, bottom, footer }