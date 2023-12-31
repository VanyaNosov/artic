import Hero from "../sections/Hero.tsx";
import Contact from "../sections/Contact.tsx";
import { useEffect } from "react";


const Contacts = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    })
}, [])

  return (
    <main>
      <Hero
          title={'contacts.title'}
          text={'contacts.text'}
          subtext={'contacts.subtext'}
      />
      <Contact />
    </main>
  )
}

export default Contacts
