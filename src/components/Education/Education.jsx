import React from "react";

const Education = ({ lang }) => {
  return (
    <div className="container">
      <h1 className="display-5 text-center pt-3" data-aos="fade-right">
        {lang === "ar" ? "شهاداتي" : "Certifications"}
      </h1>
      <hr className="w-50 mx-auto border border-dark" />

      <div
        className="pt-3 row flex-column-reverse flex-md-row justify-content-between align-items-center"
        id="education"
      >
        <div className="col-md-6 order-lg-1" data-aos="fade-right">
          <div style={{ lineHeight: "2" }}>
            {lang === "ar" ? (
              <>
                <>
                  <p className="h4">
                    🎓 بكالوريوس في علوم الحاسب{" "}
                    <a
                      href="https://ugc.production.linktr.ee/aa7e52a8-ec3f-43e8-8952-400ca35967c6_------------.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                  <p className="h5">⭐ ممتاز مع مرتبة الشرف، معدل 3.9/4.0</p>
                  <p className="h6">🏛️ جامعة أم القرى</p>
                  <p className="h6">📌 2019 – 2023 | مكة، السعودية</p>
                </>
                <hr />
                <>
                  <p className="h4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
                      alt=""
                      width={35}
                    />{" "}
                    ممارس سحابي معتمد{" "}
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-40b59407-ad86-4dcb-90fb-9741741aa4e0.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                  <p className="h6">🌐 دورة استعدادية لاختبار AWS CCP</p>
                  <p className="h6">🏛️ منصة Udemy</p>
                </>
                <hr />
                <>
                  <p className="h4">
                    🔒أساسيات الأمن الإلكتروني{" "}
                    <a
                      href="https://d1fdloi71mui9q.cloudfront.net/3EZmE2YWQ0eitjxtCNKR_Cyber%20Security.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                  <p className="h6">🌐 دورة لتعلم مبادئ الأمان على الانترنت</p>
                  <p className="h6">🏛️ جامعة أم القرى</p>
                </>
                <hr />
                <>
                  <p className="h4">
                    💻 مخيم تدريب لتطوير المواقع{" "}
                    <a
                      href="https://ugc.production.linktr.ee/f2a3ee34-563c-45aa-a45c-7dae627ce0c5_ustudy-app-dev-certificate.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                  <p className="h6">🌐 دورة مكثفة منتهية بمشروع نهائي</p>
                  <p className="h6">🏛️ منصة UStudy </p>
                </>
              </>
            ) : (
              <>
                <>
                  <p className="h4">
                    🎓 Bachelor's Degree in Computer Science{" "}
                    <a
                      href="https://ugc.production.linktr.ee/aa7e52a8-ec3f-43e8-8952-400ca35967c6_------------.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                  <p className="h5">
                    ⭐ Excellent with first honor, GPA of 3.9 / 4.0
                  </p>
                  <p className="h6">🏛️ Umm Al-Qura University</p>
                  <p className="h6">📌 2019 – 2023 | Mecca, Saudi Arabia</p>
                </>
                <hr />
                <>
                  <p className="h4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
                      alt=""
                      width={35}
                    />{" "}
                    Certified cloud practitioner{" "}
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-40b59407-ad86-4dcb-90fb-9741741aa4e0.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                  <p className="h6">
                    🌐 Online course to prepare for AWS CCP exam
                  </p>
                  <p className="h6">🏛️ Udemy Platform</p>
                </>
                <hr />
                <>
                  <p className="h4">
                    🔒 Basics of Cyber Security{" "}
                    <a
                      href="https://d1fdloi71mui9q.cloudfront.net/3EZmE2YWQ0eitjxtCNKR_Cyber%20Security.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                  <p className="h6">
                    🌐 Learn fundamentals of internet security
                  </p>
                  <p className="h6">🏛️ Umm Al-Qura University</p>
                </>
                <hr />
                <>
                  <p className="h4">
                    💻 Application Development Bootcamp{" "}
                    <a
                      href="https://ugc.production.linktr.ee/f2a3ee34-563c-45aa-a45c-7dae627ce0c5_ustudy-app-dev-certificate.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                  <p className="h6">🌐 Project-based react building course</p>
                  <p className="h6">🏛️ UStudy Platform</p>
                </>
              </>
            )}
          </div>
        </div>
        <div className="col-md-6 order-lg-2" data-aos="fade-right">
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + "/education.gif"}
            alt="My GIF"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
