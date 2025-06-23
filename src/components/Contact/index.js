import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
      _subject: `New Message from Portfolio - ${form.current.name.value}`,
    };
    
    const endpoint = 'https://formsubmit.co/ajax/vamsichiguruwada@gmail.com';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success === "true") {
        setSubmissionStatus('success');
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error(error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact Me'.split('')}
              idx={15}
            />
          </h1>
          {/* <p>
            I am interested in freelance opportunities - especially on ambitious
            projects. However, if you have any other requests or questions,
            don't hesitate to contact me using the form below.
          </p> */}
          <div className="contact-form">
            {submissionStatus === 'success' ? (
              <div className="success-message">
                <h2>Thank you for your message!</h2>
                <p>I will get back to you shortly.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input placeholder="Email" type="email" name="email" required />
                  </li>
                  <li>
                    <input placeholder="Subject" type="text" name="subject" required />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input
                      type="submit"
                      className="flat-button"
                      value={isSubmitting ? 'SENDING...' : 'SEND'}
                      disabled={isSubmitting}
                    />
                  </li>
                </ul>
                {submissionStatus === 'error' && (
                  <p className="error-message">
                    Failed to send message. Please try again later.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
        
        {/* --- Updated Address Information --- */}
        <div className="info-map">
          Vamsi Krish Chiguruwada
         
          <br />
          Boston, MA 02145 <br /> 
          United States <br />
          <br />
          <span>vamsichiguruwada@gmail.com</span>
        </div>
        
        {/* --- Updated Map Coordinates --- */}
        <div className="map-wrap">
          <MapContainer center={[42.387959, -71.103088]} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.387959, -71.103088]}>
              <Popup>Vamsi is based in Boston. Let's connect!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;