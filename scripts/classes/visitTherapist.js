import Visit from "./visit.js";

class Therapist extends Visit{
  constructor(age, ...args){
    super(...args);
    this.age = age;
  }

  createElements(){
    super.createElements();
    this.containerDoctorsInfo.insertAdjacentHTML("beforeend", `<li> Age: ${this.age};</li>`)
    this.cardInfo.prepend(this.containerInsertedInfo);
  }
}

export default Therapist;
