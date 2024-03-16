import React from "react";

const Contact = ({ lang }) => {
  return (
    <div className="container" data-aos="fade-right">
      <h1 className="display-5 text-center pt-4">
        {lang === "ar" ? "تواصل معي!" : "Get in touch!"}
      </h1>
      <hr className="w-50 mx-auto border border-dark" />
      <div className="d-flex justify-content-center">
        <a
          className="btn btn-lg rounded-circle mx-2"
          style={{ backgroundColor: "#25d366" }}
          href="https://wa.me/966537820352"
          target="_blank"
          rel="noreferrer"
          role="button"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          className="btn btn-lg rounded-circle mx-2"
          style={{ backgroundColor: "#2663b9" }}
          href="mailto:yusof.nasri@outlook.com"
          target="_blank"
          rel="noreferrer"
          role="button"
        >
          <i className="far fa-envelope-open"></i>
        </a>
        <a
          className="btn btn-lg rounded-circle mx-2"
          style={{ backgroundColor: "#55acee" }}
          href="https://t.me/YusofNasri"
          target="_blank"
          rel="noreferrer"
          role="button"
        >
          <i className="fab fa-telegram"></i>
        </a>
        <a
          className="btn btn-lg rounded-circle mx-2"
          style={{ backgroundColor: "#0082ca" }}
          href="https://www.linkedin.com/in/youssefnasri"
          target="_blank"
          rel="noreferrer"
          role="button"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className="btn btn-lg rounded-circle mx-2"
          style={{ backgroundColor: "#333333" }}
          href="https://github.com/JNasri"
          target="_blank"
          rel="noreferrer"
          role="button"
        >
          <i className="fab fa-github" style={{ color: "white" }}></i>
        </a>
      </div>
      <div id="projects">
        <div
          className="row align-items-start justify-content-between"
          id="profile"
        >
          <div className="col-md-6 mb-5" data-aos="fade-right">
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/contact.gif"}
              alt="My GIF"
            />
          </div>
          <div className="col-md-6 mb-5" data-aos="fade-right">
            <form action="https://formspree.io/f/xpzvrvvv" method="POST">
              <div className="form-group my-3">
                <div className="h4">
                  {lang === "ar"
                    ? "أو أرسل لي رسالة فورية:"
                    : "Or send me a quick message:"}
                </div>
                <hr className="w-50" />
                <label className="h5" htmlFor="nameOfContact">
                  {lang === "ar" ? "اسمك:" : "Name:"}
                </label>
                <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Z\s]*$"
                  className="form-control"
                  id="nameOfContact"
                  placeholder={
                    lang === "ar" ? "الاسم / اسم الشركة" : "name / company"
                  }
                  required
                />
              </div>
              <div className="form-group my-3">
                <label className="h5" htmlFor="emailOfContact">
                  {lang === "ar" ? "بريدك الإلكتروني:" : "Email address:"}
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="emailOfContact"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form-group my-3">
                <label className="h5" htmlFor="messageOfContact">
                  {lang === "ar" ? "رسالتك:" : "Message:"}
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="messageOfContact"
                  rows="6"
                  placeholder={lang === "ar" ? "رسالتك..." : "Your message..."}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark py-2 px-5">
                {lang === "ar" ? "إرسال" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
