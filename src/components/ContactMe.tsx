'use client'

import { useEffect } from "react"
import { Input } from "./ui/input"

export default function ContactMe() {
    useEffect(()=>{
        document.getElementById("contact-form")?.addEventListener("submit", async function(event){
            event.preventDefault()

            const form = event.target as HTMLFormElement;
            try {
                const formData = new FormData(form);

                const response = await fetch("https://formspree.io/f/mgvayore", {
                    method: "POST",
                    body: formData,
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    alert("Thanks! I will read your message very soon!");
                    form.reset(); // Clear the form
                }
            } catch (error) {
               console.log(error)
            }
        })
    },[])

    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form action="https://formspree.io/f/mgvayore" method="POST" id="contact-form">
                <Input className="w-full" type="text" name="name" placeholder="Your Name" required/>
                <Input type="email" name="email" placeholder="Your Email" required />
                <Input type="textarea" useTextArea={true} name="message" placeholder="Your Message"></Input>
                <button 
                    type="submit"
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                >
                    Send
                    <BottomGradient />
                </button>
            </form>
        </section>
        )
}

const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
};