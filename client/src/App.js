import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Splash from './components/Splash';
import OnBoarding from './components/OnBoarding';
import Main from './components/Main';
import Complete from './components/Complete';
import GlobalStyle from './style/globalStyle';

const Wrapper = styled.div`
position: relative;
`;

const Router = () => {
  return (
    <BrowserRouter basename='/312-daily-korean/'>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/main" element={<Main />}  />
          <Route path="/complete" element={<Complete />} />
        </Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <Wrapper className="App">
      <Router />
      <GlobalStyle/>
    </Wrapper>
  );
}

export default App;
