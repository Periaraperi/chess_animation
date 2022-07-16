function initialize() {
    let queryString = window.location.search;
    let parameters = new URLSearchParams(queryString);
    let playerId = parameters.get('playerId');

    let games = gamesJsonObject.games;

    let gamesToBeDisplayed = [];

    // display games on gamesList page that selected player has played
    for (let i = 0; i < games.length; i++) {
        if (games[i].playerInfo[0].player == playerId || games[i].playerInfo[1].player == playerId)
            gamesToBeDisplayed.push(games[i]);
    }

    for (let i = 0; i < gamesToBeDisplayed.length; i++) {
        let newLink = document.createElement('a');
        newLink.setAttribute("href", "../chess_animation/game.html?gameId=" + gamesToBeDisplayed[i].gameId + "&playerId=" + playerId);

        let newDiv = document.createElement('div');
        newDiv.setAttribute("id", gamesToBeDisplayed[i].gameId);

        let newParagraph = document.createElement('p');
        newParagraph.innerHTML = gamesToBeDisplayed[i].title;
        newDiv.appendChild(newParagraph);

        newLink.appendChild(newDiv);
        document.body.appendChild(newLink);
    }
}