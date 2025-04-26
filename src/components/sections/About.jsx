export const About = () => {

    const Languages = ["Java", "Python", "C/C++", "C#", "Javascript", "HTML/CSS", "SQL", "Lua"];
    const Frameworks = ["React", "React Native/Expo", "Node.js", "Flask", "JUnit", "Tailwind", "Unreal Engine 5", "Unity"];
    const aiFramework = ["PyTorch", "Scikit-Learn", "Gemma AI", "Gemini", "Hugging Face", "Kaggle"];
    const DevTools = ["Git", "Linux", "Trello", "Figma", "Android Studio", "Bitbucket", "Vite", "Jira", "VS Code", "IntelliJ"];
    const Databases = ["MySQL", "MongoDB"];

    return(
        <section id="about" className="min-h-screen flex items-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p class="text-lg leading-relaxed text-gray-300">
                        I’m <strong>Joao Lucas Veras</strong>, a Software Engineering major at San Jose State University with a passion for <strong>AI, game development, and full-stack engineering</strong>. I thrive on solving complex problems, building creative applications, and pushing the boundaries of technology.
                    </p>
                    <p class="text-lg leading-relaxed text-gray-300 mt-4">
                    With hands-on experience in <strong>game development, web and mobile applications, and AI-driven solutions</strong>, I enjoy blending innovation with practicality to create impactful user experiences. Beyond coding, I stay engaged with the latest advancements in software engineering, continuously learning and refining my skills.
                    </p>
                    <p class="text-lg leading-relaxed text-gray-300 mt-4">
                    Previously, I’ve worked on projects ranging from <strong>AI-powered applications</strong> to <strong>interactive games</strong>, and I’ve also shared my knowledge by teaching young students about coding and robotics. My goal is to keep expanding my expertise while developing applications that make a difference.
                    </p>
                    <p class="text-lg leading-relaxed text-gray-300 mt-4">
                    When I’m not coding, you can find me playing video games, following soccer transfers, or improving my golf and surfing skills.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
                        <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Languages </h3>
                            <div className="flex flex-wrap gap-2">
                                {Languages.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,120,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frameworks </h3>
                            <div className="flex flex-wrap gap-2">
                                {Frameworks.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,120,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> AI Framework and Tools </h3>
                            <div className="flex flex-wrap gap-2">
                                {aiFramework.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,120,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Developer Tools </h3>
                            <div className="flex flex-wrap gap-2">
                                {DevTools.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,120,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Databases </h3>
                            <div className="flex flex-wrap gap-2">
                                {Databases.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,120,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>
                                <strong className="text-gray-200">
                                     Master in Artificial Intelligence
                                     <ul className="list-inside pl-4">
                                        <li>San Jose State University [2021-2025]</li>
                                     </ul>
                                </strong>
                                <ul className="list-inside pl-4">[2025-2027]</ul>
                            </li>
                            <li>
                                <strong className="text-gray-200">
                                    B.S. in Software Engineering 
                                </strong>
                                <ul className="list-inside pl-4">
                                    <li>San Jose State University [2021-2025]</li>
                                </ul>
                            </li>
                            <li>
                                <strong className="text-gray-200">Relevant Coursework: </strong>
                               <ul className="list-inside pl-4">Data Structure and Algorithms, Object-Oriented Design, Software Engineering, Calculus-III, Database Management System, Information Security, Project Management, Introduction to AI, Programming Paradigms, Software Quality Engineering</ul>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-gray-400">
                            <div>
                                <h4>
                                    <strong className="text-gray-100">Lab instructor - San Jose State University</strong> 
                                    <div className="text-sm font-bold">
                                        [August 2024 - December 2024]
                                    </div>
                                </h4>
                                <p className="py-1"> 
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li>
                                            Conduct and supervise Intro to Data Structures lab sessions for undergraduate students, ensuring a safe and productive learning environment
                                        </li>
                                        <li>
                                            Evaluate student performance through lab reports and practical exams, providing constructive feedback to enhance learning
                                        </li>
                                        <li>
                                            Collaborate with faculty members to align lab activities with course objectives and academic standards
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div>
                                <h4>
                                    <strong className="text-gray-100">Learning Assistant - San Jose State University</strong> 
                                    <div className="text-sm font-bold">
                                        [August 2022 - May 2024]
                                    </div>
                                </h4>
                                <p className="py-1"> 
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li>
                                            Mentored computer science lectures to help students understand assignments and facilitate group discussions                                        </li>
                                        <li>
                                            Motivated labs of 30 students and assisted professors in devising data structure and algorithm course material
                                        </li>
                                        <li>
                                            Performed various teaching techniques to foster a positive and productive learning environment motivating students to participate in discussions and exercises
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div>
                                <h4>
                                    <strong className="text-gray-100">Engineering Camp Instructor - Engineering For Kids </strong> 
                                    <div className="text-sm">
                                        [June 2023 - August 2023]
                                    </div>
                                </h4>
                                <p className="py-1"> 
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li>
                                            Instructed up to 30 students from grade level pre-k to 6th grade to explore robotics and video game design
                                        </li>
                                        <li>
                                            Supervised and organized weekly camps; conducted team building exercises and maintained a safe environment
                                        </li>
                                        <li>
                                            Ensured students were engaged and excited on assigned projects while learning principles of engineering and computer science
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};