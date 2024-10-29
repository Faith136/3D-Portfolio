/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contac = ({ setFlipEnabled }) => {
  const form = useRef();
  const [message, setMessage] = useState(''); // To handle success or error messages

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9o5enx9', 'template_02eliv5', form.current, {
        publicKey: 'cEPOgoMYK1_DF9skS',
      })
      .then(
        () => {
          setMessage('Your message has been sent successfully!');
          e.target.reset(); // Reset form fields after submission
          setFlipEnabled(true); // Re-enable flipping after form submission
        },
        (error) => {
          setMessage('Failed to send message. Please try again.');
        }
      );
  };

  const handleFocus = () => {
    setFlipEnabled(false); // Disable flipping when form is in focus
  };

  return (
    <div className="h-full page-shadow flex items-center justify-center mb-2">
      <div className="w-full max-w-md p-2">
        <div className="text-center pb-6">
          <h1 className="text-3xl">Contact Me!</h1>
          <p className="text-gray-300">Fill up the form below to send us a message.</p>
        </div>

        {/* Form to handle input, onFocus disables flipping */}
        <form ref={form} onSubmit={sendEmail} onFocus={handleFocus}>
          <input
            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Name"
            name="user_name"
            required
          />

          <input
            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />

          <input
            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Subject"
            name="_subject"
            required
          />

          <textarea
            className="shadow mb-4 appearance-none border w-full py-2 px-3 text-gray-700 rounded leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter message"
            rows="4"
            name="message"
            required
          ></textarea>

          <div className="text-center">
            <input
              className="shadow bg-primary hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Send ➤"
            />
          </div>
        </form>

        {/* Display success or error message */}
        {message && <p className="text-green-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Contac;


  /**
   * YOUR_SERVICE_ID="service_9o5enx9"
YOUR_TEMPLATE_ID="template_02eliv5"
YOUR_PUBLIC_KEY="cEPOgoMYK1_DF9skS"
   */