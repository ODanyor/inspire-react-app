import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage } from 'pages';
import { Main } from 'shared/layouts';

const App: React.FC = () => (
  <Router>
    <Main>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/contact' component={ContactPage} />
      </Switch>
    </Main>
  </Router>
);

export default App;
