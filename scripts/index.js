import {Authorization} from "./classes/classModalAuthorization.js";
//import {header, bodyContainer} from "./constanta.js";
//import {filter, renderList} from "./functions/filterFunction.js"
//import {changeButton} from "./functions/changeButton.js";
//import {filterCard} from "./functions/filterFunction.js"
// import {getCards} from "./api/getCards.js";
// import {createCards} from "./api/createCard.js";


const headerButton = document.body.querySelector('.header_button')
headerButton.addEventListener("click", () => {
    new Authorization().createElements();
})

