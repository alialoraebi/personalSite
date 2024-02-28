const Skills = () => {
    const skills = [
        'Java',
        'Spring',
        'HTML',
        'CSS',
        'JavaScript',
        'C#',
        'React/React Native',
        'Node.js',
        'Docker',
        'MySQL',
        'MongoDB',
        'Git',
        'GitHub',
        'Android/IOS Development'
    ];

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <p className="skills-description">I have been learning these skills for 3 years:</p>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skills-item">{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
