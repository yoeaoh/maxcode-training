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
    let islandCount = 0;

    for (let y = 0; y < grid.length; y++) {
        const currentRow = grid[y];

        for (let x = 0; x < currentRow.length; x++) {
            if (grid[y][x] === 1) {
                islandCount += 1;
                helper(grid, y, x);
            }
        }
    }

    return islandCount;
}

function helper(grid, y, x) {
    for (const direction in currentCellSurroundings) {
        const getDirectionCoordinates = currentCellSurroundings[direction];
        const [currentY, currentX] = getDirectionCoordinates(y, x);

        if (grid?.[currentY]?.[currentX] === 1) {
            grid[currentY][currentX] = 'x';
            helper(grid, currentY, currentX);
        }
    }
}

const grid = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [1,1,1,0,0,0,0,0,1,0],
    [0,0,0,0,0,1,1,1,0,0],
    [1,1,0,0,0,0,0,0,0,0],
];

console.log(countIslands(grid)); // 3

// Если убрать нули и запятые, проще увидеть,
// что островов — три штуки.
//  [. . . . . . . . . .]
//  [. . 1 1 . . . . . .]
//  [. . 1 1 . . . . . .]
//  [. . . . . . . . 1 .]
//  [. . . . . 1 1 1 . .]
//  [1 1 . . . . . . . .]
