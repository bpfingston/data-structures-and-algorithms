'use strict';

const queue = require('./queue');


class AnimalShelter {
  constructor() {
    this.dog = new queue();
    this.cat = new queue();
  }

  enqueue(animal) {
    if (animal === 'cat') {
      this.cat.enqueue(animal);
    } else if (animal === 'dog') {
      this.dog.enqueue(animal);
    } else {
      return 'These are not the animals we are looking for';
    }
  }
  dequeue(pref) {
    if (this.dog.isEmpty() && this.cat.isEmpty()) {
      return 'These are not the animals you are looking for';
    }
    if (pref === 'cat') {
      return this.cat.dequeue();
    } else if (pref === 'dog') {
      return this.dog.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
