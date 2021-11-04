'use strict';

const AnimalShelter = require('../module/animalShelter');

describe('Animal enqueuing Test', () => {
  //probably should have a better name
  it('enqueue a cat', () => {
    let animal = new AnimalShelter();
    animal.enqueue('cat');
    animal.enqueue('cat');
    expect(animal.cat.front.value).toBe('cat');
    expect(animal.cat.back.value).toBe('cat');
  });
  it('enqueue a dog', () => {
    let animal = new AnimalShelter();
    animal.enqueue('dog');
    animal.enqueue('dog');
    expect(animal.dog.front.value).toBe('dog');
    expect(animal.dog.back.value).toBe('dog');
  });
  it('fail @ enqueuing no animal or anything other than cat/dog', () => {
    let animal = new AnimalShelter();
    animal.enqueue('');
    expect(animal.enqueue('')).toBe(
      'These are not the animals we are looking for'
    );
  });
});
describe('Dequeue Animal Test', () => {
  it('dequeue a cat', () => {
    let animal = new AnimalShelter();
    animal.enqueue('cat');
    animal.enqueue('cat');
    animal.dequeue('cat');
    expect(animal.cat.front.value).toBe('cat');
    expect(animal.cat.front.next).toBe(null);
    expect(animal.cat.back.value).toBe('cat');
  });
  it('dequeue a dog', () => {
    let animal = new AnimalShelter();
    animal.enqueue('dog');
    animal.enqueue('dog');
    animal.dequeue('dog');
    expect(animal.dog.front.value).toBe('dog');
    expect(animal.dog.front.next).toBe(null);
    expect(animal.dog.back.value).toBe('dog');
  });
  it('fail dequeue because no pref was given ', () => {
    const animal = new AnimalShelter();
    animal.enqueue('cat');
    animal.dequeue('');
    expect(animal.dequeue('')).toBe(null);
  });
  it('fail to dequeue, no animals in the shelter', () => {
    const animal = new AnimalShelter();
    animal.dequeue('dog');
    expect(animal.dequeue('dog')).toBe(
      'These are not the animals you are looking for'
    );
  });
});
