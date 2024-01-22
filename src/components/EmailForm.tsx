import { render } from "@react-email/render";
import { useState } from "react";


const EmailForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    try {
      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: document.getElementById("email"),
          subject: document.getElementById("subject"),
          text: document.getElementById("message"),
        }),
      });
      const data = await res.json();
    } catch (e) {
      console.error(e);
    }
  };

  return (<h1>hola</h1>);
};
export default EmailForm;