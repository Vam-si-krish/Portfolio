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

    const formData = new FormData(e.target);
    const ajaxEndpoint = 'https://formsubmit.co/ajax/vamsichiguruwada@gmail.com';

    try {
      const response = await fetch(ajaxEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      const result = await response.json();

      if (result.success === 'true') {
        setSubmissionStatus('success');
      } else {
        // This is where we catch the specific activation error from FormSubmit
        if (result.message && result.message.toLowerCase().includes('activation')) {
          const activate = window.confirm(
            "This form needs a one-time activation. Click OK to be redirected and complete a CAPTCHA to activate your email."
          );
          if (activate) {
            // If user agrees, trigger the standard HTML form submission for activation
            e.target.submit();
          }
        } else {
          // Handle all other errors
          throw new Error(result.message || 'Form submission failed');
        }
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
              // This form has both the standard `action` for the fallback,
              // and the `onSubmit` for the JavaScript method.
              <form
                ref={form}
                onSubmit={handleSubmit}
                action="https://formsubmit.co/vamsichiguruwada@gmail.com"
                method="POST"
              >
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
                  <li><input
                    type="hidden"
                    name="_subject"
                    value={`Portfolio Contact: ${form.current?.subject.value || ''} - from ${form.current?.name.value || ''}`}
                  /></li>
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
        <div className="info-map">
          Vamsi Krishna Chiguruwada
          <br />

          Boston, MA 02145 <br />
          United States <br />
          <br />
          <span>vamsi@vamsikrish.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[42.387959, -71.103088]} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.387959, -71.103088]}>
              <Popup>Vamsi is based in Somerville. Let's connect!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Contact;