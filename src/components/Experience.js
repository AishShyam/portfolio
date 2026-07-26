import amazonLogo from '../asset/amazon.png'
import mphasisLogo from '../asset/mphasis.png'
import bachelorsLogo from '../asset/bachelors.png'
import strathclydeLogo from '../asset/strathclyde.png'
import OSTLogo from '../asset/OSTlogo.jpg'
import RTCLogo from '../asset/rtc.jpg'

function Experience() {
    return (
        <>
            {/* <div className="experience">
            <h4>Experience</h4>
            <div className='experience--card'>                
                <Card style={{ width: '18rem' }} className="experience--card--mphasis">
                <Card.Img variant="top" src={mphasisLogo} />
                <Card.Body>
                    <Card.Title>Mphasis</Card.Title>
                    <div className='experience--gray'>
                        <Card.Text>July '21-Dec '22</Card.Text>
                        <Card.Text>Associate Software Developer</Card.Text>
                        <p>BlockchainCoE</p>
                    </div>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="experience--card--amazon">
                <Card.Img variant="top" src={amazonLogo} />
                <Card.Body>
                    <Card.Title>Amazon</Card.Title>
                    <div className='experience--gray'>
                        <Card.Text>Nov '20-July '21</Card.Text>
                        <Card.Text>Transaction Risk Investigator</Card.Text>
                        <p>Product Authentication Team</p>
                    </div>
                </Card.Body>
                </Card>
            </div>
            </div> */}
            <div className="timeline" id="experience">

            <div className="timeline-item right">
                <div className="timeline-content">
                    <img src={RTCLogo} alt="Rewriting the Code" />
                    <p>2026 – Present</p>
                    <h5>Rewriting the Code</h5>
                    <p>Member</p>
                    <ul className="timeline-description">
                    <li>
                        Active member of a global community for women in technology,
                        connecting with peers, mentors and industry professionals.
                    </li>

                    <li>
                        Continuously upskilling through technical projects, certifications
                        and coding practice while actively pursuing software engineering
                        opportunities.
                    </li>
                    </ul>
                </div>
            </div>

            <div className="timeline-item left">
                <a
                    href="https://opensciencetools.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-link"
                >
                    <div className="timeline-content">
                        <img src={OSTLogo} alt="OST"/>
                        <p>2024 – 2026</p>
                        <h5>Open Science Tools</h5>
                        <p>Software Engineer</p>
                       <div className="timeline-description">
                        <ul>
                            <li>
                            Built and maintained Flask APIs and Angular workflows for a platform
                            serving 50,000+ users.
                            </li>
                            <li>
                            Delivered secure authentication, payment and deployment features using
                            OAuth, Stripe, GitLab CI/CD and Linux infrastructure.
                            </li>
                        </ul>
                        </div>
                    </div>
                </a>
            </div>

            <div className="timeline-item right">
            <div className="timeline-content">
                <img src={strathclydeLogo} alt="University of Strathclyde" />
                <p>2023 – 2024</p>
                <h5>University of Strathclyde</h5>
                <p>MSc Advanced Computer Science</p>

                <ul className="timeline-description">
                <li>
                    Completed an MSc in Advanced Computer Science with Distinction.
                </li>
                <li>
                    Studied distributed systems, machine learning, big data technologies and 
                    project management.
                </li>
                </ul>
            </div>
            </div>
            
            <div className="timeline-item left">


            <a
                href="https://www.mphasis.com/fr/home/services/blockchain-technology.html"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
            >
                <div className="timeline-content">
                <img src={mphasisLogo} alt="Mphasis" />
                <p>2021 – 2022</p>
                <h5>Mphasis</h5>
                <p>Associate Solution Developer</p>

                <ul className="timeline-description">
                    <li>
                    Built full-stack Web3 applications using React, Node.js, MongoDB
                    and Solidity.
                    </li>
                    <li>
                    Developed REST APIs, Corda workflows and Docker-based deployments
                    on AWS.
                    </li>
                </ul>
                </div>                
            </a>
            </div>


            <div className="timeline-item left">
            <div className="timeline-content">
                <img src={amazonLogo} alt="Amazon" />
                <p>2020 – 2021</p>
                <h5>Amazon</h5>
                <p>Transaction Risk Investigator</p>

                <ul className="timeline-description">
                <li>
                    Investigated transaction and authentication risks across 500+
                    customer accounts.
                </li>
                <li>
                    Used SQL and internal fraud-detection tools to identify behavioural
                    anomalies and compliance risks.
                </li>
                </ul>
            </div>
            </div>


            <div className="timeline-item right">
            <div className="timeline-content">
                <img src={bachelorsLogo} alt="VTU" />
                <p>2016 – 2020</p>
                <h5>VTU</h5>
                <p>Bachelor of Engineering in Information Science</p>

                <ul className="timeline-description">
                <li>
                    Completed a Bachelor of Engineering in Information Science.
                </li>
                <li>
                    Built foundations in programming, databases, data structures and
                    software engineering.
                </li>
                </ul>
            </div>
            </div>
            </div>
        </>
    )
}

export default Experience
