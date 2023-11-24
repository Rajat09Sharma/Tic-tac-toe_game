import React from 'react'

export default function Logs({truns}) {
  return (
    <ol id="log">
    {truns.map(trun => <li key={`${trun.square.row}${trun.square.col}`}>{trun.playerSymbol} selected {trun.square.row},{trun.square.col}</li>)}
    </ol>
  )
}
