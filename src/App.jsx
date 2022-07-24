import React , {useState, useEffect} from 'react'
import TypingHeader from './components/TypingHeader'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import AOS from "aos"
import "aos/dist/aos.css"
import { TbSun, TbMoonStars } from "react-icons/tb";

function App() {
    const [theme, setTheme] = useState(null);
    
    function changeTheme(){
        if(theme === "light"){
            localStorage.theme = 'dark'
            setTheme("dark");
        }
        else{
            localStorage.theme = 'light'
            setTheme("light");
        } 
      }

    useEffect(() => {
        AOS.init();
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark');
        } else{
            setTheme('light');
        }
    });

    useEffect(() => {
        if (theme === 'dark') {
            console.log('switched');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

  return (
    <>
        <meta name="theme-color" content={theme==="light" ? "#D59AFF" : "#542F73"} />
        <div id="top">
            <img src={theme === 'light' ? './img/04.jpg' : './img/02.jpg'} alt="" className='w-full h-full scale-150 fixed'/>
            <button 
                type='button' 
                onClick={changeTheme}
                className = "fixed transition ease-in-out duration-300 bg-inherit text-zinc-900 dark:text-white drop-shadow-md hover:shadow-innerXL right-5 top-8 md:right-8 md:top-7 hover:cursor-pointer text-3xl md:text-4xl p-2 md:p-4 rounded-full hover:scale-110 buttonPos">
                {theme==='light' ? <TbSun></TbSun> : <TbMoonStars></TbMoonStars>}
            </button>
            <a
            href="#top"
            className= "fixed transition ease-in-out duration-300 drop-shadow-md hover:shadow-innerXL bg-inherit rounded-full left-5 top-6 md:left-8 md:top-6 hover:cursor-pointer p-2 md:p-4 hover:scale-110 buttonPos"
            >
                <img src="./img/memoji/icon.png" alt="" className='w-9 md:w-10'/>
            </a>
        </div>
        

        <div className='font-pop backdrop-blur-3xl usebg'>
            <TypingHeader id="top" />
            <HeroSection theme={theme} />
            <SkillsSection theme={theme} />
        </div>
    </>
  )
}

export default App