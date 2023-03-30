
import { FaCode } from "react-icons/fa";
import {FaUserSecret} from "react-icons/fa";



const Html = () => {
    return (
      

<>
  <header>
    <a href="#" className="logo">
      WEBSITE
    </a>
    <nav className="navigation">
      <a href="#services"> Services</a>
      <a href="#Projects"> Projects</a>
      <a href="#Contact"> Contact</a>
    </nav>
  </header>
  <section className="main">
    <div>
      <h2>
        Welcome To My Website
        <br />
        <span>Front End Dev</span>
      </h2>
      <h3>
        I Build Websites For <br /> My Clients
      </h3>
      <a href="#Projects" className="main-btn">
        
        View My Projects
      </a>
      <div className="social-icons">
        <a href="https://www.facebook.com/ramizzarzor1999/">
          
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="https://www.instagram.com/iramiz_/">
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
    </div>
  </section>
  <section className="cards" id="services">
    <h2 className="title"> Services </h2>
    <div className="content">
      <div className="card">
        <div className="icon">
          <i className="fa-solid fa-code" />
        </div>
        <div className="info">
        <FaCode  size={"9rem"}/>
          <h3>Building Variant Websites</h3>
          <p>Establishing ProtoTypes For Website Interface </p>
          <p></p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <i className="fa-solid fa-user-secret" />
        </div>
        <div className="info">
          <FaUserSecret size={"9rem"}/>
          <h3>Information security analyst</h3>
          <p>
            Penetration Testing , Vulnerability Security And Network
            Administrator
          </p>
          <p></p>
        </div>
      </div>
    </div>
  </section>
  <section className="projects" id="Projects">
    <h2 className="title">Projects</h2>
    <div className="content">
      <div className="project-card">
        <div className="project-image">
          <img src="/imgs/logo1.png"/>
          
          <div className="project-info">
            <p className="project-category">Website For A Client</p>
            <strong className="project-title">
              <span>Asaad Naif LTD</span>
              <a href="https://www.naifasaadltd.com/" className="more-details">
                More Details
              </a>
            </strong>
          </div>
          
        </div>
        
      </div>
      <div className="project-card">
        <div className="project-image">
          <img src="/imgs/logo2.png" />
          <div className="project-info">
            <p className="project-category">Website For A Client</p>
            <strong className="project-title">
              <span>Drawshy Hani LTD</span>
              <a
                href="https://www.hanidrawshyltd.com/"
                className="more-details"
              >
                More Details
              </a>
            </strong>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image">
          <img src="/imgs/comingsoon.jpg" />
          <div className="project-info">
            <p className="project-category" />
            <strong className="project-title">
              <span>COMING SOON</span>
              <a href="#" className="more-details">
                More Details
              </a>
            </strong>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="cards-contact" id="Contact">
    <h2>Lets Work Together</h2>
    <div className="content">
      <div className="card">
        <div className="icon">
          <i className="fa-solid fa-phone" />
        </div>
        <div className="info">
          <h3>PHONE</h3>
          <p>+972 0528846695</p>
          <p></p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <i className="fa-solid fa-envelope" />
        </div>
        <div className="info">
          <h3>E-MAIL</h3>
          <p>ramizzarzor1998@gmail.com</p>
          <p></p>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer">
    <p className="footer-title">
      Copyrights @<span>Ramiz Zarzor</span>
    </p>
    <div className="social-icons">
      <a href="https://www.facebook.com/ramizzarzor1999/">
        <i className="fa-brands fa-facebook" />
      </a>
      <a href="https://www.instagram.com/iramiz_/">
        <i className="fa-brands fa-instagram" />
      </a>
    </div>
  </footer>
</>

      
    
    );
}

export default Html;
