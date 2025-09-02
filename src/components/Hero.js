import programmerLogo from '../asset/programmer.png'
import downloadLogo from '../asset/download.png'
import AishwaryaCS from "../document/AishwaryaCS_resume.pdf"


function Hero() {
    return (
        <>
            <div className='hero'>
                <div className='hero--intro'>
                    <img src={programmerLogo} width="100px"/>
                    <h2 className='hero--name'>Hey there!</h2>
                    <h2 className='hero--name'>I'm Aishwarya</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item"><h2>Software Engineer</h2></div>
                            <div className="i-title-item"><h2>Web Developer</h2></div>
                            <div className="i-title-item"><h2>Coffee-Fueled Coder</h2></div>
                            <div className="i-title-item"><h2>Learner :)</h2></div>
                        </div>
                    </div>
                </div>
                <div className='download--resume'>                
                    <a href={AishwaryaCS} download="AishwaryaCS" target='_blank'>
                        <img src={downloadLogo} width="40px"/>
                    </a>
                    <div className='downloadresume'><p>Download Resume</p></div>                             
                </div>
            </div>
        </>
    )
}

export default Hero