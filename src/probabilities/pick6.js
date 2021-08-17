// const teamPicks = [
//   ['Uriah Hall', 'Sean Strickland'],
//   ['Collin Anglin', 'Melsik Baghdasaryan'],
//   ['Bryan Barberena', 'Jason Witt'],
//   ['Chris Gruetzemacher', 'Rafa Garcia'],
//   ['Ryan Benoit', 'Zarrukh Adashev'],
//   ['Philip Rowe', 'Orion Cosce']
// ]

const lineups = [
  [0,0,0,0,0,0],
  [1,1,1,0,0,0],
  [0,1,0,0,0,0],
  [0,1,1,0,0,0],
  [1,0,0,0,0,0],
  [1,0,1,0,0,0],
  [1,1,0,0,0,0],
  [0,0,1,0,0,0],

  [0,0,0,1,1,1],
  [1,1,1,1,1,1],
  [0,1,0,1,1,1],
  [0,1,1,1,1,1],
  [1,0,0,1,1,1],
  [1,0,1,1,1,1],
  [1,1,0,1,1,1],
  [0,0,1,1,1,1],

  [0,0,0,0,1,0],
  [1,1,1,0,1,0],
  [0,1,0,0,1,0],
  [0,1,1,0,1,0],
  [1,0,0,0,1,0],
  [1,0,1,0,1,0],
  [1,1,0,0,1,0],
  [0,0,1,0,1,0],

  [0,0,0,0,1,1],
  [1,1,1,0,1,1],
  [0,1,0,0,1,1],
  [0,1,1,0,1,1],
  [1,0,0,0,1,1],
  [1,0,1,0,1,1],
  [1,1,0,0,1,1],
  [0,0,1,0,1,1],

  [0,0,0,1,0,0],
  [1,1,1,1,0,0],
  [0,1,0,1,0,0],
  [0,1,1,1,0,0],
  [1,0,0,1,0,0],
  [1,0,1,1,0,0],
  [1,1,0,1,0,0],
  [0,0,1,1,0,0],

  [0,0,0,1,0,1],
  [1,1,1,1,0,1],
  [0,1,0,1,0,1],
  [0,1,1,1,0,1],
  [1,0,0,1,0,1],
  [1,0,1,1,0,1],
  [1,1,0,1,0,1],
  [0,0,1,1,0,1],

  [0,0,0,1,1,0],
  [1,1,1,1,1,0],
  [0,1,0,1,1,0],
  [0,1,1,1,1,0],
  [1,0,0,1,1,0],
  [1,0,1,1,1,0],
  [1,1,0,1,1,0],
  [0,0,1,1,1,0],

  [0,0,0,0,0,1],
  [1,1,1,0,0,1],
  [0,1,0,0,0,1],
  [0,1,1,0,0,1],
  [1,0,0,0,0,1],
  [1,0,1,0,0,1],
  [1,1,0,0,0,1],
  [0,0,1,0,0,1]
]

const compute = (fights) => {
  let possibleLineups = []
  lineups.forEach(lineup => {
    possibleLineups.push(fights.map((fight, idx) => {
          return fight[lineup[idx]]
      }))
  })

  return possibleLineups
}

// const picks = compute(teamPicks)
// console.log(picks, 'length ' + picks.length)

export default compute;