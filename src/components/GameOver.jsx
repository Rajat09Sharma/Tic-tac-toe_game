import React from 'react'

export default function GameOver({winner,onRematch}) {
  return (
    <div id="game-over">
        <h2>Gmae over!</h2>
        {!winner?<p>Match Draw</p>:<p>{winner} won!</p>}
        <p><button onClick={onRematch}>Rematch</button></p>
    </div>

  )
}
