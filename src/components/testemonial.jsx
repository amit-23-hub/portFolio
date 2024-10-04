import React from "react";
import "./testimonial.css";
import { FaTwitter, FaPinterest, FaFacebook, FaDribbble } from "react-icons/fa";

const TestiMonial = () => {
  const message = `There are many variations of passages of Lorem Ipsum available but the
      majority have suffered alteration in some injected humour.`;
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="text-center col-md-12">
            <h2 className="section-title">TestiMonial</h2>
          </div>
          <div className="team-col">
            <div className="team-item">
              
              <h3>SURAJ GUPTA </h3>
              <div className="team-info">
                <p>Service-Now Developer at ACIES</p>
              </div>
              <p>
              Amit has an exceptional ability to turn complex ideas into practical solutions. He delivered our project on time with remarkable attention to detail and functionality. Highly recommended!
              </p>

              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="pinterest">
                    <FaPinterest />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="dribble">
                    <FaDribbble />
                  </span>
                </li>
              </ul>
            </div>
            <div className="team-item">
              
              <h3>AADARSH PANDEY</h3>
              <div className="team-info">
                <p>Developer at HCL </p>
              </div>
              <p>
              Amit's dedication and problem-solving skills have greatly contributed to the success of project. He has a keen eye for detail and a deep understanding of modern technologies.
              </p>

              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="pinterest">
                    <FaPinterest />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="dribble">
                    <FaDribbble />
                  </span>
                </li>
              </ul>
            </div>
            <div className="team-item">
              <h3>SATYANSH SINGH</h3>
              <div className="team-info">
                <p>TCS CodeVita Global Rank - 72</p>
              </div>
              <p>
              We were thrilled with the results Amit delivered. His ability to translate our requirements into a polished, user-friendly application exceeded our expectations.
              </p>

              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="pinterest">
                    <FaPinterest />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="dribble">
                    <FaDribbble />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiMonial;
