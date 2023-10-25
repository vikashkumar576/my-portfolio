"use client";
import { Typewriter } from "react-simple-typewriter";
 
const IntroTypewriter = ()=>{
    const phrases = ['vikash', 'a web developer,', 'fullstack developer.'];
    return(
        <Typewriter
            words={phrases}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={1000}
        />
    )
}

export default IntroTypewriter