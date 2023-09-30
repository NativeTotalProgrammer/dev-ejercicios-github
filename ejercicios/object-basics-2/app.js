let bandInfo;

// Add your code here

const band = {
  name: "Ska-p",
  nationality: "Spain",
  genre: "Ska",
  members: 8,
  formed: 1994,
  split: false,
  albums: [
    { name: "Ska-P"                               , released: 1994 },
    { name: "El vals del obrero"                  , released: 1996 },
    { name: "Eurosis"                             , released: 1998 },
    { name: "Planeta Eskoria"                     , released: 2000 },
    { name: "¡¡Que corra la voz!!"                , released: 2002 },
    { name: "Incontrolable (CD+DVD)"              , released: 2004 },
    { name: "Lágrimas y gozos"                    , released: 2008 },
    { name: "99 %"                                , released: 2013 },
    { name: "Live in Woodstock Festival (CD+DVD)" , released: 2016 },
    { name: "Game Over"                           , released: 2018 },
  ]
};

bandInfo = `
  ${band.name} is a ${band.genre} band from ${band.nationality}. Formed in ${band.formed}, they have ${band.members} members and they ${band.split ? 'have split up' : 'are still together'}
`;

const infoFirstAlbum = band.albums[0];

bandInfo += `Their first album, "${infoFirstAlbum.name}", was released in ${infoFirstAlbum.released}.`;

// Don't edit the code below here!

const section = document.querySelector('section');
let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);