const N = 8;

// global variables
var pieceMoves; // array of moves
var index; // tracks which move to consider next
var turn; // white or black
var finished; // game is finished or not (true/false)
var deadPieces = [];
var deadPiecesId = [];

function createPiece(cellId, pieceName, pieceColor) {
    let path = "Content/Images/chessPieces/" + pieceColor + pieceName + ".png";
    $(document).ready(function() {
        $("#" + cellId).append('<img>');
        $("#" + cellId).children().attr('src', path);
        $("#" + cellId).children().addClass(pieceColor + " " + pieceName);
    });
}

function removePiece(cellId) {
    $(document).ready(function() {
        $("#" + cellId).empty();
    });
}

// need to enable clicking after animation is done
function enableClick() {
    $("button").css({ "pointer-events": "auto" });
}

// need to disable clicking during animation
function disableClick() {
    $("button").css({ "pointer-events": "none" });
}

// checks weather a piece at cell with cellId exists
function isPiece(cellId) {
    let piece = document.getElementById(cellId).firstElementChild;
    if (piece == null)
        return false;
    else
        return true;
}

// handles animation and piece creation/removal
function movePiece(previousCellId, newCellId, reset = false) {

    let piece = document.getElementById(previousCellId).firstElementChild;
    let pieceColor = piece.classList[0];
    let pieceName = piece.classList[1];

    let posistionTo = $("#" + newCellId).offset();
    let posistionFrom = $("#" + previousCellId).offset();

    let positionTop = posistionTo.top - posistionFrom.top;
    let positionLeft = posistionTo.left - posistionFrom.left;

    disableClick();

    $("#" + previousCellId).children().animate({ top: positionTop, left: positionLeft }, 200, function() {
        // remove previous piece from its previous location
        removePiece(previousCellId);

        // remove if anything is on new location
        removePiece(newCellId);

        // create previous piece on new location
        createPiece(newCellId, pieceName, pieceColor);

        // if we undo move and if piece was killed, reset it
        if (reset) {
            let piece = deadPieces[deadPieces.length - 1];
            let id = deadPiecesId[deadPiecesId.length - 1];
            createPiece(id, piece.classList[1], piece.classList[0]);
            deadPieces.pop();
            deadPiecesId.pop();
        }

        enableClick();
    });

}

// sets variables according to next move
// calls movePiece for animation
function nextMove() {
    let currentMove;
    if (!finished) {
        if (turn == "white") {
            currentMove = pieceMoves[index].move[0];
            turn = "black";
        } else {
            currentMove = pieceMoves[index].move[1];
            turn = "white"
            index++;
        }
    }

    let previousCellId;
    let newCellId;

    if (currentMove != undefined) {
        if (currentMove.castle != undefined) {
            for (let i = 0; i < currentMove.castle.length; i++) {
                previousCellId = currentMove.castle[i].from;
                newCellId = currentMove.castle[i].to;
                movePiece(previousCellId, newCellId);
            }
        } else {
            previousCellId = currentMove.from;
            newCellId = currentMove.to;

            if (isPiece(newCellId)) {
                deadPiecesId.push(newCellId);
                deadPieces.push(document.getElementById(newCellId).firstElementChild);
            }
            movePiece(previousCellId, newCellId);
        }
    }

    if (currentMove == undefined || index == pieceMoves.length)
        finished = true;
}

// sets variables according to previous move
// calls movePiece for animation
function reverseMove() {
    let currentMove;
    if (turn == "white" && index == 0) // move was not made yet, can't undo
        return;

    if (turn == "black") {
        currentMove = pieceMoves[index].move[0];
        turn = "white";
    } else {
        index--;
        currentMove = pieceMoves[index].move[1];
        turn = "black";
    }

    let previousCellId;
    let newCellId;

    if (currentMove != undefined) {
        if (currentMove.castle != undefined) {
            for (let i = 0; i < currentMove.castle.length; i++) {
                previousCellId = currentMove.castle[i].to;
                newCellId = currentMove.castle[i].from;
                movePiece(previousCellId, newCellId);
            }
        } else {
            previousCellId = currentMove.to;
            newCellId = currentMove.from;

            let reset = false;
            if (previousCellId == deadPiecesId[deadPiecesId.length - 1])
                reset = true;

            movePiece(previousCellId, newCellId, reset);
        }
    }
    finished = false;
}

