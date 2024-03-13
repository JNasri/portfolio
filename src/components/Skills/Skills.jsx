import React from "react";

const Skills = ({ lang }) => {
  return (
    <div className="container">
      <h1 className="display-5 text-center pt-3" data-aos="fade-right">
        {lang === "ar" ? "مهاراتي" : "Technical Skills"}
      </h1>
      <hr className="w-50 mx-auto border border-dark" />

      <div
        className="pt-3 row flex-column-reverse flex-md-row justify-content-between align-items-center mb-2"
        id="education"
      >
        <div className="col-md-6 order-lg-1" data-aos="fade-right">
          <p className="h5 mt-2">
            {lang === "ar" ? "الواجهات الأمامية" : "Front End"}
          </p>
          <hr className="mt-0" />
          <div className="front-end text-center pb-2">
            <a
              href="https://en.wikipedia.org/wiki/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                alt="HTML5"
                height="60"
              />
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                alt="CSS3"
                height="60"
              />
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                alt="JavaScript"
                height="60"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                alt="React"
                height="60"
              />
            </a>
            <a
              href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
                alt="Bootstrap"
                height="60"
              />
            </a>
            <a
              href="https://www.tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
                alt="Tailwind CSS"
                height="60"
              />
            </a>
          </div>
          <p className="h5 mt-2">
            {lang === "ar" ? "الواجهات الخلفية" : "Back End"}
          </p>
          <hr className="mt-0" />
          <div className="back-end text-center pb-2">
            <a href="https://www.java.com/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
                alt="Java"
                height="60"
              />
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                alt="JavaScript"
                height="60"
              />
            </a>
            <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
                alt="Node.js"
                height="60"
              />
            </a>
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
                alt="Express.js"
                height="60"
              />
            </a>
            <a href="https://www.php.net/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/php-original.svg"
                alt="PHP"
                height="60"
              />
            </a>
            <a href="https://laravel.com/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg"
                alt="Laravel"
                height="60"
              />
            </a>
            <a href="https://www.python.org/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/python-original.svg"
                alt="Python"
                height="60"
              />
            </a>
            <a href="https://jupyter.org/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png"
                alt="Python"
                height="60"
              />
            </a>
          </div>
          <p className="h5 mt-2">
            {lang === "ar" ? "نظم قواعد البيانات" : "DBMS"}
          </p>
          <hr className="mt-0" />
          <div className="databases text-center pb-2">
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
                alt="MySQL"
                height="70"
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
                alt="MongoDB"
                height="70"
              />
            </a>
            <a
              href="https://www.firebase.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ margin: "10px" }}
                src="https://profilinator.rishav.dev/skills-assets/firebase.png"
                alt="MongoDB"
                height="70"
              />
            </a>
          </div>
          <p className="h5 mt-2">
            {lang === "ar" ? "المنصات السحابية" : "Cloud Service Providers"}
          </p>
          <hr className="mt-0" />
          <div className="cloud text-center mb-2">
            <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
              <img
                style={{ margin: "10px" }}
                src="https://logohistory.net/wp-content/uploads/2023/06/AWS-Emblem.png"
                alt="AWS"
                height="70"
              />
            </a>
            <a
              href="https://cloud.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ margin: "10px" }}
                src="https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png"
                alt="AWS"
                height="70"
              />
            </a>
          </div>
        </div>
        <div className="col-md-6 order-lg-2" data-aos="fade-right">
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + "/skills.gif"}
            alt="My GIF"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
