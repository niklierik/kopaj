const asd = `
♜♞♝♛♚♝♞♜
♟♟♟♟♟♟♟♟
□■□■□■□■
■□■□■□■□
□■□■□■□■
■□■□■□■□
♙♙♙♙♙♙♙♙
♖♘♗♕♔♗♘♖
`;

function indexToCoord(index: number) {
    return {
        x: index % 8,
        y: Math.floor(index / 8),
    };
}

function posToIndex({ x, y }: { x: number; y: number }) {
    return x + y * 8;
}

export function chess(boardTxt: string) {
    let board = boardTxt
        .replace('\n', '')
        .split('')
        .filter(v => v !== '\n');
    const white = '♜♞♝♛♚♝♞♜♟♟♟♟♟♟♟♟';
    const black = '♙♙♙♙♙♙♙♙♖♘♗♕♔♗♘♖';
    const whitePositions: number[] = [];
    const blackPositions: number[] = [];
    let i = 0;
    for (const piece of boardTxt) {
        if (piece === '♞') {
            whitePositions.push(i);
        }
        if (piece === '♘') {
            blackPositions.push(i);
        }
        i++;
    }
    board = filterMoves(whitePositions, white, board);
    board = filterMoves(blackPositions, black, board);
    const cpy = [];
    let j = 0;
    for (let i = 0; i < 64; i++) {
        cpy.push(board[i]);
        j++;
        if (j === 8) {
            cpy.push('\n');
            j = 0;
        }
    }
    cpy.pop();
    return cpy.join('');
}

function filterMoves(
    positions: number[],
    pieces: string,
    board: string[],
): string[] {
    for (const pos of positions) {
        for (const targetPos of moves(indexToCoord(pos))) {
            const index = posToIndex(targetPos);
            if (!pieces.includes(board[index])) {
                board[index] = 'X';
            }
        }
    }
    return board;
}

function moves(pos: { x: number; y: number }) {
    return [
        { x: 1, y: 2 },
        { x: 2, y: 1 },
        { x: 1, y: -2 },
        { x: 2, y: -1 },
        { x: -1, y: 2 },
        { x: -2, y: 1 },
        { x: -1, y: -2 },
        { x: -2, y: -1 },
    ]
        .map(v => {
            return {
                x: pos.x + v.x,
                y: pos.x + v.y,
            };
        })
        .filter(v => {
            return !(v.x < 0 || v.y < 0 || v.x >= 8 || v.y >= 8);
        });
}
