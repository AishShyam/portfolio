import locationLogo from '../asset/location1.png'
import jobLogo from '../asset/laptop.png'
import graduateLogo from '../asset/graduate.png'

function About() {
    return (
        <>
        <div className="about">
            <h4>About me</h4>
            <div className="about--details">
                <p><img src={locationLogo} width="20px"/> United Kingdom</p>
                <p><img src={jobLogo} width="20px"/> Software Engineer @ Open Science Tools</p>
                {/* <p><img src={graduateLogo} width="20px" /> Information Science Grad, 2020</p> */}
                <p><img src={graduateLogo} width="20px" /> University of Strathclyde, MSc Advanced Computer Science, 2023</p>
                {/* <div className='about--objective'>
                <p>I'm a motivated master’s student studying Computer Science at Strathclyde and software developer eager to learn and use new technologies to build sustainable applications, currently looking for an internship or full-time role in software development.</p>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default About