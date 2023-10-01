const section = document.querySelector('section');

let h1         = document.createElement('h1');
let para1      = document.createElement('p');
let para2      = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo = '';

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.json())
  .then(data => displayCatInfo(data))
  .catch(error => console.error('Error fetching data:', error));

function displayCatInfo(catData) {
  console.log({catData});

  if (Array.isArray(catData)) {
    const motherNames = catData.map(cat => cat.name).join(', ');

    const { total, male } = catData.reduce((acc, cat) => {
      acc.total += cat.kittens.length;
      acc.male  += cat.kittens.filter(kitten => kitten.gender === 'm').length;
      return acc;
    }, { total: 0, male: 0 });

    motherInfo = `The mother cats are called ${motherNames} and ${catData[catData.length - 1].name}.`;

    kittenInfo = `There are ${total} kittens in total, out of which ${male} are male and ${total - male} are female.`;

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
    h1.textContent    = "Cat's API"
  } else {
    console.error('Invalid JSON data structure.');
  };
};

section.appendChild(h1);
section.appendChild(para1);
section.appendChild(para2);
