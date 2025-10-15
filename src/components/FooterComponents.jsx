import React from "react";

const FooterComponents = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto shadow-lg">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <span className="mb-2 mb-md-0">
          © 2025 smhilal. All rights reserved.
        </span>
        <div>
          {/* Optional social links */}
          <a
            href="#"
            className="text-white me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Website
          </a>
          <a
            href="#"
            className="text-white me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Contact
          </a>
          <a
            href="#"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐦 Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponents;
