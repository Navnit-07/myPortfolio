import React from "react";
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className="bg-gray-100 py-16 px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-bold mb-4">Contact Me</h2>
        <p className="mb-8 text-gray-600">
          Have a question or want to work together? Fill out the form below.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#695aa6] text-white py-2 px-4 rounded-lg hover:bg-[#5a4c91] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
