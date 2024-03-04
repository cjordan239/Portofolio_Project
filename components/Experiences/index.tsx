import React from 'react';
import { experiencesData } from "@/lib/data";

const ExperienceSection: React.FC = () => {
    return (
        <div className=''>
            <div className=''>
                <div className=''>
                    {experiencesData.map(data => (
                        <ul key={data.title}>
                           <h2>{data.title}</h2>
                           <p>{data.location}</p>
                           <p>{data.description}</p>
                           <p>{data.icon}</p>
                           <p>{data.date}</p>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
