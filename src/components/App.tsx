import React from 'react'
import { Collapse, Container, Nav, Navbar, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ArticlesContextProvider } from '../context/Articles'
import { ArticleDetail } from './Article'
import { ArticlesList } from './Article/List'
import { EditArticle } from './Article/Edit'
import { CreateArticle } from './Article/Create'
import { DeleteArticle } from './Article/Delete'
import 'bootstrap/dist/css/bootstrap.min.css'

export const App = () => (
  <Router>
    <Container fluid style={{ padding: 0 }}>
      <Navbar color='dark' dark expand='md'>
        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to='/'>
                All articles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/article/new'>
                Create an article
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <ArticlesContextProvider>
        <Switch>
          <Route path='/article/new'>
            <CreateArticle/>
          </Route>
          <Route path='/article/:id/edit'>
            <EditArticle/>
          </Route>
          <Route path='/article/:id/delete'>
            <DeleteArticle/>
          </Route>
          <Route path='/article/:id'>
            <ArticleDetail/>
          </Route>
          <Route path='/'>
            <ArticlesList/>
          </Route>
        </Switch>
      </ArticlesContextProvider>
    </Container>
  </Router>
  )
