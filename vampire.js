/*jshint esversion: 6 */

class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
   return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let distance = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      distance++;
      currentVampire = currentVampire.creator;
    }
    return distance;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (vampire.numberOfVampiresFromOriginal > this.numberOfVampiresFromOriginal) return true;
    return false;
  }


  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let vampire = this;
    
    if (this.name === name) {
      return this;
    }

    for(let child of vampire.offspring) {
      let found = child.vampireWithName(name);
      if(found) return found;
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }


  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

