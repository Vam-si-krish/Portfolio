import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import resumePdf from './VamsiKrishnaChiguruwadaResume-org.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoadError(false);
  };

  const onDocumentLoadError = (error) => {
    console.error("Error while loading PDF!", error);
    setLoadError(true);
  };

  return (
    <>
      {/* The Download button is now outside the main page container */}
      <a href={resumePdf} download="Vamsi_Chiguruwada_Resume.pdf" className="download-cv-button">
        <FontAwesomeIcon icon={faDownload} />
        <span>Download CV</span>
      </a>

      <div className="container resume-page">
        {loadError ? (
          <div className="error-message">
            <p>Failed to load PDF.</p>
          </div>
        ) : (
          <Document
            file={resumePdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            className="pdf-document"
            loading={<Loader type="pacman" active />}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
        )}
      </div>
    </>
  );
};

export default Resume;