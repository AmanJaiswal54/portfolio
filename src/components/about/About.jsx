import "./About.css";
import AboutMe from "./../../img/aboutMe.jpg";
import award from "./../../img/logo192.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={AboutMe} alt="AboutMe" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          I enjoy creating things that live on the internet. My interest in web development started back in 2016.<br></br>

          Fast-forward to today, and I’ve had the privilege of working at a huge corporation and a start-up. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.<br></br>
        </p>

        <p className='about-subtitle' style={{ textTransform: 'uppercase' }}>Here are a few technologies I’ve been working with recently:</p>
        <p className='about-subtitle' style={{ color: '#59b256', fontWeight: 'bold' }}> ▹Javascript  ▹ReactJS  ▹Redux  ▹Styled-Components  ▹HTML  ▹CSS  ▹Data Structure and Algorithm</p>
        {/* <div className="about-award">
          <img src={award} alt="award" className="about-award-img" />
          <div className="about-award-texts">
            <h4 className="about-award-title">International Design </h4>
            <p className="about-award-desc">
              To create a production build, use npm run build.
            </p>
          </div>
        </div> */}
      </div>
    </div >
  );
}
export default About;
