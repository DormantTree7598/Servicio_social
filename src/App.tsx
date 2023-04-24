import "./App.css";
import ProjectMain from "./views/ProjectMain";
import styled from "styled-components";
import { SecondView } from "./views/SecondView";

const AppDiv = styled.div`
  max-width: 2560px;
  max-height: 1440px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: red;
`;

const App = () => {
  return (
    <AppDiv>
      {/*<ProjectMain />*/}
      <SecondView />
    </AppDiv>
  );
};

export default App;
