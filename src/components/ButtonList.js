import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="sticky top-0 z-40 bg-white px-4 py-3 shadow-sm">
      <div className="flex gap-2  no-scrollbar whitespace-nowrap ">
        <Button name="All" />
        <Button name="Music" />
        <Button name="Bhojpuri_cinema" />
        <Button name="Albums" />
        <Button name="live" />
        <Button name="News" />
        <Button name="Movie" />
        <Button name="Romantic_Comedy" />
        <Button name="Mixes" />
        <Button name="Indian-pop music" />
        <Button name="T-series" />
        <Button name="Recently uploaded" />
        <Button name="movie musicals" />
        <Button name="Watched" />
      </div>
    </div>
  )
}

export default ButtonList
