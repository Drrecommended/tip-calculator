

//Check that key press is a number
const checkForNum = (e) => {
    const char = String.fromCharCode(e.which)
    if(!(/[0-9]/.test(char))) {
        e.preventDefault()
    }
}
