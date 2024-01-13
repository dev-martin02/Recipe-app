
// Links to the section
const link_recipe_section = document.getElementById('recipes-link')
const link_ideas_section = document.getElementById('ideas-link')


// sections variables 
const recipe_section = document.querySelector('.recipes-section')
const ideas_section = document.querySelector('.ideas-section')

// ! Make it that it doesn't need to have a  2 parameters 
//TODO: Instead of selecting the tag itself just add a CSS class that will remove the visibility and add another class that will give the visibility ↓
function no_display_section(section1, section2 ){
    section1.style.display = 'none', section2.style.display = 'none'
}

function display_section(section1){
    section1.style.display = 'flex'
}

// END of the TODO 

const cardIdeas = document.querySelectorAll('.card-ideas');

// Events to change the visibility of the sections
link_recipe_section.addEventListener('click', () =>{
    display_section(recipe_section)
    no_display_section(ideas_section)})

link_ideas_section.addEventListener('click', () => {
    api_ideas_section()
    display_section(ideas_section)
    no_display_section(recipe_section) })

    
    cardIdeas.forEach(card => {
        card.addEventListener('click', () => {
            const h3_element = card.querySelector('h3')
            if (h3_element.style.display !== "none"){
                h3_element.style.display = 'none'
            } else{
                h3_element.style.display = 'flex'
            }
        });
    });
    
// API 
const apiKey = "8c411844e5c54003ba2979a234929d9c"


// Recipes Section 
const search_btn = document.querySelector('button')
const plates = document.querySelectorAll('.plate')
const input = document.querySelector('input')

const div_card = document.querySelectorAll('.card')
const div_name = document.querySelectorAll('.name')
const div_dish_type = document.querySelectorAll('.description')



// Complex search 
async function complex_search() {
    const complex_search_api = `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${apiKey}&query=${input.value}`;
    
    const response = await fetch(complex_search_api);
    const data = await response.json();
    
    console.log(data);
    
    for (let i = 0; i < 3; i++) {
        // Recipe Information
        const recipe_api = `https://api.spoonacular.com/recipes/${data.results[i].id}/information?apiKey=${apiKey}&includeNutrition=false`;
        
        const recipeResponse = await fetch(recipe_api); 
        const recipeData = await recipeResponse.json();
        
        console.log(recipeData);
        
        // Remove the Tags from the text
        function removeHTMLTags(htmlString) {
            const doc = new DOMParser().parseFromString(htmlString, 'text/html');
            return doc.body.textContent || "";
        }
        
        const clean_instructions = removeHTMLTags(recipeData.instructions)
        
        
        const pElement = div_name[i].querySelector('p');
        pElement.innerText = data.results[i].title;
        
        const imgElement = div_card[i].querySelector('img');
        imgElement.src = data.results[i].image;
        
        const dishType_element = div_dish_type[i].querySelector('p');
        dishType_element.innerText = clean_instructions
    }
    
    plates.forEach(plate => display_section(plate));
}

search_btn.addEventListener('click', () => {
    complex_search();
});


// ends of reciper sections

// Ideas_section

const food_api = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;


async function api_ideas_section(){

    for (let i = 0; i < 12; i++) {
        const response = await fetch(food_api)

        const data = await response.json()

        const recipes = data.recipes[0]

        const imgElement = cardIdeas[i].querySelector('img')
        imgElement.src = recipes.image

        const h3Element = cardIdeas[i].querySelector('h3');
        h3Element.textContent = recipes.title;
    } 

}