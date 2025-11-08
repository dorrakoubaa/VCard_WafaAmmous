import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>If you have any questions or would like to discuss a project, feel free to reach out!</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div className="contact-info">
                <h3>Other Ways to Reach Me:</h3>
                <p>Email: ammouswafa@gmail.com</p>
                <p>Phone: +216 53 243 559</p>
            </div>
        </div>
    );
};

export default Contact;