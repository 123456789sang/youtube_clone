import React from 'react'
import Button from './Button'
const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Music"/> 
        <Button name="Bhojpuri_cinema"/> 
        <Button name="Albums"/> 
        <Button name="live"/>
        <Button name="News"/>

        <Button name="Movie"/>
        <Button name="Romantic_Comedy"/>
        <Button name="Mixes"/>
        <Button name="Watched"/>
    </div>
  )
}

export default ButtonList