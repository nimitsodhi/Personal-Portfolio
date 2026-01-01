
const ProjectsSection = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        A curated collection of projects that showcase my passion for creating
                        digital experiences.
                    </p>
                </div>

                <div className="glass-card p-12 text-center rounded-2xl mx-auto max-w-2xl">
                    <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
                    <p className="text-muted-foreground">
                        I am currently working on some exciting projects. Stay tuned!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
