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
                  . Looking for job opportunities, new challenges and gaining knowledge from experts.
                </span>
              </p>
            )}
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
