import Card from 'react-bootstrap/Card';

const projects = [
    {
        title: 'Job Search Copilot',
        date: 'July 2026 – Present',
        points: [
            'Building an AI-powered platform that automates job discovery, resume tailoring, outreach drafting and application tracking while keeping users in control of important actions.',
            'Designed provider-independent LLM workflows using LiteLLM, Playwright, Supabase and GitHub Actions for scalable job-search automation.',
        ],
        tools: ['Python', 'LiteLLM', 'Playwright', 'Supabase', 'GitHub Actions'],
        link: 'https://github.com/AishShyam/JobSearchCopilot',
    },
    {
        title: 'AI Blog-Writing Agent with Google ADK',
        date: 'July 2026',
        points: [
            'Built an AI agent that plans and writes blog content using Google ADK and Gemini.',
            'Implemented a reasoning-and-action workflow that breaks a request into steps, generates a plan and produces the final article.',
        ],
        tools: ['Python', 'Google ADK', 'Gemini'],
        link: '',
    },
    {
        title: 'ReframeAI',
        date: 'May 2026',
        points: [
            'Developed a full-stack reflection application that analyses user input for cognitive distortions and generates personalised CBT-based reframes.',
            'Integrated an LLM API with a Flask backend and created a simple frontend for submitting and reviewing reflections.',
        ],
        tools: ['Python', 'Flask', 'OpenRouter API', 'HTML', 'CSS'],
        link: 'https://github.com/AishShyam/ReframeAI',
    },
    {
        title: 'Tic Tac Toe Plus',
        date: 'April 2026',
        points: [
            'Built a full-stack variation of tic-tac-toe where each player has three pieces and the game continues after the placement stage.',
            'Added rules that allow players to move pieces horizontally or vertically while preventing diagonal movement.',
        ],
        tools: ['React', 'Flask', 'Python'],
        link: '',
    },
    {
        title: 'GlucoCare',
        date: 'July 2023 – August 2023',
        points: [
            'Developed a full-stack diabetes support platform with health tracking, personalised recommendations and a community discussion forum.',
            'Implemented REST APIs, JWT authentication and protected user workflows using React, Node.js, Express.js and MongoDB.',
        ],
        tools: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
        link: 'https://github.com/AishShyam/GlucoCare',
    },
    {
        title: 'Goodreads Review Rating Prediction',
        date: 'March 2023 – April 2023',
        points: [
            'Built machine-learning and deep-learning models to predict Goodreads review ratings from one to five using a dataset of approximately 900,000 reviews.',
            'Preprocessed review text and compared SVM, LSTM, 1D CNN and RoBERTa approaches for text classification.',
        ],
        tools: [
            'Python',
            'Scikit-learn',
            'TensorFlow/Keras',
            'LSTM',
            '1D CNN',
            'RoBERTa',
        ],
        link: 'https://colab.research.google.com/drive/1zHqdYtPg2ym7lUrWxspoUR7LQcUs9Ufs',
    },
    {
        title: 'University Distributed Information Platform',
        date: 'February 2023 – April 2023',
        points: [
            'Designed a distributed information platform integrating student, course and departmental data across relational, XML and semantic models.',
            'Developed SQL, XQuery and SPARQL queries for cross-domain reporting, validation and data access.',
        ],
        tools: ['MySQL', 'XML', 'XQuery', 'SPARQL', 'Protégé'],
        link: '',
    },
    {
        title: 'NFT Marketplace',
        date: 'March 2022 – May 2022',
        points: [
            'Built a decentralised marketplace with wallet-based authentication, NFT minting, listing, buying and ownership transfers.',
            'Implemented Solidity smart contracts and integrated React, Ethers.js and IPFS for the frontend and decentralised asset storage.',
        ],
        tools: ['Solidity', 'React', 'Redux', 'Ethers.js', 'IPFS', 'MetaMask'],
        link: '',
    },
    {
        title: 'Solidity Smart Contract Suite',
        date: '2022',
        points: [
            'Developed a collection of Ethereum smart contracts covering ERC-20 tokens, ERC-721 NFTs, wallets, ownership controls, mappings and token swaps.',
            'Implemented reusable contract patterns for asset creation, transfers, access control and Ether transactions.',
        ],
        tools: ['Solidity', 'Ethereum', 'ERC-20', 'ERC-721', 'Remix'],
        link: 'https://github.com/AishShyam/Solidity-examples',
    },
]

function Projects() {
    return (
        <section className="projects" id="projects">
            <h4>Projects</h4>

            <div className="projects--card">
                {projects.map((project) => (
                    <Card className="project-card" key={project.title}>
                        <Card.Body>
                            <div className="project-card-header">
                                <Card.Title>{project.title}</Card.Title>
                                {project.date && <span>{project.date}</span>}
                            </div>

                            <ul className="project-points">
                                {project.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>

                            <div className="project-tools">
                                {project.tools.map((tool) => (
                                    <span key={tool}>{tool}</span>
                                ))}
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    View Project
                                </a>
                            )}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Projects
