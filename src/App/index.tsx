import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage } from 'pages';
import { WithInterface } from 'shared/layouts';

const App: React.FC = () => {
  return (
    <Router>
      <WithInterface>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </WithInterface>
    </Router>
  );
}

export default App;
