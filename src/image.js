const makeImage = (url, width = 100, height = 100) => {
    const image = document.createElement('img')
    // image.width = width
    image.height = height
    image.src = url
    return image
}

export default makeImage