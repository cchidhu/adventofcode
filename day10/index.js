console.log('--- Day 10: Monitoring Station ---');

//Problem statement
//https://adventofcode.com/2019/day/10

const calcAngleDegrees = (p1, p2) => {
  return Math.atan2((p2.y - p1.y), (p2.x - p1.x)) * 180 / Math.PI;
}

// const inputString =
//   ".#..#,.....,#####,....#,...##"

// const inputString =
//   "#...##.####.#.......#.##..##.#.,#.##.#..#..#...##..##.##.#.....,#..#####.#......#..#....#.###.#,...#.#.#...#..#.....#..#..#.#..,.#.....##..#...#..#.#...##.....,##.....#..........##..#......##,.##..##.#.#....##..##.......#..,#.##.##....###..#...##...##....,##.#.#............##..#...##..#,###..##.###.....#.##...####....,...##..#...##...##..#.#..#...#.,..#.#.##.#.#.#####.#....####.#.,#......###.##....#...#...#...##,.....#...#.#.#.#....#...#......,#..#.#.#..#....#..#...#..#..##.,#.....#..##.....#...###..#..#.#,.....####.#..#...##..#..#..#..#,..#.....#.#........#.#.##..####,.#.....##..#.##.....#...###....,###.###....#..#..#.....#####...,#..##.##..##.#.#....#.#......#.,.#....#.##..#.#.#.......##.....,##.##...#...#....###.#....#....,.....#.######.#.#..#..#.#.....#,.#..#.##.#....#.##..#.#...##..#,.##.###..#..#..#.###...#####.#.,#...#...........#.....#.......#,#....##.#.#..##...#..####...#..,#.####......#####.....#.##..#..,.#...#....#...##..##.#.#......#,#..###.....##.#.......#.##...##"

const inputString =
  ".#..##.###...#######,##.############..##.,.#.######.########.#,.###.#######.####.#.,#####.##.#.##.###.##,..#####..#.#########,####################,#.####....###.#.#.##,##.#################,#####.##.###..####..,..######..##.#######,####.##.####...##..#,.#####..#.######.###,##...#.##########...,#.##########.#######,.####.#.###.###.#.##,....##.##.###..#####,.#.#.###########.###,#.#.#.#####.####.###,###.##.####.##.#..##"
let asteroidPositions = [];
//Process each position in the map
inputString.split(',').forEach((row, postionY) => {
  row.split('').forEach((column, positionX) => {
    //if position is not empty then add posotion to array
    if (column === '#') {
      asteroidPositions.push({ x: positionX, y: postionY })
    }
  })
})

console.log(asteroidPositions)
let bestLocationCount = 0;
let bestLocation;
asteroidPositions.forEach(pos1 => {
  let detectAsteriods = new Set();
  asteroidPositions.forEach(pos2 => {
    if (pos1 !== pos2) {
      detectAsteriods.add(calcAngleDegrees(pos1, pos2));
    }
  })
  console.log(`(${pos1.x},${pos1.y}) - ${detectAsteriods.size}`)
  if (detectAsteriods.size > bestLocationCount) {
    bestLocationCount = detectAsteriods.size;
    bestLocation = { ...pos1 }
  }
})

console.log(`The best location for a new monitoring station on this map at (${bestLocation.x},${bestLocation.y}) because it can detect ${bestLocationCount} asteroids`)

//Part 2

asteroidPositions.forEach(pos => {
  if(pos !== bestLocation) {
    console.log(`(${pos.x},${pos.y} - ${calcAngleDegrees(bestLocation,pos) + 90}`)
    detectAsteriods.add(calcAngleDegrees(pos1, pos2));
  }
})
