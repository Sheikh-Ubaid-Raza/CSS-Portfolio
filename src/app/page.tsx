import Image from "next/image";

export default function Home() {
  return (
    <div className="main-div">

      <div id="header">
        <div className="container">
          <nav className="navbar">
            <Image src="/logo.png" alt="Logo" width={200} height={200} className="mylogo"></Image>
            <ul className="nav-links">
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
               </nav>
          <Image src="/myimg.jpg" alt="Profile-Pic" width={300} height={300} className="profile-img"></Image>
          <div className="header-text">
            <p>Web Developer</p>
            <h1>Hy, I am <span>Ubaid Raza</span>,<br /> from Pakistan</h1>
          </div>
        </div>
      </div>

      {/* <!-- --------------------About---------------- -->  */}
      
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <Image src="/mypic.jpg" alt="My-Pic" width={300} height={500}></Image>
            </div>
            <div className="about-col-2">
              <h2 className="sub-title">About me</h2><br />

              <p className="aboutme">Hi, I am Ubaid, proficient a web development with skills in HTML, CSS, JavaScript, and TypeScript, learned through Giaic training. I am now expanding my expertise with Next.js and React.js. As a newcomer to the field, I am excited to apply my knowledge, learn from others, and take on new challenges. I am sharing my journey, projects, and experiments in this portfolio, and I am looking forward to connecting with others and growing together in the web development community.</p><br />
              <div className="tab-titles">
                <p className="tab-links active-link">Skills</p>
              </div>
              <div className="tab-contents active-tab" id="skills">
                <ul>
                  <li> <span>Web Development</span><br />Frontend Website Development </li>
                  <li> <span>Web Designing</span><br />Frontend Website Designing </li>
                  <li> <span>Technologies</span><br /> Proficient in HTML,CSS and Javascript/Typescript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- --------------------------services------------------------------- --> */}

      <div id="services">
        <div className="container">
          <h2 className="sub-title">My Services</h2><br />
          <div className="services-list">
            <div>
              <Image src="/web-dev.png" alt="Web Development" width={80} height={75} className="icon"></Image>
              <h2>Web Development</h2>
              <p>Crafting responsive and interactive web experiences with expertise in HTML, CSS, JavaScript, and TypeScript. Building dynamic solutions with Next.js and React.js, delivering high-quality web development services with attention to detail.</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <Image src="/images.png" alt="Frontend Development" width={100} height={75} className="icon"></Image>
              <h2>Frontend Development</h2>
              <p>Building fast, responsive, and interactive frontend experiences with expertise in JavaScript, TypeScript, and frameworks like Next.js and React.js.</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <Image src="/web-des.png" alt="Web Design" width={80} height={80} className="icon"></Image>
              <h2>Web Design</h2>
              <p>Creating visually stunning and user-friendly web designs that captivate audiences. Bringing ideas to life with custom HTML, CSS, and JavaScript solutions, tailored to elevate your online presence.</p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ---------------------------------portfolio---------------------------- --> */}

      <div id="portfolio">
        <div className="container">
          <h2 className="sub-title">My Work</h2><br />
          <div className="work-list">
            <div className="work">
              <Image src="/Capture.PNG" alt="1st Project" width={300} height={400}></Image>
              <div className="layer">
                <h3>HTML-CSS Projects</h3>
                <p>This is my HTML-CSS Projects.Which I made when I was learning HTML and CSS.</p>
                <a href="https://html-journey.netlify.app/" target="_blank">
                  <span>&#8599;</span></a>
              </div>
            </div>
            <div className="work">
              <Image src="/simple-calculator.jpg" alt="2nd Project" width={300} height={400}></Image>
              <div className="layer">
                <h3>Digital Calculator</h3>
                <p>This is the Simple Calculator.Made By using HTML,CSS and JavaScript.</p>
                <a href="https://ubaidcalculator.netlify.app/" target="_blank"> <span>&#8599;</span></a>
              </div>
            </div>
            <div className="work">
              <Image src="/clock.jpg" alt="3rd Project" width={300} height={400}></Image>
              <div className="layer">
                <h3>Digital Clock</h3>
                <p>This is the Digital Clock.Made By using HTML,CSS and JavaScript.</p>
                <a href="https://ubaidclock.netlify.app/" target="_blank"> <span>&#8599;</span></a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">See more</a>
        </div>
      </div>

      {/* <!-- --------------------contact------------------------------- --> */}

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <a href="mailto:ubaidkamal62@gmail.com" target="_blank" className="links"><p><i className="fa-solid fa-envelope"></i>ubaidkamal62@gmail.com</p></a>
              <a href="tel:+923410258688" target="_blank" className="links"><p> <i className="fa-solid fa-phone"></i>03410258688</p></a>
              <div className="social-icons flex mt-6">
                <a href="https://github.com/Sheikh-Ubaid-Raza" target="_blank" className="botton">
                Github</a>
                <a href="https://www.linkedin.com/in/ubaid-raza-8764332b9/?trk=contact-info" target="_blank" className="botton">
                Linkedin</a>
              </div>
              <a href="/cv.pdf" target="_blank" download className="btn btn2">Dowload CV</a>
            </div>
            <div className="contact-right">
              <form>
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea name="Message" rows={5} placeholder="Your Message"></textarea>
                <button type="submit" className="btn btn2">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright Ubaid.Made with <i className="fa-solid fa-heart"></i> Html,Css and Javascript.</p>
        </div>
      </div>
    </div>
  )
}