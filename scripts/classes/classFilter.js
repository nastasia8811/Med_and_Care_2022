
import {bodyContainer} from "../constanta.js";


export class Filter {
    constructor(arr) {
        this.arr = arr;
    }

    filterApear() {
        bodyContainer.insertAdjacentHTML('beforeend', `<div class="filter_container">
        <select class="visit_status">
    <option value="All">All</option>
    <option value="Done">Done</option>
    <option value="Open">Open</option>
        </select>
        <input class="filter_doctor" type="text" id="search_doctor" placeholder="Кардиолог, Дантист, Терапевт">
    <ul id="results_filter_doctor">
    </ul>               
        <input class="filter_priority" type="text" id="search_priority" placeholder="Неотложная, Средняя, Низкая">
    <ul id="results_filter_priority">
    </ul>
    </div>`);

        const doctorInput = document.querySelector('.filter_doctor')
        const visitStatus = document.querySelector('.visit_status')
        const urgencyStatus = document.querySelector('.filter_priority')

        document.querySelector('.filter_container').addEventListener('input', (event) => {
            let result = this.arr;
            //const urgencyStatusArr = ["High", "Normal", "Low"]

            if (doctorInput.value !== "") {
                result = result.filter(elem => {
                    return elem.doctor.includes(doctorInput.value)
                })
            }

            if (visitStatus.value !== 'All') {
                result = result.filter(elem => {
                    let currentDateMs = new Date(elem.date).getTime()
                    let todayDateMs = new Date().getTime()
                    if (currentDateMs > todayDateMs && visitStatus.value === 'Open') {
                        console.log(visitStatus)
                        return true
                    } else if (todayDateMs > currentDateMs && visitStatus.value === 'Done') {
                        return true
                    }
                })
            }
            const urgencyStatusArr = ["Неотложная", "Средняя", "Низкая"]
            if (urgencyStatusArr.includes(urgencyStatus.value.toLowerCase()) ) {
                result = result.filter(elem =>
                    urgencyStatus.value=== elem.urgency
                )
            }
        })
    }
}