import housesService from "../Services/HousesService.js";
import STORE from "../store.js";
console.log(3)
// private
function _drawHouses() {
  console.log(6)
  let houses = STORE.State.houses
  let template = ''
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  houses.forEach(c => template += c.Template)
  document.getElementById('houses').innerHTML = template
}


//Public
export default class HousesController {
  constructor() {
    console.log(5)
    _drawHouses();
  }

  createHouse() {
    event.preventDefault();
    let form = event.target
    let rawHouse = {
      // @ts-ignore
      address: form.address.value,
      // @ts-ignore
      city: form.city.value,
      // @ts-ignore
      state: form.state.value,
      // @ts-ignore
      zip: form.zip.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.img.value
    }
    housesService.createHouse(rawHouse)
    _drawHouses();
  }

  removeHouse(id) {
    debugger
    console.log('Ding-dong', id)
    housesService.removeHouse(id);
    _drawHouses();
  }

  bid(id) {
    housesService.bid(id);
    _drawHouses();
  }
}
