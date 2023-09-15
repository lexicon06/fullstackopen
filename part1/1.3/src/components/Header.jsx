import React from 'react'

function Header(props) {
  console.log(props)
  return (
    <header><h1>{props.course}</h1></header>
  )
}

export default Header