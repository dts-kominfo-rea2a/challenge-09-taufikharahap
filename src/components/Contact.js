// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ name, phone, email, photo }) => {
    return (
        <div className="card">
            <div className="image">
                <img
                    alt="gambar kucing"
                    src={photo}
                    style={{ width: "100px", borderRadius: "50%" }}
                />
            </div>
            <div className="contact">
                <p className="name">{name}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Contact;
