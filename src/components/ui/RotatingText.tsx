'use client';
import { useEffect } from "react";

export default function RotatingText() {
    useEffect(()=>{
        let words = document.querySelectorAll(".word");
        words.forEach(word => {
            let letters = word.textContent ? word.textContent.split(""): [];
            word.textContent = "";
            letters.forEach(letter => {
                let span = document.createElement("span");
                span.textContent = letter === " " ? "\u00A0" : letter;
                span.className = "letter";
                word.append(span);
            });
        });

        let currentWordIndex = 0;
        let maxWordIndex = words.length - 1;
        (words[currentWordIndex] as HTMLElement).style.opacity = "1";

        let rotateText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord =
            currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
        // rotate out letters of current word
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
            letter.className = "letter out";
            }, i * 80);
        });
        // reveal and rotate in letters of next word
        (nextWord as HTMLElement).style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
            letter.className = "letter in";
            }, 340 + i * 80);
        });
        currentWordIndex =
            currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };

        rotateText();
        setInterval(rotateText, 4000);
    },[0])

    return (
        <div className="rotating-text">
            <span className="word" style={{color:"#e74c3c"}}>Software Engineer</span>
            <span className="word" style={{color:"#8e44ad"}}>Climber</span>
            <span className="word" style={{color:"#2ecc71"}}>AI Enthusiast</span>
            <span className="word" style={{color:"#f1c40f"}}>Full Stack Developer</span>
        </div>
    )
}