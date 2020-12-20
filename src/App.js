import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'

import Investors from './pages/Investors'
import Overview from './pages/Overview'

const Container = styled.div`
  max-width: 844px;
  width: 100%;
  padding: 35px 42px 15px;
  background: #FFFFFF;
  box-shadow: 0px 2px 6px 4px rgba(136, 141, 154, 0.1);
  border-radius: 4px;
  margin: 95px auto;
  min-height: 706px;
`

const App = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/investors" />
        </Route>
        <Route path="/investors">
          <Investors />
        </Route>
        <Route path="/companies">
          <Investors isCompany />
        </Route>
        <Route path="/investor/:id">
          <Overview />
        </Route>
        <Route path="/company/:id">
          <Overview isCompany />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
