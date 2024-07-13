import React from 'react';

const Team = ({ data }) => {
    return (
        <div className={` flex-wrap  w-96   border-gray-950 rounded-xl mb-6 ${data.color}`}>
            <h2 className="text-2xl font-bold mb-4 ">{data.head}</h2>
            {data.projects.map((project, index) => (
                <div 
                    key={index}
                    className={`mb-4 p-4 border text-white border-gray-200 rounded-lg ${project.color} hover:bg-opacity-95 hover:bg-black`}
                >
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <ul>
                        {project.members.map((member, idx) => (
                            <li key={idx} className="text-lg">{member}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Team;
