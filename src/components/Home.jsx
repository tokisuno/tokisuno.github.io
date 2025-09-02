import { useState, useEffect } from 'react';

const Home = () => {
  const welcomeStrings = [
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

  const pageLoadNow = new Date().toLocaleString("en-CA", { timezone: "America/Toronto" })
  const pageLoadLocaleString = pageLoadNow.toLocaleString();
  const pageLoadTime = `Toronto :: ${pageLoadLocaleString}`;

  const [seconds, setSeconds] = useState(1);
  const [time, setTime] = useState(pageLoadTime);
  const [welcome, setWelcome] = useState(welcomeStrings[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      updateTime();
      updateWelcome();
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(timer);
  })

  const updateTime = () => {
    const now = new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })
    const formattedTime = now.toLocaleString();
    setTime(`Toronto :: ${formattedTime}`);
  }

  // fix this with setState
  const updateWelcome = () => {
    let index = welcomeStrings.indexOf(welcome);

    if (index < welcomeStrings.length - 1) {
      setWelcome(`${welcomeStrings[index+1]}`);
    } else {
      setWelcome(`${welcomeStrings[0]}`);
    }
  }


  return (
    <div className="home">
      <h1>toki/home</h1>
      <img src="/toronto.jpg" alt="toronto" />
      <h3>{time}</h3>
      <p className="welcome">{welcome}</p>
      <div className="socials">
        <a href="https://youtube.com/@tokisuno" target="_blank">youtube</a> | <a href="https://github.com/tokisuno" target="_blank">github</a> | <a href="https://www.goodreads.com/user/show/146547946-lucas-toki" target="_blank">goodreads</a> | <a href="http://discord.com/invite/876ayczgGr">discord</a>
      </div>
    </div>
  )
}

export default Home;
