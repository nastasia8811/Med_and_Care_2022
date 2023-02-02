import {Input} from "./input.js";
import {CardServerCardiologist} from "./cardServerCardiologist.js";




export class InputCardiologist extends Input {
    constructor(pressure, mass, illness, age, ...args) {
        super(...args);
        this.pressure = pressure;
        this.mass = mass;
        this.illness = illness;
        this.age = age;
    }

     inputCreate() {

        const modalWindow = document.querySelector(".modalWindow");
        const addVisitButton = document.querySelector(".addVisitButton");
        modalWindow.insertAdjacentHTML('beforeend', `<form class="formModal" action="#" method="POST">
        <input class="modal_window_doctor" placeholder="Doctor" value="Cardiologist">
        <input class="modal_window_reason" placeholder="Reason">
        <input class="modal_window_priority" placeholder="Priority">
        <input class="modal_window_name" placeholder="Name">
        <input class="modal_window_description" placeholder="Description">
        <input type="date" class = "modal_window_date" placeholder = "Date">
        <input class="modal_window_pressure" placeholder="Pressure">
        <input class="modal_window_mass" placeholder="Mass">
        <input class="modal_window_illness" placeholder="Illness">
        <input class="modal_window_age" placeholder="Age">
    </form>`);
        addVisitButton.addEventListener('click', () => {
            const inputName = document.querySelector(".modal_window_name").value;
            const inputDoctor = document.querySelector(".modal_window_doctor").value;
            const inputPurpose = document.querySelector(".modal_window_reason").value;
            const inputUrgency = document.querySelector(".modal_window_priority").value;
            const inputDescription = document.querySelector(".modal_window_description").value;
            const inputPressure = document.querySelector(".modal_window_pressure").value;
            const inputMass = document.querySelector(".modal_window_mass").value;
            const inputIllness = document.querySelector(".modal_window_illness").value;
            const inputAge = document.querySelector(".modal_window_age").value;
            const inputDate = document.querySelector(".modal_window_date").value;
            new CardServerCardiologist(inputPressure, inputMass, inputIllness, inputAge, inputName, inputDoctor, inputUrgency, inputPurpose, inputDescription, inputDate).requestCreateCard()

        })
         addVisitButton.addEventListener('click', ()=>{
             modalWindow.remove()
             alert("Поздравляем, визит к Кардиологу создан!")
         })
    }
}

