function initialize() {
    let players = playersJsonObject.players;
    for (let i = 0; i < players.length; i++) {
        let newLink = document.createElement('a');
        newLink.setAttribute("href", "../chess_animation/gamesList.html?playerId=" + players[i].playerId);

        let newDiv = document.createElement('div');
        newDiv.setAttribute("id", players[i].playerId);

        let newParagraph = document.createElement('p');
        newParagraph.innerHTML = players[i].fullName;
        newDiv.appendChild(newParagraph);

        newLink.appendChild(newDiv);
        document.body.appendChild(newLink);
    }
}