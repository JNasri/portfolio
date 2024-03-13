import React from "react";

const Footer = ({ lang }) => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-4  border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-muted">
            {lang === "ar"
              ? "© 2024 Yusof.Click - جميع الحقوق محفوظة."
              : "© 2024 Yusof.Click - All rights reserved."}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
