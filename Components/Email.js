import React, { useState } from "react";
import styles from "../styles/Email.module.css";
import emailjs from "emailjs-com"; // Import emailjs

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Use EmailJS to send the email
      await emailjs.send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "your_public_key" // Replace with your EmailJS public key
      );

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formcontainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formgroup}>
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="message">How Can We Help You?</label>
          <textarea
            required
            cols={50}
            rows={10}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <button type="submit" className={styles.formsubmitbtn} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
