// https://maxcode.dev/problems/islands-count/

const currentCellSurroundings = {
    topLeft: (y, x) => [y - 1, x - 1],
    top: (y, x) => [y - 1, x],
    topRight: (y, x) => [y - 1, x + 1],
    right: (y, x) => [y, x + 1],
    bottomRight: (y, x) => [y + 1, x + 1],
    bottom: (y, x) => [y + 1, x],
    bottomLeft: (y, x) => [y + 1, x - 1],
    left: (y, x) => [y, x - 1],
}

function countIslands(grid) {
    for (let y = 0; y < grid.length; y++) {
        const currentRow = grid[y];

        for (let x = 0; x < currentRow.length; x++) {
            if (grid[y][x] === 1) {
                helper(grid, y, x);
            }
        }
    }
}

function helper(grid, y, x) {
    console.log('cell', y, x);

    for (const cell in currentCellSurroundings) {
        const currentCell = currentCellSurroundings[cell];
        const [currentY, currentX] = currentCell(y, x);

        if (grid?.[currentY]?.[currentX] === 1) {
            helper(grid, currentY, currentX);
        }
    }

    console.log('---')
}

const grid = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [1,1,1,0,0,0,0,0,1,0],
    [0,0,0,0,0,1,1,1,0,0],
    [1,1,0,0,0,0,0,0,0,0],
];

helper(grid, 1, 2)

console.log(countIslands(grid)); // 3

// Если убрать нули и запятые, проще увидеть,
// что островов — три штуки.
//  [. . . . . . . . . .]
//  [. . 1 1 . . . . . .]
//  [. . 1 1 . . . . . .]
//  [. . . . . . . . 1 .]
//  [. . . . . 1 1 1 . .]
//  [1 1 . . . . . . . .]
