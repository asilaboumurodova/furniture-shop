import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about__content">
          <h1 className="about-title">About Us</h1>
          <div className="about__items">
            <div className="about__item">
              <p className="about__item-text">experiences</p>
              <h2 className="about__item-title">
                We Provide You The Best Experience
              </h2>
              <p className="about__item-descr">
                You don’t have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </p>
            </div>
            <div className="about__item">
              <p className="about__item-text">materials</p>
              <h2 className="about__item-title">
                Very Serious Materials For Making Furniture
              </h2>
              <p className="about__item-descr">
                Because panto was very serious about designing furniture for our
                environment, using a very expensive and famous capital but at a
                relatively low price
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
