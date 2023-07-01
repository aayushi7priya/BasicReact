import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Header = () => {
  return (
    <nav>
      <h1> Pasta Amore </h1>
      <main>
        <HashLink to={"/"}> Home </HashLink>
        <HashLink to={"/contact"}> Contact </HashLink>
        <HashLink to = {"/#about"}> About </HashLink>
        <HashLink to = { "/#brands"}> Brands </HashLink>
        <HashLink to = {"/services"}> Menu </HashLink>
      </main>
    </nav>
  )
}

export default Header