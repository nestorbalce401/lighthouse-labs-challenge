// Constants
const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "", "", "~", "", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

const UC_CHAR_CODE_START = "A".charCodeAt() - 1;
const CURRENT = "~";
const ROCK = "^";

// Functions
const gridSize = function() {
  let width = GRID[0].length;
  let height = GRID.length;
  return(`${width} x ${height}`);
}

const totalCells = function() {
  return GRID.reduce((result, row) => (result + row.length), 0);
}

const lightCell = function(coord) {
  const x = coord.slice(0,1).charCodeAt() - UC_CHAR_CODE_START;
  const y = coord.slice(1);
  const content = GRID[y - 1][x - 1]||"";
  return content;
}

const isRock = function(coord) {
  return lightCell(coord) == ROCK;
}

const isCurrent = function(coord) {
  return lightCell(coord) == CURRENT;
}

const lightRow = function(coordY) {
  return GRID[coordY];
}
