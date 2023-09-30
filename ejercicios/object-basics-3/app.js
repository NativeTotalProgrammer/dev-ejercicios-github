const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`"Hello, said ${this.name} the ${this.breed}."`);
  }
};

const cat2 = { ...cat }

cat2.name  = 'Mart';
cat2.breed = 'Ragdoll'
cat2.color = 'grayish'

cat.greeting();
cat2.greeting();


console.log(cat2);