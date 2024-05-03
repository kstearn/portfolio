import Layout from "../components/Layout";
import ProjectContainer from "../components/ProjectContainer";

const Projects = () => {
    return(
        <Layout>
            <main className="main-textbox">
                <ProjectContainer
                    title="Portfolio Website"
                    description="This website is completely designed and developed by me! Currently it is only suited for viewing on a computer but I plan to add functionality for mobile access in the near future. Yes, it's overengineered, but I wanted to practice my React skills. :)"
                    technologies="HTML, CSS, React.js, Figma" 
                    image="/images/Portfolio-image.png"/>
                <ProjectContainer 
                    title="My Assignments" 
                    description="Productivity Android app that uses the Android SQLite database to store persistent data. Users can add assignments and keep track of their due dates with a sorted list view or select specific dates on the calendar." 
                    technologies="Android, Java, SQLite, Figma" 
                    image="/images/MyAssignmentsImage.png"/>
                <ProjectContainer
                    title="Skill Sages"
                    description="Web application designed and developed as part of a 3-person team for the Black Wings Hack hackathon 2024. Incomplete functionality due to the time constraints, but it was a lot of fun and I learned a lot about full stack development."
                    technologies="React.js, HTML, CSS, Flask (Python) backend, GitHub, Postman" 
                    image="/images/SkillSages.png"/>
                
            </main>
        </Layout>
    )
}

export default Projects;