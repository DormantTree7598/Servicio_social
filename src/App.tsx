
import './App.css'
import ProjectMain from './views/ProjectMain'
import styled from 'styled-components'

const AppDiv = styled.div`
  max-width: 2560px;
  max-height: 1440px;
  margin: 0;
  padding: 0;
`;

const App = () => {
  return (
    <AppDiv>
      <ProjectMain/>
    </AppDiv>
  )
}

export default App;
