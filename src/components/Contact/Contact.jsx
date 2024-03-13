import React from "react";

const Contact = ({ lang }) => {
  return (
    <div className="container" data-aos="fade-right">
      <h1 className="display-5 text-center pt-4">
        {lang === "ar" ? "تواصل معي!" : "Get in touch!"}
      </h1>
      <hr className="w-50 mx-auto border border-dark" />
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
                <label className="h4" htmlFor="nameOfContact">
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
                <label className="h4" htmlFor="emailOfContact">
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
                <label className="h4" htmlFor="messageOfContact">
                  {lang === "ar" ? "رسالتك:" : "Message:"}
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="messageOfContact"
                  rows="6"
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
