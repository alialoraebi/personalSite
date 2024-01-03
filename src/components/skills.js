const Skills = () => {
    const skills = [
        'Java',
        'Spring',
        'HTML',
        'CSS',
        'JavaScript',
        'C#',
        'React',
        'Node.js',
        'Docker',
        'MySQL',
        'MongoDB',
        'Git',
        'GitHub'
    ];

    return (
        <div>
            <h2>Skills</h2>
            <p>I have been learning these skills for 3 years:</p>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
