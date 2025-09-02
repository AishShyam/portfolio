import htmlLogo from '../asset/html.png'
import cssLogo from '../asset/css.png'
import javascriptLogo from '../asset/java-script.png'
import reactLogo from '../asset/react.png'
import solidityLogo from '../asset/solidity.png'
import nodeLogo from '../asset/node.png'
// import gitLogo from '../asset/git.png'
import mongoLogo from '../asset/mongo.jpg'
import pythonLogo from '../asset/python.png'
import flaskLogo from '../asset/flask.png'
import angularLogo from '../asset/angularjs.png'



function Skillset() {
    return (
        <>
        <div className="skillset">
            <h4>Skillset</h4>
            <div className="skillset--list">
                <div className="skillset-list--one">
                    <img src={htmlLogo} width="50px"/>
                    <p>HTML</p>
                </div>
                <div className="skillset-list--one">
                    <img src={cssLogo} width="50px"/>
                    <p>CSS</p>
                </div>
                <div className="skillset-list--one">
                    <img src={javascriptLogo} width="50px"/>
                    <p>Javascript</p>
                </div>
                <div className="skillset-list--one">
                    <img src={reactLogo} width="50px"/>
                    <p>React</p>
                </div>
                <div className="skillset-list--one">
                    <img src={angularLogo} width="50px"/>
                    <p>Angular</p>
                </div>
                <div className="skillset-list--one">
                    <img src={nodeLogo} width="50px"/>
                    <p>NodeJS</p>
                </div>
                <div className="skillset-list--one">
                    <img src={flaskLogo} width="50px"/>
                    <p>Flask</p>
                </div>
                <div className="skillset-list--one">
                    <img src={mongoLogo} width="50px"/>
                    <p>Mongodb</p>
                </div>
                <div className="skillset-list--one">
                    <img src={pythonLogo} width="50px"/>
                    <p>Python</p>
                </div>
                <div className="skillset-list--one">
                    <img src={solidityLogo} width="50px"/>
                    <p>Solidity</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skillset