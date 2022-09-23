import githubLogo from '../asset/github.png';
import linkedinLogo from '../asset/linkedin.png'
import emailLogo from '../asset/email.png'

function Footer() {
    return(
        <>
        <div className="footer">
            <div className='footer--logo'>
                <div><a href="https://www.linkedin.com/in/aishwarya-shyam/" target="_blank"><img src={linkedinLogo} width="40px"/></a></div>
                <div><a href="https://github.com/AishShyam" target="_blank"><img src={githubLogo} width="40px"/></a></div>
                <div><a href="mailto: aishwarya.shyam5@gmail.com" target="_blank"><img src={emailLogo} width="40px"/></a></div>
            </div>
            <footer>
                <small>Copyright © Aishwarya C S</small>
            </footer>
        </div>
        </>
    )
}

export default Footer