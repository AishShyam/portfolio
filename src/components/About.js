import locationLogo from '../asset/location1.png'
import graduateLogo from '../asset/graduate.png'

function About() {
    return (
        <>
        <div className="about" id="about">
            <h4>About me</h4>
            <div className="about--details">
                <p><img src={locationLogo} width="20px" alt="Location"/> Bangalore, India</p>
                {/* <p><img src={jobLogo} width="20px" alt="Job"/> Software Engineer @ Open Science Tools</p> */}
                {/* <p><img src={graduateLogo} width="20px" alt="Graduate"/> Information Science Grad, 2020</p> */}
                <p><img src={graduateLogo} width="20px" alt="Graduate"/> University of Strathclyde, MSc Advanced Computer Science, 2024</p>
                {/* <p><img src={graduateLogo} width="20px" alt="Graduate"  /> Visvesvaraya Technological University, Bachelor of Engineering (Information Science), 2020</p> */}
                <div className="about--objective">
                    <p>
                        I'm a Software Engineer with 4 years of experience building
                        backend systems, full-stack applications and automation tools.
                        I enjoy taking features from an initial idea through development,
                        testing and deployment.
                    </p>
                </div>
                {/* <div className='about--objective'>
                <p>I'm a motivated master’s student studying Computer Science at Strathclyde and software developer eager to learn and use new technologies to build sustainable applications, currently looking for an internship or full-time role in software development.</p>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default About