import React from "react";
import "./Projects.css";

const Projects = ({ lang }) => {
  return (
    <div className="container" data-aos="fade-right">
      <h1 className="display-5 text-center pt-4">
        {lang === "ar" ? "مشاريعي" : "Projects"}
      </h1>
      <hr className="w-50 mx-auto border border-dark" />
      <div id="projects">
        <div
          className="row justify-content-between align-items-center"
          id="profile"
        >
          <div className="col-md-6" data-aos="fade-right">
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/projectsgif.gif"}
              alt="My GIF"
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="card-group mx-auto">
              <div className="card bg-dark text-white mx-2">
                <img
                  className="card-img-top"
                  src={process.env.PUBLIC_URL + "/theReactStore.png"}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    {lang === "ar"
                      ? "متجر رياكت الإلكتروني"
                      : "The React Store"}
                  </h5>
                  <hr />
                  <p className="card-text">
                    {lang === "ar"
                      ? "متجر إلكتروني تجريبي تم عمله لتعلم إطار عمل رياكت. يستخدم الموقع تقنية ريدكس لإدارة المحتوى بالإضافة إلى العديد من تقنيات رياكت."
                      : "Clone website as an Ecommerce store made for the purpose of learning react. It uses redux as a state manager, most react hooks, and the router-dom."}{" "}
                    <a
                      href="https://soft-tanuki-d1e696.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                </div>
                <div className="card-footer bg-dark d-flex justify-content-around">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                    height="50"
                    alt=""
                  />
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/redux-original.svg"
                    height="50"
                    alt=""
                  />
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
                    height="50"
                    alt=""
                  />
                </div>
              </div>
              <div className="card bg-dark text-white border mx-2">
                <img
                  className="card-img-top"
                  src={process.env.PUBLIC_URL + "/ZeroTaxi.png"}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {lang === "ar"
                      ? "تطبيق زيرو تاكسي"
                      : "Zero Taxi Applicatoin"}
                  </h5>
                  <hr />
                  <p className="card-text">
                    {lang === "ar"
                      ? "تطبيق على هواتف الأندرويد لنظام ربط السائقين مع العملاء تم عمله كمشروع تخرجي من الجامعة باستخدام الجافا وأندرويد ستوديو."
                      : "Andorid Taxi Dispatching system made as an application for my graduation project. It is used to link drivers with passengers."}{" "}
                    <a
                      href="https://youtu.be/2sX5OLfnBm8"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                </div>
                <div className="card-footer bg-dark d-flex justify-content-around">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/android-original-wordmark.svg"
                    height="50"
                    alt=""
                  />
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
                    height="50"
                    alt=""
                  />
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/firebase.png"
                    height="50"
                    alt=""
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Google_Cloud_Console_logo.png"
                    height="50"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
