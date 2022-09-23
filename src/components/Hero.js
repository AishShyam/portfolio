import programmerLogo from '../asset/programmer.png'
import helloLogo from '../asset/hey.png'
import Button from 'react-bootstrap/Button';
import downloadLogo from '../asset/download.png'
import AishwaryaCS from "../document/AishwaryaCS.pdf"


function Hero() {
    return (
        <>
            <div className='hero'>
                <img src={programmerLogo} width="100px"/>
                <h2 className='hero--name'>Hey there!</h2>
                <h2 className='hero--name'>I'm Aishwarya</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item"><h2>Web Developer</h2></div>
                        <div className="i-title-item"><h2>Web3 Developer</h2></div>
                        <div className="i-title-item"><h2>Pretitious Writer</h2></div>
                        <div className="i-title-item"><h2>Wannabe Movie Critic</h2></div>
                        <div className="i-title-item"><h2>Learner</h2></div>
                    </div>
                </div>
                <div className='download--resume'>                
                    <a href={AishwaryaCS} download="AishwaryaCS" target='_blank'>
                        <img src={downloadLogo} width="40px"/>
                    </a>
                    <p>Download Resume</p>                             
                </div>
            </div>
        </>
    )
}

export default Hero