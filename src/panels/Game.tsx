import React, {useState, useEffect, useCallback, Dispatch, SetStateAction} from "react";
import { Panel } from "@vkontakte/vkui";
import ThemeBox from "../components/design/ThemeBox.tsx";
import NavigationBox from "../components/NavigationBox.tsx";
import CrossUnit from "../components/battlefield1942/details/CrossUnit.tsx";
import CircleUnit from "../components/battlefield1942/details/CircleUnit.tsx";
import {StyledField} from "../components/battlefield1942/StyledField.tsx";
import {SquaredButton} from "../components/battlefield1942/details/SquaredButton.tsx";
import HeaderBox from "../components/HeaderBox.tsx";
import bridge, {UserInfo} from "@vkontakte/vk-bridge";
import TextBox from "../components/design/TextBox.tsx";
import AccountBox from "../components/design/AccountBox.tsx";
import InfoBoxOutlineDown from "../components/design/InfoBoxOutlineDown.tsx";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

interface GameProps {
    value?: "X" | "O" | null;
    id?: string;
    fetchedUser?: UserInfo;
    userID?: string;
    typeGame?: string;
    partyCount?: number;
    setPartyCount?: Dispatch<SetStateAction<number>>;
}

async function fetchUserNameById(userId: number): Promise<string> {
    return  bridge.send('VKWebAppGetUserInfo', {user_id: userId}).then((data) => {
        if (data.first_name) {
            return data.first_name;
        }
        else {
            return "Анонимус";
        }
    }).catch((error) => {
        console.log(error)
        return "Анонимус";
    });
}

export const Game: React.FC<GameProps> = (
    {
        id,
        userID,
        fetchedUser,
        partyCount,
        setPartyCount,
    } ) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [board, setBoard] = useState<("X" | "O" | null)[][]>(
        Array(3)
            .fill(null)
            .map(() => Array(3).fill(null)),
    );
    const [currentPlayerId, setCurrentPlayerId] = useState<string>("");
    const [opponentId, setOpponentId] = useState<string>("")

    const [userName, setUserName] = useState<string>('');
    const [opponentName, setOpponentName] = useState<string>('');

    const routeNavigator = useRouteNavigator();


    useEffect(() => {
            if (fetchedUser) {
                const ws = new WebSocket("ws://localhost:8080");
                setSocket(ws);

                if (!userID) {
                    return;
                }


                ws.onopen = () => {
                    setCurrentPlayerId(userID ?? `${fetchedUser?.id}`);
                    console.log("Connected to server. Player ID:", userID);
                    ws.send(JSON.stringify({type: "search_game", playerID: userID}));
                };

                ws.onmessage = (event) => {
                    const message = JSON.parse(event.data);

                    switch (message.type) {
                        case "start_game": {
                            setCurrentPlayerId(message.players[0]);
                            setOpponentId(userID === message.players[0] ? message.players[1] : message.players[0])

                            setGameStarted(true);
                            break;
                        }
                        case "update_board":
                            setBoard(message.board);
                            setCurrentPlayerId(message.currentPlayer);
                            break;
                        case "game_end":

                            // обработка ничьей
                            if (partyCount !== undefined && message.dead_heat) {
                                console.log(`The game was played in a draw`);
                                setPartyCount?.(2);
                                ws.close();
                                setTimeout(() => {
                                    routeNavigator.push('../result')
                                }, 1000);
                            }
                            // обработка ничьей

                            if (partyCount !== undefined && message.winner === userID) {
                                console.log(`${message.winner_name} You win!`);
                                setPartyCount?.(partyCount + 1);
                                ws.close();
                                setTimeout(() => {
                                    routeNavigator.push('../result')
                                }, 1000);
                            } else if (partyCount !== undefined) { // Здесь нужен проигравший
                                console.log(`Game Over!`);
                                setPartyCount?.(0);
                                ws.close();
                                setTimeout(() => {
                                    routeNavigator.push('../result')
                                }, 1000);
                            } else {
                                ws.close();
                                setTimeout(() => {
                                    routeNavigator.push('../result')
                                }, 1000);
                            }
                            break;
                        default:
                            console.log(message.type);
                            console.log("Unknown message type.");
                    }
                };
                return () => {
                    setOpponentName('');
                    ws.close();
                };
            }
        },
        [fetchedUser, partyCount, routeNavigator, setPartyCount, userID]);

    useEffect(() => {
        async function updatePlayerName() {
            if (userID && !userName) {
                const currentPlayerName = await fetchUserNameById(+userID);
                setUserName(currentPlayerName);

            }

            if (opponentId && !opponentName) {
                const opponentPlayerName = await fetchUserNameById(Number(+opponentId))
                setOpponentName(opponentPlayerName);

            }
        }
        updatePlayerName();
    }, [userID, userName, opponentId, opponentName]); // Обновил зависимости для useEffect



    const makeMove = useCallback(
        (x: number, y: number) => {
            if (socket && board[x][y] === null) {
                console.log("sending move");
                console.log("make_move", currentPlayerId, x, y);
                socket.send(
                    JSON.stringify({ type: "make_move", playerID: currentPlayerId, x, y }),
                );
            }
        },
        [socket, board, currentPlayerId],
    );




    return (
        <Panel id={id}>
            <ThemeBox>
                <HeaderBox current='other' text='Игра'/>
                    {gameStarted ? (
                        <>
                            {/*<TextBox text="до трёх побед" marginTop={6} font={24} />*/}
                            <AccountBox partyCount = {partyCount} firtsPlayer={userName} secondPlayer={opponentName}/>
                            <TextBox text="Классика" marginTop={30} font={32} />
                            <StyledField>
                                {board.map((row, i) =>
                                    row.map((cell, j) => (
                                        <SquaredButton
                                            key={`${i}-${j}`}
                                            onClick={() => makeMove(i, j)}
                                        >
                                            {cell === "X" && <CrossUnit/>}
                                            {cell === "O" && <CircleUnit/>}
                                        </SquaredButton>
                                    )),
                                )}
                            </StyledField>
                            {(currentPlayerId === userID?.toString() && <InfoBoxOutlineDown time={3}>{`${userName} Ваш ход`}</InfoBoxOutlineDown>)}
                            {(currentPlayerId !== userID?.toString() && <InfoBoxOutlineDown time={0}>{`Сейчас ходит ${opponentName}`}</InfoBoxOutlineDown>)}
                        </>
                    ) : (
                        <InfoBoxOutlineDown time={3}>Поиск игры...</InfoBoxOutlineDown>
                    )}
                <NavigationBox current="game"/>
            </ThemeBox>
        </Panel>
    );
};


