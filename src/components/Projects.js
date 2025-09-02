import Card from 'react-bootstrap/Card';

function Projects() {
    return (
        <>
        <div className="projects">
            <h4>Projects</h4>
            <div className='projects--card'>   
            <a href="https://github.com/AishShyam/GlucoCare" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Card style={{ width: '18rem' }} className="project--card--corda">
                <Card.Body>
                <Card.Title>Diabetes Care WebApp</Card.Title>
                    <div className='project--gray'>
                        <div>
                            <p>A web-based support app "GlucoCare" for people with type 2 diabetes built using the MERN stack as part of my master’s thesis.</p>
                            <p>Tools used: React.js, React Routers, Node.js, Express.js, Mongodb Atlas, Mongoose, Postman</p>
                        </div>
                    </div>
                </Card.Body>
                </Card>    
                </a>
                <a href="https://github.com/AishShyam/GlucoCare" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>      
                <Card style={{ width: '18rem'}} className="project--card--nftmarketplace">
                <Card.Body>
                    <Card.Title>Task Manager</Card.Title>
                    <div className='project--gray'>
                        <div>
                        <p>A simple task manager web app that allows users to create, view, update, and delete tasks.</p>
                        <br></br>
                        <p>Tools used: ReactJS, React Router, Node.js, Express.js, MongoDB Atlas, Mongoose, Postman</p>
                        </div>
                    </div>
                </Card.Body>
                </Card>
                </a>
                <Card style={{ width: '18rem'}} className="project--card--nftmarketplace">
                <Card.Body>
                    <Card.Title>NFT Marketplace</Card.Title>
                    <div className='project--gray'>
                        <div>
                        <p>Full stack decentralized app that lets users log in through cryptocurrency wallet and mint, list and buy NFTs.</p>
                        <p>Tools used: Solidity, ReactJS, Hardhat, Ethers.js, IPFS, React Routers, Metamask</p>
                        </div>
                    </div>
                </Card.Body>
                </Card>
                {/* <Card style={{ width: '18rem' }} className="project--card--nftminter">
                <Card.Body>
                <Card.Title>NFT Minter</Card.Title>
                    <div className='project--gray'>
                        <div>
                            <p>Full stack Dapp that lets users log in through Metamask and mint NFTs on the Rinkeby testnet which is then viewable on OpenSea and other NFT platforms</p>
                            <p>Tools used: Solidity, ReactJS, Remix, Moralis, OpenSea API</p>
                        </div>
                    </div>
                </Card.Body>
                </Card> */}
                {/* <Card style={{ width: '18rem' }} className="project--card--corda">
                <Card.Body>
                <Card.Title>Invoice CorDapp</Card.Title>
                    <div className='project--gray'>
                        <div>
                            <p>A three node network CorDapp that takes invoice data as input and creates an invoice asset. This asset can be transferred to another party on the network.</p>
                            <p>Tools used: Corda, Gradle, Java, Apache Poi</p>
                        </div>
                    </div>
                </Card.Body>
                </Card> */}
            </div>
        </div>
        </>
    )
}

export default Projects