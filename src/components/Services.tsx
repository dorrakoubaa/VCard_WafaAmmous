import React from 'react';

const Services: React.FC = () => {
    const servicesList = [
        {
            title: 'Residential Design',
            description: 'Creating beautiful and functional living spaces tailored to your lifestyle.'
        },
        {
            title: 'Commercial Design',
            description: 'Designing professional environments that enhance productivity and brand identity.'
        },
        {
            title: 'Space Planning',
            description: 'Optimizing the layout of spaces to improve flow and functionality.'
        },
        {
            title: 'Color Consultation',
            description: 'Expert advice on color schemes to create the desired mood and atmosphere.'
        },
        {
            title: 'Furniture Selection',
            description: 'Assisting in the selection of furniture that complements your style and needs.'
        }
    ];

    return (
        <section id="services">
            <h2>Our Services</h2>
            <ul>
                {servicesList.map((service, index) => (
                    <li key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Services;