import React from "react";
import "./Profile.css";

const Profile = ({ lang }) => {
  return (
    <div className="container">
      <h1 className="display-5 text-center pt-3" data-aos="fade">
        {lang === "ar" ? "من أنا؟" : "Profile"}
      </h1>
      <hr className="w-50 mx-auto border border-dark" />
      <div
        className="pb-5 mb-5 row justify-content-between align-items-center"
        id="profile"
      >
        <div className="col-md-6" data-aos="fade-down">
          <p className="display-6">
            {lang === "ar"
              ? "مرحبًا! 👋🏻 أنا يوسف نصري."
              : "Hi! 👋🏻 I'm Youssef Nasri."}
          </p>
          <hr />
          <div className="h5" style={{ lineHeight: "2" }}>
            {lang === "ar" ? (
              <p>
                حديث تخرج في مجال علوم الحاسب. متخصص بتطوير المواقع سواء
                الواجهات الأمامية أو الخلفية وحتى قواعد البيانات. شغوف بالحوسبة
                السحابية وخصوصا منصة⠀
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
                  alt=""
                  width={50}
                />
                <span>
                  {" "}
                  . أتطلع لخوض تجارب جديدة والاستفادة من خبرات الآخرين.
                </span>
              </p>
            ) : (
              <p>
                A fresh computer science graduate specializing in full-stack web
                development and databases. Interested in cloud computing,
                especially⠀
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
                  alt=""
                  width={50}
                />
                <span>
                  {" "}
                  . Looking for new challenges and gaining knowledge from
                  experts.
                </span>
              </p>
            )}
            <div className="d-flex justify-content-start">
              <a
                className="btn btn-lg rounded-circle mx-2"
                style={{ backgroundColor: "#25d366" }}
                href="https://wa.me/966537820352"
                target="_blank"
                role="button"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                className="btn btn-lg rounded-circle mx-2"
                style={{ backgroundColor: "#2663b9" }}
                href="mailto:yusof.nasri@outlook.com"
                target="_blank"
                role="button"
              >
                <i className="far fa-envelope-open"></i>
              </a>
              <a
                className="btn btn-lg rounded-circle mx-2"
                style={{ backgroundColor: "#55acee" }}
                href="https://t.me/YusofNasri"
                target="_blank"
                role="button"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                className="btn btn-lg rounded-circle mx-2"
                style={{ backgroundColor: "#0082ca" }}
                href="https://www.linkedin.com/in/youssefnasri"
                target="_blank"
                role="button"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="btn btn-lg rounded-circle mx-2"
                style={{ backgroundColor: "#333333" }}
                href="https://github.com/JNasri"
                target="_blank"
                role="button"
              >
                <i className="fab fa-github" style={{ color: "white" }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-down">
          <img
            className="img-fluid border-bottom border-2"
            src={process.env.PUBLIC_URL + "/programmer.gif"}
            alt="My GIF"
          />
          <small style={{ fontSize: "10px" }}>
            All Illustrations by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://icons8.com/illustrations/author/lZpGtGw5182N"
            >
              Elisabet Guba
            </a>{" "}
            from{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://icons8.com/illustrations"
            >
              Ouch
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Profile;
