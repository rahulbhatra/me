import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const form = useRef();
    

    const sendMail = async (e) => {
        e.preventDefault();


        emailjs.send("service_gbnrtpp","template_dimtd15",{
            subject: form.current.subject.value,
            name: 'Name: ' + form.current.name.value,
            email: 'Email: ' + form.current.email.value,
            message: 'Message: ' + form.current.message.value,
        }, 'user_lQ5VXo0W1E0RIUhYJ0qvN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });;

        e.target.reset();

    }

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Me</h2>
                    <h3 className="section-subheading text-muted">
                        Enter the details and Keep in touch so we can discuss possbilities of new Technology.
                    </h3>
                </div>
                <div className="text-center">
                    <form ref={form} onSubmit={sendMail} className="row">
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Enter Name" required/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Enter Email" required/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="subject" placeholder="Enter Subject" required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <textarea type="textarea" className="text-area form-control" id="message" placeholder="Enter Message" required>
                                </textarea>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <input class="btn btn-success" type="submit" value="Send Message" />
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        </section>
    );
};

export default ContactMe;