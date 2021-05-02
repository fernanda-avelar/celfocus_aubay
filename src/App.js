
import Logo from './assets/celfocus-white.png'
import Companies from './components/Companies';
import CompanyCard from './components/CompanyCard'
import CompanyNumber from './components/CompanyNumber'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Body, Container, LogoImg, Content } from './styles'

function App() {
  return (
    <Body>
      <Container>
        <Content>
        <LogoImg src={Logo} />
        <Router >
          <Switch>
            <Route exact path='/' component={Companies} />
            <Route path='/companies/:companyId' component={CompanyCard} />
            <Route path='/numbers/:numberId' component={CompanyNumber} />
          </Switch>
        </Router>
        </Content>
      </Container>
    </Body>
  );
}

export default App;
