import React from 'react'
import '../Styles/Container.css'
import { Header } from './Header'
import { PlayerControls } from './PlayerControls'

const Container = () => {
  return (
    <div className="container">
      <Header />
      <PlayerControls />
    </div>
  )
}

export {Container}