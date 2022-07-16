var movesJsonObject = JSON.parse(`{
    "gamesMoves": [{
            "gameId": "game1",
            "moves": [{
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "e2",
                            "to": "e4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "c7",
                            "to": "c5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "g1",
                            "to": "f3"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "e7",
                            "to": "e6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "d2",
                            "to": "d4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "c5",
                            "to": "d4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "f3",
                            "to": "d4"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "b8",
                            "to": "c6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "d4",
                            "to": "b5"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "d7",
                            "to": "d6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "c1",
                            "to": "f4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "e6",
                            "to": "e5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "f4",
                            "to": "e3"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "g8",
                            "to": "f6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "e3",
                            "to": "g5"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "c8",
                            "to": "e6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "b1",
                            "to": "c3"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "a7",
                            "to": "a6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "g5",
                            "to": "f6"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "g7",
                            "to": "f6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "b5",
                            "to": "a3"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "d6",
                            "to": "d5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "e4",
                            "to": "d5"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "f8",
                            "to": "a3"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "b2",
                            "to": "a3"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "d8",
                            "to": "a5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "d1",
                            "to": "d2"
                        },
                        {
                            "castle": [{
                                    "piece": "King",
                                    "color": "black",
                                    "from": "e8",
                                    "to": "c8"
                                },
                                {
                                    "piece": "Rook",
                                    "color": "black",
                                    "from": "a8",
                                    "to": "d8"
                                }
                            ]
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "f1",
                            "to": "c4"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "h8",
                            "to": "g8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "a1",
                            "to": "d1"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "e6",
                            "to": "f5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "c4",
                            "to": "d3"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "f5",
                            "to": "d3"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "d2",
                            "to": "d3"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "c6",
                            "to": "d4"
                        }
                    ]
                },
                {
                    "move": [{
                            "castle": [{
                                    "piece": "King",
                                    "color": "white",
                                    "from": "e1",
                                    "to": "g1"
                                },
                                {
                                    "piece": "Rook",
                                    "color": "white",
                                    "from": "h1",
                                    "to": "f1"
                                }
                            ]
                        },
                        {
                            "piece": "King",
                            "color": "black",
                            "from": "c8",
                            "to": "b8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "King",
                            "color": "white",
                            "from": "g1",
                            "to": "h1"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "a5",
                            "to": "a3"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "f2",
                            "to": "f4"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "d8",
                            "to": "c8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "c3",
                            "to": "e4"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "a3",
                            "to": "d3"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "c2",
                            "to": "d3"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "c8",
                            "to": "c2"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "d1",
                            "to": "d2"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "c2",
                            "to": "d2"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "e4",
                            "to": "d2"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "f6",
                            "to": "f5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "f4",
                            "to": "e5"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "g8",
                            "to": "e8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "f1",
                            "to": "e1"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "d4",
                            "to": "c2"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "e1",
                            "to": "e2"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "c2",
                            "to": "d4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "e2",
                            "to": "e3"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "d4",
                            "to": "c2"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "e3",
                            "to": "h3"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "e8",
                            "to": "e5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "d2",
                            "to": "f3"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "e5",
                            "to": "d5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "h3",
                            "to": "h7"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "d5",
                            "to": "d3"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "h2",
                            "to": "h4"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "c2",
                            "to": "e3"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "h7",
                            "to": "f7"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "d3",
                            "to": "d1"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "King",
                            "color": "white",
                            "from": "h1",
                            "to": "h2"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "d1",
                            "to": "a1"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "h4",
                            "to": "h5"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "f5",
                            "to": "f4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "f7",
                            "to": "f4"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "a1",
                            "to": "a2"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "f4",
                            "to": "e4"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "e3",
                            "to": "g2"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "King",
                            "color": "white",
                            "from": "h2",
                            "to": "g3"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "a2",
                            "to": "a5"
                        }
                    ]
                },
                {
                    "move": [{
                        "piece": "Knight",
                        "color": "white",
                        "from": "f3",
                        "to": "e5"
                    }]
                }
            ]
        },
        {
            "gameId": "game2",
            "moves": [{
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "e2",
                            "to": "e4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "c7",
                            "to": "c5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "g1",
                            "to": "f3"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "e7",
                            "to": "e6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "d2",
                            "to": "d4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "c5",
                            "to": "d4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "f3",
                            "to": "d4"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "b8",
                            "to": "c6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "d4",
                            "to": "b5"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "d7",
                            "to": "d6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "c2",
                            "to": "c4"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "g8",
                            "to": "f6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "b1",
                            "to": "c3"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "a7",
                            "to": "a6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "b5",
                            "to": "a3"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "d6",
                            "to": "d5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "c4",
                            "to": "d5"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "e6",
                            "to": "d5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "e4",
                            "to": "d5"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "c6",
                            "to": "b4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "f1",
                            "to": "e2"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "f8",
                            "to": "c5"
                        }
                    ]
                },
                {
                    "move": [{
                            "castle": [{
                                    "piece": "King",
                                    "color": "white",
                                    "from": "e1",
                                    "to": "g1"
                                },
                                {
                                    "piece": "Rook",
                                    "color": "white",
                                    "from": "h1",
                                    "to": "f1"
                                }
                            ]
                        },
                        {
                            "castle": [{
                                    "piece": "King",
                                    "color": "black",
                                    "from": "e8",
                                    "to": "g8"
                                },
                                {
                                    "piece": "Rook",
                                    "color": "black",
                                    "from": "h8",
                                    "to": "f8"
                                }
                            ]
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "e2",
                            "to": "f3"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "c8",
                            "to": "f5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "c1",
                            "to": "g5"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "f8",
                            "to": "e8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "d1",
                            "to": "d2"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "b7",
                            "to": "b5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "a1",
                            "to": "d1"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "b4",
                            "to": "d3"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "a3",
                            "to": "b1"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "h7",
                            "to": "h6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "g5",
                            "to": "h4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "b5",
                            "to": "b4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "c3",
                            "to": "a4"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "c5",
                            "to": "d6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "h4",
                            "to": "g3"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "a8",
                            "to": "c8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "b2",
                            "to": "b3"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "g7",
                            "to": "g5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "g3",
                            "to": "d6"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "d8",
                            "to": "d6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "g2",
                            "to": "g3"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "f6",
                            "to": "d7"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "f3",
                            "to": "g2"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "d6",
                            "to": "f6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "a2",
                            "to": "a3"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "a6",
                            "to": "a5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "a3",
                            "to": "b4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "white",
                            "from": "a5",
                            "to": "b4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "d2",
                            "to": "a2"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "f5",
                            "to": "g6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "d5",
                            "to": "d6"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "g5",
                            "to": "g4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "a2",
                            "to": "d2"
                        },
                        {
                            "piece": "King",
                            "color": "black",
                            "from": "g8",
                            "to": "g7"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "f2",
                            "to": "f3"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "f6",
                            "to": "d6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "f3",
                            "to": "g4"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "d6",
                            "to": "d4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "King",
                            "color": "white",
                            "from": "g1",
                            "to": "h1"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "d7",
                            "to": "f6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "f1",
                            "to": "f4"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "f6",
                            "to": "e4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "d2",
                            "to": "d3"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "e4",
                            "to": "f2"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "f4",
                            "to": "f2"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "g6",
                            "to": "d3"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "f2",
                            "to": "d2"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "d4",
                            "to": "e3"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "d2",
                            "to": "d3"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "c8",
                            "to": "c1"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "a4",
                            "to": "b2"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "e3",
                            "to": "f2"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "b1",
                            "to": "d2"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "c1",
                            "to": "d1"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "b2",
                            "to": "d1"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "e8",
                            "to": "e1"
                        }
                    ]
                }
            ]
        },
        {
            "gameId": "game3",
            "moves": [{
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "d2",
                            "to": "d4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "d7",
                            "to": "d5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "c2",
                            "to": "c4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "d5",
                            "to": "c4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "g1",
                            "to": "f3"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "g8",
                            "to": "f6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "e2",
                            "to": "e3"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "c8",
                            "to": "g4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "f1",
                            "to": "c4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "e7",
                            "to": "e6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "h2",
                            "to": "h3"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "g4",
                            "to": "h5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "b1",
                            "to": "c3"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "a7",
                            "to": "a6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "g2",
                            "to": "g4"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "h5",
                            "to": "g6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "f3",
                            "to": "e5"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "b8",
                            "to": "d7"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "e5",
                            "to": "g6"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "h7",
                            "to": "g6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "c4",
                            "to": "f1"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "c7",
                            "to": "c6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "f1",
                            "to": "g2"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "d8",
                            "to": "c7"
                        }
                    ]
                },
                {
                    "move": [{
                            "castle": [{
                                    "piece": "King",
                                    "color": "white",
                                    "from": "e1",
                                    "to": "g1"
                                },
                                {
                                    "piece": "Rook",
                                    "color": "white",
                                    "from": "h1",
                                    "to": "f1"
                                }
                            ]
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "f8",
                            "to": "e7"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "f2",
                            "to": "f4"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "d7",
                            "to": "b6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "g4",
                            "to": "g5"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "f6",
                            "to": "d7"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "d1",
                            "to": "g4"
                        },
                        {
                            "castle": [{
                                    "piece": "King",
                                    "color": "black",
                                    "from": "e8",
                                    "to": "c8"
                                },
                                {
                                    "piece": "Rook",
                                    "color": "black",
                                    "from": "a8",
                                    "to": "d8"
                                }
                            ]
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "a1",
                            "to": "b1"
                        },
                        {
                            "piece": "King",
                            "color": "black",
                            "from": "c8",
                            "to": "b8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "b2",
                            "to": "b4"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "b6",
                            "to": "d5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "c3",
                            "to": "a4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "f7",
                            "to": "f5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "g4",
                            "to": "g3"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "d5",
                            "to": "b4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "c1",
                            "to": "d2"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "b4",
                            "to": "d5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "f1",
                            "to": "c1"
                        },
                        {
                            "piece": "King",
                            "color": "black",
                            "from": "b8",
                            "to": "a7"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "g3",
                            "to": "e1"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "e7",
                            "to": "a3"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "c1",
                            "to": "c2"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "c7",
                            "to": "d6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "b1",
                            "to": "b3"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "d6",
                            "to": "e7"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "e1",
                            "to": "e2"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "d8",
                            "to": "b8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "e2",
                            "to": "d3"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "a3",
                            "to": "d6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "a4",
                            "to": "b2"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "h8",
                            "to": "c8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Knight",
                            "color": "white",
                            "from": "b2",
                            "to": "c4"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "d6",
                            "to": "c7"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "a2",
                            "to": "a4"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "b7",
                            "to": "b5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "a4",
                            "to": "b5"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "c6",
                            "to": "b5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "c2",
                            "to": "a2"
                        },
                        {
                            "piece": "King",
                            "color": "black",
                            "from": "a7",
                            "to": "b7"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "d2",
                            "to": "b4"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "e7",
                            "to": "e8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "b4",
                            "to": "d6"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "b8",
                            "to": "a8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "d3",
                            "to": "b1"
                        },
                        {
                            "piece": "King",
                            "color": "black",
                            "from": "b7",
                            "to": "c6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "b3",
                            "to": "a3"
                        },
                        {
                            "piece": "Pawn",
                            "color": "black",
                            "from": "b5",
                            "to": "c4"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "a3",
                            "to": "a6"
                        },
                        {
                            "piece": "Rook",
                            "color": "black",
                            "from": "a8",
                            "to": "a6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Rook",
                            "color": "white",
                            "from": "a2",
                            "to": "a6"
                        },
                        {
                            "piece": "Bishop",
                            "color": "black",
                            "from": "c7",
                            "to": "b6"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Bishop",
                            "color": "white",
                            "from": "d6",
                            "to": "c5"
                        },
                        {
                            "piece": "Queen",
                            "color": "black",
                            "from": "e8",
                            "to": "d8"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Queen",
                            "color": "white",
                            "from": "b1",
                            "to": "a1"
                        },
                        {
                            "piece": "Knight",
                            "color": "black",
                            "from": "d7",
                            "to": "c5"
                        }
                    ]
                },
                {
                    "move": [{
                            "piece": "Pawn",
                            "color": "white",
                            "from": "d4",
                            "to": "c5"
                        },
                        {
                            "piece": "King",
                            "color": "black",
                            "from": "c6",
                            "to": "c5"
                        }
                    ]
                },
                {
                    "move": [{
                        "piece": "Rook",
                        "color": "white",
                        "from": "a6",
                        "to": "a4"
                    }]
                }
            ]
        }
    ]
}`);