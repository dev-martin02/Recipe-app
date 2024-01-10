<<<<<<< HEAD
// Links to the section
const link_recipe_section = document.getElementById('recipes-link')
const link_ideas_section = document.getElementById('ideas-link')
const link_benefits_section = document.getElementById('benefits-link')


// sections variables 
const recipe_section = document.querySelector('.recipes-section')
const ideas_section = document.querySelector('.ideas-section')
const benefits_section = document.querySelector('.benefits-section')

// ! Make it that it doesn't need to have a  2 parameters 
//TODO: Instead of selecting the tag itself just add a CSS class that will remove the visibility and add another class that will give the visibility ↓
function no_display_section(section1, section2 ){
   section1.style.display = 'none', section2.style.display = 'none'
}

function display_section(section1){
    section1.style.display = 'flex'
}

// END of the TODO 


// Events to change the visibility of the sections
link_recipe_section.addEventListener('click', () =>{
    display_section(recipe_section)
    no_display_section(ideas_section, benefits_section)})

link_ideas_section.addEventListener('click', () => {
    display_section(ideas_section)
    no_display_section(recipe_section, benefits_section)})

link_benefits_section.addEventListener('click', () =>{
    display_section(benefits_section)
=======
// Links to the section
const link_recipe_section = document.getElementById('recipes-link')
const link_ideas_section = document.getElementById('ideas-link')
const link_benefits_section = document.getElementById('benefits-link')


// sections variables 
const recipe_section = document.querySelector('.recipes-section')
const ideas_section = document.querySelector('.ideas-section')
const benefits_section = document.querySelector('.benefits-section')

// ! Make it that it doesn't need to have a  2 parameters 
//TODO: Instead of selecting the tag itself just add a CSS class that will remove the visibility and add another class that will give the visibility ↓
function no_display_section(section1, section2 ){
   section1.style.display = 'none', section2.style.display = 'none'
}

function display_section(section1){
    section1.style.display = 'flex'
}

// END of the TODO 


// Events to change the visibility of the sections
link_recipe_section.addEventListener('click', () =>{
    display_section(recipe_section)
    no_display_section(ideas_section, benefits_section)})

link_ideas_section.addEventListener('click', () => {
    display_section(ideas_section)
    no_display_section(recipe_section, benefits_section)})

link_benefits_section.addEventListener('click', () =>{
    display_section(benefits_section)
>>>>>>> 6d2917d4ef515e80c8ab4c5ee29cc8d529a6196d
    no_display_section(recipe_section, ideas_section)})