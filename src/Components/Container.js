import React from 'react'
import '../Styles/Container.css'
import { Header } from './Header'
import { PlayerControls } from './PlayerControls'
import { User } from './User'

const Container = () => {
  return (
    <div className="container">
      <Header />
      <User />
      <PlayerControls />
    </div>
  )
}

export {Container}