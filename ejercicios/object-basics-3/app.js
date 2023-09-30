const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`"Hello, said ${this.name} the ${this.breed}."`);
  }
};

const cat2 = { ...cat }

cat2.name  = 'mart';
cat2.breed = 'ragdoll'
cat2.color = 'grayish'

cat.greeting();
cat2.greeting();


console.log(cat2);