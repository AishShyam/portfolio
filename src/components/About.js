import locationLogo from '../asset/location1.png'
import jobLogo from '../asset/laptop.png'
import graduateLogo from '../asset/graduate.png'

function About() {
    return (
        <>
        <div className="about">
            <h4>About me</h4>
            <div className="about--details">
                <p><img src={locationLogo} width="20px"/> Bangalore, India</p>
                <p><img src={jobLogo} width="20px"/> Associate Software Developer, Mphasis Limited</p>
                <p><img src={graduateLogo} width="20px" /> Information Science Grad, 2020</p>
            </div>
        </div>
        </>
    )
}

export default About