import React from 'react';

const Portfolio: React.FC = () => {
    const projects = [
        {
            title: 'Modern Living Room',
            description: 'A contemporary living room design featuring minimalist furniture and a neutral color palette.',
            imageUrl: '/images/modern-living-room.jpg'
        },
        {
            title: 'Cozy Bedroom',
            description: 'A warm and inviting bedroom with soft textures and a calming color scheme.',
            imageUrl: '/images/cozy-bedroom.jpg'
        },
        {
            title: 'Stylish Office Space',
            description: 'An efficient and stylish office space designed for productivity and comfort.',
            imageUrl: '/images/stylish-office.jpg'
        }
    ];

    return (
        <div className="portfolio">
            <h2>My Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <img src={project.imageUrl} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;