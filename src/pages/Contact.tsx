
import { useState } from 'react';

const contactDetails = [
  {
    icon: '📍',
    title: 'OUR OFFICE',
    text: '123 Tech Avenue, Innovation City, Connectiville 45678',
  },
  {
    icon: '✉️',
    title: 'EMAIL US',
    text: 'hello@apipro.com',
  },
  {
    icon: '📞',
    title: 'CALL US',
    text: '+1 (555) 123-4567',
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (No real backend)');
    setForm({ fullName: '', workEmail: '', company: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a technical question, a sales inquiry, or just want to chat? We'd love to hear from you.
        </p>
        <div className="contact-cards">
          {contactDetails.map(({ icon, title, text }) => (
            <div className="contact-card" key={title}>
              <div className="contact-card-icon">{icon}</div>
              <div className="contact-card-title">{title}</div>
              <div className="contact-card-text">{text}</div>
            </div>
          ))}
        </div>
        <div className="contact-form-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="workEmail"
              placeholder="Work Email"
              value={form.workEmail}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name (optional)"
              value={form.company}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
