'use client';
import { useEffect } from "react";
import data from "../../../public/data.json"

export default function RotatingText() {
    useEffect(()=>{
        const words = document.querySelectorAll(".word");
        words.forEach(word => {
            const letters = word.textContent ? word.textContent.split(""): [];
            word.textContent = "";
            letters.forEach(letter => {
                const span = document.createElement("span");
                span.textContent = letter === " " ? "\u00A0" : letter;
                span.className = "letter";
                word.append(span);
            });
        });

        let currentWordIndex = 0;
        const maxWordIndex = words.length - 1;
        (words[currentWordIndex] as HTMLElement).style.opacity = "1";

        const rotateText = () => {
        const currentWord = words[currentWordIndex];
        const nextWord =
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
    },[])

    return (
        <div className="rotating-text">
            {data.hero["rotating-text"].map((item, key) => (
                <span key={key} className="word" style={{color:item.color}}>{item.word}</span>
            ))}
        </div>
    )
}