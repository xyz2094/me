import "../styles/components/maincontent.sass"
import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"
import TechnologiesContainer from "./TechnologiesContainer"

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <ProjectsContainer />
      <br></br>
      <TechnologiesContainer />
    </main>
  )
}

export default MainContent