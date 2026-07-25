import htmlLogo from '../asset/html.png'
import cssLogo from '../asset/css.png'
import javascriptLogo from '../asset/java-script.png'
import typescriptLogo from '../asset/typescript.png'
import reactLogo from '../asset/react.png'
import nextjsLogo from '../asset/nextjs.png'
import angularLogo from '../asset/angularjs.png'
import tailwindLogo from '../asset/tailwind.png'
import pythonLogo from '../asset/python.png'
import flaskLogo from '../asset/flask.png'
import nodeLogo from '../asset/node.png'
import mongoLogo from '../asset/mongo.jpg'
import postgreLogo from '../asset/postgre.png'
import redisLogo from '../asset/redis.png'
import solidityLogo from '../asset/solidity.png'
import openaiLogo from '../asset/openai.png'
import claudeLogo from '../asset/claude.png'
import copilotLogo from '../asset/copilot.png'
import playwrightLogo from '../asset/playwright.png'
import pytestLogo from '../asset/pytest.png'
import jestLogo from '../asset/jest.png'
import awsLogo from '../asset/aws.png'
import dockerLogo from '../asset/docker.png'
import githubLogo from '../asset/github.png'
import gitlabLogo from '../asset/gitlab.png'
import cypressLogo from '../asset/cypress.png'

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo, alt: 'HTML logo' },
            { name: 'CSS', logo: cssLogo, alt: 'CSS logo' },
            { name: 'JavaScript', logo: javascriptLogo, alt: 'JavaScript logo' },
            { name: 'TypeScript', logo: typescriptLogo, alt: 'TypeScript logo' },
            { name: 'React', logo: reactLogo, alt: 'React logo' },
            { name: 'Next.js', logo: nextjsLogo, alt: 'Next.js logo' },
            { name: 'Angular', logo: angularLogo, alt: 'Angular logo' },
            { name: 'Tailwind CSS', logo: tailwindLogo, alt: 'Tailwind CSS logo' },
        ],
    },
    {
        title: 'Backend & Databases',
        skills: [
            { name: 'Python', logo: pythonLogo, alt: 'Python logo' },
            { name: 'Flask', logo: flaskLogo, alt: 'Flask logo' },
            { name: 'Node.js', logo: nodeLogo, alt: 'Node.js logo' },
            { name: 'MongoDB', logo: mongoLogo, alt: 'MongoDB logo' },
            { name: 'PostgreSQL', logo: postgreLogo, alt: 'PostgreSQL logo' },
            { name: 'Redis', logo: redisLogo, alt: 'Redis logo' },
            { name: 'Solidity', logo: solidityLogo, alt: 'Solidity logo' },
        ],
    },
    {
        title: 'AI Tools',
        skills: [
            { name: 'OpenAI', logo: openaiLogo, alt: 'OpenAI logo' },
            { name: 'Claude', logo: claudeLogo, alt: 'Claude logo' },
            { name: 'GitHub Copilot', logo: copilotLogo, alt: 'GitHub Copilot logo' },
        ],
    },
    {
        title: 'Testing',
        skills: [
            { name: 'Playwright', logo: playwrightLogo, alt: 'Playwright logo' },
            { name: 'Cypress', logo: cypressLogo, alt: 'Cypress logo' },
            { name: 'Pytest', logo: pytestLogo, alt: 'Pytest logo' },
            { name: 'Jest', logo: jestLogo, alt: 'Jest logo' },
        ],
    },
    {
        title: 'Cloud & DevOps',
        skills: [
            { name: 'AWS', logo: awsLogo, alt: 'AWS logo' },
            { name: 'Docker', logo: dockerLogo, alt: 'Docker logo' },
            { name: 'GitHub', logo: githubLogo, alt: 'GitHub logo' },
            { name: 'GitLab', logo: gitlabLogo, alt: 'GitLab logo' },
        ],
    },
]

function Skillset() {
    return (
        <section className="skillset" id="skills">
            <h4>Skills</h4>

            <div className="skill-categories">
                {skillCategories.map((category) => (
                    <div className="skill-category" key={category.title}>
                        <h5>{category.title}</h5>

                        <div className="skillset--list">
                            {category.skills.map((skill) => (
                                <div className="skillset-list--one" key={skill.name}>
                                    <img src={skill.logo} alt={skill.alt} />
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skillset
