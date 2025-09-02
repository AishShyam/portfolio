import Card from 'react-bootstrap/Card';
import amazonLogo from '../asset/amazon.png'
import mphasisLogo from '../asset/mphasis.png'
import bachelorsLogo from '../asset/bachelors.png'
import strathclydeLogo from '../asset/strathclyde.png'
import OSTLogo from '../asset/OSTlogo.jpg'

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
            <div className="timeline">
            <div className="timeline-item right">
                <div className="timeline-content">
                <img src={bachelorsLogo} alt="VTU"/>
                <p>2016 – 2020</p>
                <h5>VTU</h5>
                <p>Bachelors of Engineer in Information Science</p>
                </div>
            </div>

            {/* <div className="timeline-item right">
                <div className="timeline-content">
                <img src={amazonLogo} alt="Amazon"/>
                <h3>2020 – 2021</h3>
                <h4>Amazon</h4>
                <p>Transaction Risk Investigator<br/>Product Authentication Team</p>
                </div>
            </div> */}

            <div className="timeline-item left">
                <div className="timeline-content">
                <img src={mphasisLogo} alt="Mphasis"/>
                <p>2021 – 2022</p>
                <h5>Mphasis</h5>
                <p>Associate Software Developer</p>
                </div>
            </div>

            <div className="timeline-item right">
                <div className="timeline-content">
                <img src={strathclydeLogo} alt="Strathclyde"/>
                <p>2023 – 2024</p>
                <h5>University of Strathclyde</h5>
                <p>MSc Advanced Computer Science</p>
                </div>
            </div>
            
            <a href="https://opensciencetools.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="timeline-item left">
                <div className="timeline-content">
                <img src={OSTLogo} alt="OST"/>
                <p>2024 – Present</p>
                <h5>Open Science Tools</h5>
                <p>Software Engineer</p>
                </div>
            </div>
            </a>
            </div>
        </>
    )
}

export default Experience