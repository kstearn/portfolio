import Layout from "../components/Layout";
import SkillContainer from "../components/SkillContainer";

const Skills = () => {
    return(
        <Layout>
            <main className="main-textbox skills">
                <SkillContainer skill="HTML" image="/images/HTML-logo.png" />
                <SkillContainer skill="CSS" image="/images/CSS3_logo.png" />
                <SkillContainer skill="JavaScript" image="/images/JavaScript-logo.png" />
                <SkillContainer skill="React.js" image="/images/React-icon.png" />
                <SkillContainer skill="SQL" image="/images/SQL-logo.png" />
                <SkillContainer skill="Power BI" image="/images/Power-BI-logo.png" />
                <SkillContainer skill="Python" image="/images/Python_logo.png" />
                <SkillContainer skill="Git" image="/images/Git_icon.png" />
                <SkillContainer skill="Java" image="/images/Java-logo.png" />
                <SkillContainer skill="C#" image="/images/C-sharp-logo.png" />
            </main>
        </Layout>
    )
}

export default Skills;