function initBoard() {

    for (let column = 97; column <= 104; column++)
        createPiece(String.fromCharCode(column) + 2, "Pawn", "white");

    createPiece("a1", "Rook", "white");
    createPiece("h1", "Rook", "white");
    createPiece("b1", "Knight", "white");
    createPiece("g1", "Knight", "white");
    createPiece("c1", "Bishop", "white");
    createPiece("f1", "Bishop", "white");
    createPiece("d1", "Queen", "white");
    createPiece("e1", "King", "white");


    for (let column = 97; column <= 104; column++)
        createPiece(String.fromCharCode(column) + 7, "Pawn", "black");

    createPiece("a8", "Rook", "black");
    createPiece("h8", "Rook", "black");
    createPiece("b8", "Knight", "black");
    createPiece("g8", "Knight", "black");
    createPiece("c8", "Bishop", "black");
    createPiece("f8", "Bishop", "black");
    createPiece("d8", "Queen", "black");
    createPiece("e8", "King", "black");

}

// dynamically create html board based on selected players color in a selected game
// selected player will be displayed on the bottom side of the board
function createBoard(color) {
    if (color == "white") {
        for (let row = 8; row >= 1; row--) {
            let newTr = document.createElement('tr');
            let colorFlag = (row % 2);
            for (let column = 97; column <= 104; column++) {
                let newTd = document.createElement('td');
                newTd.setAttribute("id", String.fromCharCode(column) + row);
                if (colorFlag == 0)
                    newTd.setAttribute("class", "light");
                else
                    newTd.setAttribute("class", "dark");

                colorFlag = 1 - colorFlag;
                newTr.appendChild(newTd);
            }

            let newTd = document.createElement('th');
            newTd.setAttribute("class", "number");
            newTd.innerHTML = row;
            newTr.appendChild(newTd);

            $("#chessboard").append(newTr);
        }

        let newTr = document.createElement('tr');
        for (let column = 97; column <= 104; column++) {
            let newTd = document.createElement('th');
            newTd.setAttribute("class", "letter");
            newTd.innerHTML = String.fromCharCode(column);
            newTr.appendChild(newTd)
        }
        $("#chessboard").append(newTr);

    } else {
        for (let row = 1; row <= 8; row++) {
            let newTr = document.createElement('tr');
            let colorFlag = 1 - (row % 2);
            for (let column = 104; column >= 97; column--) {
                let newTd = document.createElement('td');
                newTd.setAttribute("id", String.fromCharCode(column) + row);
                if (colorFlag == 0)
                    newTd.setAttribute("class", "light");
                else
                    newTd.setAttribute("class", "dark");

                colorFlag = 1 - colorFlag;
                newTr.appendChild(newTd);
            }

            let newTd = document.createElement('th');
            newTd.setAttribute("class", "number");
            newTd.innerHTML = row;
            newTr.appendChild(newTd);

            $("#chessboard").append(newTr);
        }

        let newTr = document.createElement('tr');
        for (let column = 104; column >= 97; column--) {
            let newTd = document.createElement('th');
            newTd.setAttribute("class", "letter");
            newTd.innerHTML = String.fromCharCode(column);
            newTr.appendChild(newTd)
        }
        $("#chessboard").append(newTr);
    }
}

function initialize() { // on page load initialize game

    let queryString = window.location.search;
    let parameters = new URLSearchParams(queryString);
    let gameId = parameters.get('gameId');

    let allMoves = movesJsonObject.gamesMoves; // array of moves for every game

    // choose specific game to be played based on gameId passed
    // as URL parameter from previous page
    for (let i = 0; i < allMoves.length; i++) {
        if (gameId == allMoves[i].gameId) {
            pieceMoves = allMoves[i].moves;
            break;
        }
    }

    let playerId = parameters.get('playerId');
    let gamesList = gamesJsonObject.games;

    let color;
    // get the color of current player in selected game
    for (let game = 0; game < gamesList.length; game++) {
        if (gamesList[game].gameId == gameId) {
            let players = gamesList[game].playerInfo;
            if (players[0].player == playerId)
                color = players[0].color;
            else
                color = players[1].color;
            break;
        }
    }


    createBoard(color);
    initBoard();

    index = 0;
    turn = "white";
    finished = false;
}