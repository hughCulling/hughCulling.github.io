// It is good practice to initialize variables at the top of the program
const date = new Date()
hour = date.getHours()

// After DOM loads so element exists.
document.addEventListener('DOMContentLoaded', function () {
    if (hour >= 17 || hour <= 7) {
        let element = document.body
        element.style.backgroundColor = "grey"
    }
})