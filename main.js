const timeDiv = document.querySelector('div#time');
const welcomeDiv = document.querySelector('h1#welcome');

const welcomeString = [
  "welcome!",                 // english
  "¡bienvenido!",             // spanish
  "mari mari!",               // mapudungun
  "bienvenue!",               // french
  "ようこそ！",               // japanese
  "o kama pona!",             // toki pona
  "bonvenon!",                // esperanto
  "croeso!",                  // welsh
  "fáilte romhat!",           // irish gaelic
  "tervetuloa!",              // finnish
  "tere tulemast!",           // estonian
  "välkommen!",               // swedish
  "willkommen!",              // german
  "환영합니다!",              // korean
  "aapka swagat hai!",        // hindi
  "maligayang pagdating!",    // tagalog
  "selamat datang!",          // indonesian
  "witamy!"                   // polish
]

const updateTime = () => {
  const now = new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })
  const formattedTime = now.toLocaleString();
  timeDiv.textContent = `Toronto :: ${formattedTime}`;
}

let i = 0;
const updateWelcome = () => {
  if (i === welcomeString.length) i = 0;

  welcomeDiv.textContent = welcomeString[i];
  i++;
}

setInterval(() => {
  updateTime();
  updateWelcome();
}, 1000);



window.onload = (event) => {
  updateTime();
  updateWelcome();
}
