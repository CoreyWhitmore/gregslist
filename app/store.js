import Car from "./Models/Car.js";
import House from "./Models/House.js";
console.log(1);

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ make: "Tesla", model: "Cybertruck", year: 2020, price: 100000, img: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/11/tesla_pickup.png", description: "It's like living in the future, with 1 broken window." }),
    new Car({ make: "Mystery", model: "Machine", year: 1987, price: 1000, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-classic-mystery-machine-replica-van-built-by-jerry-news-photo-1587131341.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*", description: "Smells like meddling teenagers and a dog" }),
    new Car({ make: "Jeep", model: "Wrangler", year: 1987, price: 1000, img: "https://vignette.wikia.nocookie.net/jurassicpark/images/e/e7/Jurassic-park-jeep3-1-.jpg/revision/latest/scale-to-width-down/340?cb=20090417212624", description: "Are those teeth marks?" })
  ],
  houses: [
    new House({ address: "1324 Main St.", city: 'Danville', state: 'UN', zip: 94837, price: 500, description: "Doofenshmirtz Evil Inc. building #3 - Duplicatorinator went haywire and now I have a bunch of these things I have to get rid of so I don't have to pay property taxes on them", img: "https://vignette.wikia.nocookie.net/disney/images/7/7a/Doofenshmirtz_Evil_Inc._building.jpg/revision/latest/top-crop/width/360/height/450?cb=20110918043121" }),
    new House({ address: "1324 Main St.", city: 'Danville', state: 'UN', zip: 94837, price: 500, description: "Doofenshmirtz Evil Inc. building #8 - Duplicatorinator went haywire and now I have a bunch of these things I have to get rid of so I don't have to pay property taxes on them", img: "https://vignette.wikia.nocookie.net/disney/images/7/7a/Doofenshmirtz_Evil_Inc._building.jpg/revision/latest/top-crop/width/360/height/450?cb=20110918043121" }),
    new House({ address: "1324 Main St.", city: 'Danville', state: 'UN', zip: 94837, price: 500, description: "Doofenshmirtz Evil Inc. building #22 - Duplicatorinator went haywire and now I have a bunch of these things I have to get rid of so I don't have to pay property taxes on them", img: "https://vignette.wikia.nocookie.net/disney/images/7/7a/Doofenshmirtz_Evil_Inc._building.jpg/revision/latest/top-crop/width/360/height/450?cb=20110918043121" })
  ],
  jobs: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
