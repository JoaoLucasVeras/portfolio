export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center jusitify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Dynamic Authentication</h3>
                        <p className="text-gray-400 mb-4">Developing an AI-driven security system for Android devices using Gemma2 AI to prevent shoulder surfing. The system analyzes user data to generate personalized authentication prompts and detects anomalies to enhance security while maintaining a seamless user experience (UX).</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Gemma2 AI", "Hugging Face", "React Native/Expo", "Android Studio", "..."].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                Under Progress (Senior Project)
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Minute Master</h3>
                        <p className="text-gray-400 mb-4">Led a team of four to develop a full-stack web app that helps small businesses track employee hours with a user-friendly interface. Built using React, Node.js (Express), and MongoDB, with Figma for design and GitHub for collaboration. Managed project workflow, deadlines, and team coordination.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "Express", "MongoDB", "..."].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Edward-Vong/Minute-Masters" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Github →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Twitter Replica</h3>
                        <p className="text-gray-400 mb-4">Led a team of four to develop a Twitter-like web app, enabling users to post, follow, comment, and message. Built the front-end using HTML/CSS, with a Flask backend and MySQL for user data storage. Managed project workflow, deadlines, and team collaboration.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Flask", "MySQL", "HTML/CSS", "Git", "..."].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/JoaoLucasVeras/ChirperProject" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Github →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Truck Bomb Video Game</h3>
                        <p className="text-gray-400 mb-4">Developed an infinite scroller game where players avoid obstacles and repair a truck to win, aligning with the theme of "repair." Built core mechanics, including the game environment, minigames, and point system, using .NET C#. Collaborated with a team of five, utilizing GitHub, Trello, and Miro for development and project management. </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Unity", ".NET (C#)", "Git", "Trello", "..."].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a target="_blank" rel="noopener noreferrer" href="https://ricedust.itch.io/truckbomb-test-release" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Game →
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};