import programmerLogo from '../asset/programmer.png'
import downloadLogo from '../asset/download.png'
import AishwaryaShyamNov2026 from "../document/AishwaryaShyam_Nov2026.pdf"


function Hero() {
    return (
        <>
            <div className='hero'>
                <div className='hero--intro'>
                    <img src={programmerLogo} width="100px" alt="Programmer illustration"/>
                    <h2 className='hero--name'>Hey there!</h2>
                    <h2 className='hero--name'>I'm Aishwarya Shyam</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item"><h2>Software Engineer</h2></div>
                            <div className="i-title-item"><h2>Full-Stack Developer</h2></div>
                            <div className="i-title-item"><h2>AI Engineer</h2></div>
                            <div className="i-title-item"><h2>Coffee-Fueled Coder</h2></div>
                            <div className="i-title-item"><h2>Learner :)</h2></div>
                        </div>
                    </div>
                </div>
                <div className='download--resume'>                
                    <a href={AishwaryaShyamNov2026} download="AishwaryaShyam_Nov2026.pdf">
                        <img src={downloadLogo} width="40px" alt="Download resume"/>
                    </a>
                    <div className='downloadresume'><p>Download Resume</p></div>                             
                </div>
            </div>
        </>
    )
}

export default Hero
