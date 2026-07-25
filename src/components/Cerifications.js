const certifications = [
    {
        title: 'Build an AI Agent',
        provider: 'IBM',
        issued: 'June 2026',
        credentialId: '',
        description: 'Built foundational knowledge of AI agents, reasoning workflows and agent-based application design.',
        link: 'https://www.credly.com/badges/141a65b9-0caf-4b99-80d2-b1a0d6b8a2e0',
    },
    {
        title: 'MERN Stack Course – MongoDB, Express, React and NodeJS',
        provider: 'Udemy',
        issued: '',
        credentialId: 'UC-136d1ee8-e645-4776-916e-e26995795c57',
        description: 'Covered full-stack application development using MongoDB, Express.js, React and Node.js.',
        link: 'https://www.udemy.com/certificate/UC-136d1ee8-e645-4776-916e-e26995795c57/',
    },
    {
        title: 'JavaScript S1',
        provider: 'Mphasis',
        issued: 'September 2022',
        credentialId: '1135766299',
        description: 'Strengthened practical JavaScript fundamentals for web application development.',
        link: '',
    },
    {
        title: 'Succeeding in Web Development: Full Stack and Front End',
        provider: 'LinkedIn Learning',
        issued: 'April 2021',
        credentialId: '853e11b9664cd680abcc7204bc6b4356dc75f05891bb6fb9eb625561cde4e637',
        description: 'Covered career practices and core skills required for frontend and full-stack web development.',
        link: 'https://www.linkedin.com/learning/certificates/853e11b9664cd680abcc7204bc6b4356dc75f05891bb6fb9eb625561cde4e637?trk=backfilled_certificate',
    },
    {
        title: 'Programming Foundations: Fundamentals',
        provider: 'LinkedIn Learning',
        issued: 'November 2020',
        credentialId: 'b9512504dbcb788eea065537a1cf3657492e2a470e687832335a26a15aed938c',
        description: 'Covered core programming concepts including control flow, functions and problem-solving fundamentals.',
        link: 'https://www.linkedin.com/learning/certificates/b9512504dbcb788eea065537a1cf3657492e2a470e687832335a26a15aed938c?trk=backfilled_certificate',
    },
    {
        title: 'Predictive Modelling with Azure Machine Learning Studio',
        provider: 'Coursera',
        issued: 'October 2020',
        credentialId: 'UCKUD4PHD7VN',
        description: 'Built predictive models using Azure Machine Learning Studio and applied standard machine-learning workflows.',
        link: '',
    },
    {
        title: 'Responsive Web Design',
        provider: 'freeCodeCamp',
        issued: 'June 2020',
        credentialId: '',
        description: 'Built responsive webpages using HTML, CSS, Flexbox, Grid and accessibility-focused design practices.',
        link: 'https://www.freecodecamp.org/certification/aishshyam/responsive-web-design',
    },
    {
        title: 'Fundamentals of Digital Marketing',
        provider: 'Google Digital Unlocked',
        issued: 'July 2020',
        credentialId: '53S JJW JPQ',
        description: 'Covered digital marketing fundamentals including search, analytics, content and online customer journeys.',
        link: '',
    },
    {
        title: 'What Is Data Science?',
        provider: 'Coursera',
        issued: '2020',
        credentialId: 'CU5L83TDF8CJ',
        description: 'Introduced the data-science lifecycle, common roles, methods and practical applications.',
        link: 'https://www.coursera.org/account/accomplishments/certificate/CU5L83TDF8CJ',
    },
    {
        title: 'Python Basics',
        provider: 'Coursera',
        issued: '2020',
        credentialId: '9F4AXJVKKMV3',
        description: 'Covered Python syntax, variables, functions, collections and introductory programming exercises.',
        link: 'https://www.coursera.org/account/accomplishments/certificate/9F4AXJVKKMV3',
    },
]

function Certifications() {
    return (
        <section className="certifications" id="certifications">
            <h4>Certifications</h4>

            <div className="certifications-list">
                {certifications.map((certification) => (
                    <article
                        className="certification-item"
                        key={`${certification.title}-${certification.provider}`}
                    >
                        <div className="certification-main">
                            <h5>{certification.title}</h5>

                            <p className="certification-meta">
                                {certification.provider}
                                {certification.issued && ` • ${certification.issued}`}
                            </p>

                            <p className="certification-description">
                                {certification.description}
                            </p>

                            {certification.credentialId && (
                                <p className="certification-id">
                                    Credential ID: {certification.credentialId}
                                </p>
                            )}
                        </div>

                        {certification.link && (
                            <a
                                href={certification.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certification-link"
                            >
                                View Credential
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Certifications
