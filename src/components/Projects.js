import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Button} from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { AlignCenter } from "react-bootstrap-icons";

export const Projects = () => {
  const projects = [
    {
      title: "Home Automation",
      description: "It's an overall design of Home Automation System with low cost wireless system. It specifically focuses on the development of a user friendly IOT based home automation system that is able to control various components inside home via internet #NodeMCU #Arduino #Rest",
      imgUrl: projImg1,
    },
    {
      title: "UPSC Preperation App",
      description: "Built an android learning platform application for students to prepare for the most competitive exams conducted by UPSC (Union Public Service Commission) of India while closely collaborating with 3 others. Ranked among top ten UPSC-related applications, the app is available on Playstore with a productivity boost of 20% and user engagement boost of 40%. #python #AWS #Django",
      imgUrl: projImg2,
    },
    {
      title: "Restaurant Website",
      description: "This is a basic website is designed for the best use of restaurant where they have a menu added along with tables making efficient delivery of food ordered by customers which also making an easy user experience              #HTML #CSS #Java Script",
      imgUrl: projImg3,
    },
    {
      title: "Covid Tracker Application",
      description: "The app helps in spreading awareness on the surge in covid cases, percentage of recovery , and primary symptoms by which the public can predict if one is infected. Using API the data is retrieved into the application developed by flutter with the pleasing visuals to the public and a flexibility to access global statistics, symptoms the public should be aware of. #Flutter #Dart #API",
      imgUrl: projImg4,
    },
    {
      title: "Storybook e-Library",
      description: "For the one's who enjoy listening to stories rather than reading the books this is the best site where story is read out to you effectively with intonation in voices. Moreover it could help you create your own story when you spell out each word of your and it compiles into worded story. Additionally, it don't have any language barriers which makes it optimized. #GTTS #numpy #Python",
      imgUrl: projImg5,
    },
    {
      title: "Online Chat Application",
      description: "Built a responsive, feature-rich Real-Time Chat App, enhancing communication efficiency by 40% and reducing user response times by 30% with features like group chats, emojis, and built-in GIF support. Leveraged GetStream.io and integrated React and NodeJS, enabling users to create custom real-time chat applications, improving other collaborators.#react #Node.js #javascript #getstream.io",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"Showcasing Innovation Through Action"<br></br> Venture into a collection of projects that encapsulate my professional journey, each a unique blend of innovation, skill, and determination.<br></br> This section showcases my ability to transform abstract ideas into tangible results, demonstrating my passion and competency in my field.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">General-Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">SpringBoot</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Django</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h1>SPRING BOOT-LEADER BOARD</h1>
                      <p>As a junior software developer, I leveraged my skills in Spring Boot to design and develop a user-friendly and robust Football Leaderboard Application. This project allowed me to further explore my proficiency in the Spring Boot framework and enhance my understanding of its functionalities. I took responsibility for key aspects of the project, demonstrating not only technical acumen but also problem-solving abilities and an understanding of user experience principles.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h1>GATOR HOME QUEST</h1>
                      <Container className="d-flex justify-content-center">
                <a href="https://gatorshomequest.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">Check Out Website</Button>
                </a>
            </Container>
                      <p>As part of Human Computer Interaction project we designed the website using technology #Django to provide ease to newbies in the city of Gainesville find and explore all the better places to live. It helps to identify all the quantifiers which user would look for like costs, maintainance, and amenities. Provided with wishlist helps the user to maintain record of all the houses they desired to live in. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
