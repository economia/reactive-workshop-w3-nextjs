import React, { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import Link from 'next/link'

export const Navigation = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color='dark' dark expand='md'>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <Link href='/'>
              <NavLink>
                All articles
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/article/create'>
              <NavLink>
                Create an article
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}
