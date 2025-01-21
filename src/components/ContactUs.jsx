import React, { useState } from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactUs = ({ contactRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [feedback, setFeedback] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFeedback('Please fill out all fields.');
      return;
    }

    // Map the form data to EmailJS template variables
    const templateParams = {
      to_name: "Ujjwal Srivastava", // Your name or the recipient's name
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS IDs
    emailjs.send('service_zfbrp9c', 'template_lj6tt7i', templateParams, 'hxUht8MA2FmoRKNQF')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        toast.success('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset the form
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        toast.error('Failed to send your message. Please try again.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div ref={contactRef} className="flex flex-col items-center justify-center gap-20 px-10 py-36 bg">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-bold">Get In Touch</h1>
        <p className="lg:text-xl text-gray-500">
          Have a project in mind? Let's discuss how I can help.
        </p>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="flex-1 px-4 py-2 lg:text-xl"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="flex-1 px-4 py-2 lg:text-xl"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="flex-1 px-4 py-2 lg:text-xl"
        />
        <button
          type="submit"
          className="lg:text-lg py-2 px-4 bg-black text-white rounded-lg hover:opacity-70 transition-all duration-150"
        >
          Send Message
        </button>
        {feedback && <p className="text-red-500 mt-2">{feedback}</p>}
      </form>
      <div className="text-4xl flex gap-8">
        <button
          onClick={() => {
            window.open("https://instagram.com/ujjwallsrivastavaa", "_blank");
          }}
        >
          <FaSquareInstagram />
        </button>
        <button
          onClick={() => {
            window.open(
              "https://www.facebook.com",
              "_blank"
            );
          }}
        >
          <FaFacebookSquare />
        </button>
        <button
          onClick={() => {
            window.open("https://x.com/ujjwalsri29", "_blank");
          }}
        >
          <FaSquareXTwitter />
        </button>
        <button
          onClick={() => {
            window.open("https://github.com/ujjwallsrivastavaa", "_blank");
          }}
        >
          <FaGithubSquare/>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
