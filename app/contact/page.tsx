import React from "react";
import Hero from "../components/hero";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <div>
      <Hero
        heading="Let's Connect!"
        message="Feel free to reach out for collaborations, inquiries, and questions, including student positions and internship opportunities."
      />
      <ContactInfo />
    </div>
  );
};

export default Contact;
