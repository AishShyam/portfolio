import Card from 'react-bootstrap/Card';
import amazonLogo from '../asset/amazon.png'
import mphasisLogo from '../asset/mphasis.png'

function Experience() {
    return (
        <>
            <div className="experience">
            <h4>Experience</h4>
            <div className='experience--card'>                
                <Card style={{ width: '18rem' }} className="experience--card--mphasis">
                <Card.Img variant="top" src={mphasisLogo} />
                <Card.Body>
                    <Card.Title>Mphasis</Card.Title>
                    <div className='experience--gray'>
                        <Card.Text>July 21'-Present</Card.Text>
                        <Card.Text>Associate Software Developer</Card.Text>
                        <p>BlockchainCoE</p>
                    </div>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="experience--card--amazon">
                <Card.Img variant="top" src={amazonLogo} />
                <Card.Body>
                    <Card.Title>Amazon</Card.Title>
                    <div className='experience--gray'>
                        <Card.Text>Nov '20-July '21</Card.Text>
                        <Card.Text>Transaction Risk Investigator</Card.Text>
                        <p>Product Authentication Team</p>
                    </div>
                </Card.Body>
                </Card>
            </div>
            </div>
        </>
    )
}

export default Experience