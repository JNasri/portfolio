import React from "react";

const Experience = ({ lang }) => {
  return (
    <div className="container pb-5 pt-1" data-aos="fade-right">
      <h1 className="display-5 text-center pt-3">
        {lang === "ar" ? "خبراتي" : "Experience"}
      </h1>
      <hr className="w-50 mx-auto border border-dark" />
      <div className="mb-5" id="experience">
        <div
          className="pt-3 row justify-content-between align-items-center"
          id="profile"
        >
          <div className="col-md-6 " data-aos="fade-right">
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/workexp.gif"}
              alt="My GIF"
            />
          </div>
          <div className="col-md-6" data-aos="fade-right  ">
            <div style={{ lineHeight: "2" }}>
              {lang === "ar" ? (
                <>
                  <p className="h4">
                    💼 متدرب في تطوير المواقع{" "}
                    <a
                      href="https://ugc.production.linktr.ee/b9b01b9b-fa9a-4b42-b0dc-06f0eee875e6_-------------------.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                  <div className="h4">
                    🏢 شركة وادي مكة
                    <br />
                    <div className="">
                      <img
                        src="https://wadim.wmitproj.com/wp-content/uploads/2023/06/%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D9%81%D8%A9.png"
                        alt=""
                        width={150}
                      />{" "}
                      <img
                        width={130}
                        src={process.env.PUBLIC_URL + "/logo.png"}
                        alt="My GIF"
                      />
                    </div>
                    <hr />
                  </div>
                  <div className="h6" style={{ lineHeight: "2" }}>
                    عملت كمبرمج على إطار عمل لارافيل لتطوير موقع{" "}
                    <a href="http://IQRAA.SA" target="_blank" rel="noreferrer">
                      Iqraa.sa
                    </a>
                    . كانت وظيفتي تتمحور حول تصميم واجهات المستخدم، كتابة الكود
                    المسؤول عن التنفيذ، وربط الموقع مع قاعدة البيانات باستخدام
                    API.
                    <br />
                    🛢️ التقنيات المستخدمة:
                    <div>
                      <img
                        style={{ margin: "10px" }}
                        src="https://cdn3.iconfinder.com/data/icons/web-design-set/64/file-icon-html-css-end-front-development-icons-developer-format-512.png"
                        alt="PHP"
                        height="80"
                      />
                      <img
                        style={{ margin: "10px" }}
                        src="https://profilinator.rishav.dev/skills-assets/php-original.svg"
                        alt="PHP"
                        height="80"
                      />
                      <img
                        style={{ margin: "10px" }}
                        src="https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg"
                        alt="LARAVEL"
                        height="70"
                      />
                      <img
                        style={{ margin: "10px" }}
                        src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
                        alt="MySQL"
                        height="80"
                      />
                      <img
                        style={{ margin: "10px" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                        alt="Bootstrap"
                        height="70"
                      />
                      <img
                        style={{ margin: "10px" }}
                        src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
                        alt="Git"
                        height="70"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="h4">
                    💼 Web Developer trainee{" "}
                    <a
                      href="https://ugc.production.linktr.ee/b9b01b9b-fa9a-4b42-b0dc-06f0eee875e6_-------------------.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </a>
                  </p>
                  <div className="h4">
                    🏢 Wadi Makkah Knowledge
                    <br />
                    <div className="">
                      <img
                        src="https://wadim.wmitproj.com/wp-content/uploads/2023/06/%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D9%81%D8%A9.png"
                        alt=""
                        width={150}
                      />{" "}
                      <img
                        width={130}
                        src={process.env.PUBLIC_URL + "/logo.png"}
                        alt="My GIF"
                      />
                    </div>
                    <hr />
                  </div>
                  <div className="h6" style={{ lineHeight: "2" }}>
                    I worked as a PHP Laravel Full Stack Developer on{" "}
                    <a href="http://IQRAA.SA" target="_blank" rel="noreferrer">
                      Iqraa.sa
                    </a>{" "}
                    website. My job was to create the user interfaces for the
                    front-end, write the controller code on the back-end, and
                    manage the database connectivity using the API. <br />
                    🛢️ Tech Stack:
                    <div>
                      <img
                        style={{ margin: "10px" }}
                        src="https://cdn3.iconfinder.com/data/icons/web-design-set/64/file-icon-html-css-end-front-development-icons-developer-format-512.png"
                        alt="PHP"
                        height="50"
                      />
                      <img
                        style={{ margin: "10px" }}
                        src="https://profilinator.rishav.dev/skills-assets/php-original.svg"
                        alt="PHP"
                        height="50"
                      />
                      <img
                        style={{ margin: "10px" }}
                        src="https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg"
                        alt="LARAVEL"
                        height="50"
                      />
                      <img
                        style={{ margin: "10px" }}
                        src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
                        alt="MySQL"
                        height="50"
                      />
                      <img
                        style={{ margin: "10px" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                        alt="Bootstrap"
                        height="50"
                      />
                      <img
                        style={{ margin: "10px" }}
                        src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
                        alt="Git"
                        height="50"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
