var aboutBtnEl = document.getElementById("aboutBtn")
var projectBtnEl = document.getElementById("projectBtn")
var aboutMe = document.getElementById("aboutMeBlock")
var projects = document.getElementById("projectSection")

console.log(projectBtnEl)


function switchToProjects() {
    projects.classList.remove("hide")
    aboutMe.classList.add("hide")
    console.log("Switch to Projects")

}

function switchToAbout() {
    projects.classList.add("hide")
    aboutMe.classList.remove("hide")
    console.log("Switch to About")

}

projectBtnEl.addEventListener("click", switchToProjects)
aboutBtnEl.addEventListener("click", switchToAbout)
console.log("here")