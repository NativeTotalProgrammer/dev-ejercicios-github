class Cat {
  constructor(_name, _breed, _color) {
    this.name  = _name;
    this.breed = _breed;
    this.color = _color;
  };

  get greetingAux() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  };

  greeting() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  };
};

const cat1 = new Cat('Bertie', 'Cymric', 'white');
const cat2 = new Cat('Mart', 'Ragdoll', 'grayish');


console.log('CAT 1', cat1);
console.log('CAT 2', cat2);

cat1.greetingAux;
cat2.greetingAux;

cat1.greeting();
cat2.greeting();