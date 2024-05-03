import Layout from "../components/Layout";

const Home = () => {
    return(
        <Layout>
            <div className="homepage-content-container">
                <div className="contact-info-container">
                    <img src={"/images/Katelyn.jpg"} alt="Katelyn Stearn" width="200px"/>
                    <p>CS Student<br></br>
                    Auburn Hills, Michigan <br></br>
                    <a href="mailto:krstearn@gmail.com" className="emphasis">krstearn@gmail.com</a></p>
                    <div className="socials-container">
                        <a href="https://www.linkedin.com/in/kstearn/">
                            <img src={"/images/LI-In-Bug.png"} alt="LinkedIn logo" width="30px"/>
                        </a>
                        <a href="https://github.com/kstearn">
                            <img src={"/images/github-mark.png"} alt="GitHub logo" width="30px" />
                        </a>
                    </div>
                    
                </div>
                
                <main className="main-textbox">
                    <p className="emphasis">Welcome to my portfolio!</p>
                    <p>I will be graduating in the spring of 2025 with my Computer Science B.S. from Baker College. I have experience in software/web development and data analysis/visualization.</p>
                    <p>I am looking for a software or web development internship or co-op for the Fall 2024 and Spring 2025 semesters; I will be available for full-time positions starting in June of 2025. I am open to working in the metro Detroit area or remotely.</p>
                    <p>Feel free to contact me via email or the social media links to the left.</p>
                </main>
            </div>
        </Layout>
    )
}

export default Home;