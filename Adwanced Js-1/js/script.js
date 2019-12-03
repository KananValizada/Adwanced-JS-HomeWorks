/**
 *
 * @constructor
 * @param size        size of the hamburger
 * @param stuffing    selected stuffing
 * @throws {HamburgerException}  In case of incorrect usage
 */
function Hamburger(size, stuffing) {
    var toppingNames = [];
    this.size = size;
    this.stuffing = stuffing;
    this.setToppingNames = (newToppings) => {
      if (!newToppings instanceof Array) {
        throw new Error("new toppings has to be Array")
      }
      /* deleting all old values from toppings and inserting new values */
      toppingNames.splice(
        0,
        toppingNames.length,
        ...newToppings
      )
    };
    this.getToppingNames = () => {
      // return toppings;
      return [...toppingNames];
      // return Array.copy(toppings);
    }
  }
  
  /* Sizes, types of stuffings and toppings */
  Hamburger.SIZE_SMALL = Object.freeze({
    price: 50,
    cal: 20
  });
  
  Hamburger.SIZE_LARGE = {
    price: 100,
    cal: 20
  };
  Hamburger.STUFFING_CHEESE = {
    price: 10,
    cal: 20
  };
  Hamburger.STUFFING_SALAD = {
    price: 20,
    cal: 5
  };
  Hamburger.STUFFING_POTATO = {
    price: 15,
    cal: 10
  };
  Hamburger.TOPPING_MAYO = {
    price: 20,
    cal: 5
  };
  Hamburger.TOPPING_SPICE = {
    price: 15,
    cal: 0
  };
  
  /**
   * Add topping to hamburger. Several toppings can be added, only if they are different. You can't add same topping two times.
   *
   * @param topping     type of topping will be passed as a String like "mayo"
   * @throws {HamburgerException}  in case of incorrect usage
   */
  Hamburger.prototype.addTopping = function (topping) {
    try {
      var currentToppings = this.getToppingNames();
  
      if (currentToppings.some(el => el === topping)) {
        throw new HamburgerException("This topping already exists!")
      } else {
        currentToppings.push(topping);
        this.setToppingNames(currentToppings);
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  
  /**
   * Delete the toppping, only if it was added earlier.
   *
   * @param topping   topping type
   * @throws {HamburgerException}  in case of incorrect usage
   */
  Hamburger.prototype.removeTopping = function (topping) {
    try {
      var currentToppings = this.getToppingNames();
  
      if (!currentToppings.some(el => el === topping)) {
        throw new HamburgerException("Nothing to delete")
      } else {
        currentToppings.splice(
          currentToppings.indexOf(topping),
          1
        );
        this.setToppingNames(currentToppings);
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  
  /**
   * Get list of toppings
   *
   * @return {Array} an Array with the list of constants like Hamburger.TOPPING_* inside
   */
  Hamburger.prototype.getToppings = function () {
    try {
      return this.getToppingNames().map(t => this.checkTopping(t));
    } catch (e) {
      console.log(e.message);
    }
    return null;
  };
  Hamburger.prototype.checkTopping = function (topping) {
    switch (topping) {
      case "mayo":
        return Hamburger.TOPPING_MAYO;
      case "spice":
        return Hamburger.TOPPING_SPICE;
      default:
        throw new HamburgerException("Incorrect topping value!");
    }
  };
  
  /**
   * Find out the size of the Hamburger
   */
  Hamburger.prototype.getSize = function () {
    /* implement Hamburger.prototype.checkSize(),
    * to be responsible for turn 'small' into Hamburger.SIZE_SMALL object */
    return this.checkSize(this.size);
  };
  
  /**
   * Find out the stuffing of the Hamburger
   */
  Hamburger.prototype.getStuffing = function () {
    /* implement Hamburger.prototype.checkStuffing(),
    * to be responsible for turn 'salad' into Hamburger.STUFFING_SALAD object */
    return this.checkStuffing(this.size);
  };
  
  /**
   * Find out the price of the hamburger
   * @return {Number} the number of price in AZN
   */
  Hamburger.prototype.calculatePrice = function () {
  //  get size and price of it
  //  +
  //  get stuffing and price of it
  //   +
  //  get all toppings and reduce this array into one value (Array.prototype.reduce())
  };
  
  /**
   * Find out callories amount of the hamburger
   * @return {Number} Number of calories
   */
  
  Hamburger.prototype.calculateCalories = function () {
    /*same implementation, as for previous method*/
  };
  
  /**
   * Provides information about an error while working with a hamburger.
   * Details are stored in the message property.
   * @constructor
   */
  function HamburgerException(msg) {
    this.message = msg;
  }
  
  // HamburgerException.prototype = Object.create(Error.prototype);
  
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  
  console.log("toppings before");
  console.table(hamburger.getToppingNames());
  
  hamburger.addTopping("mayo");
  
  console.log("added mayo");
  console.table(hamburger.getToppingNames());
  
  hamburger.addTopping("spice");
  
  console.log("added spice");
  console.table(hamburger.getToppingNames());
  
  hamburger.removeTopping("spice");
  
  console.log("spice removed");
  console.table(hamburger.getToppingNames());
  
  hamburger.removeTopping("spice");
  
  console.log("spice removed again");
  console.table(hamburger.getToppingNames());
  