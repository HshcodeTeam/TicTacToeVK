import {useState, useCallback, useEffect} from 'react';
import styled from "styled-components";
import SquareButton from "../buttons/SquareButton.tsx";

const StyledField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 66%;
  height: 31%;
  border: 10px solid #DE08EB;
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;
  
  @media (min-width: 600px) {
    width: 399px;
    height: 399px;
  }

  @media (max-width: 600px) {
    width: 350px;
    height: 350px;
    border: 9px solid #DE08EB;
  }

  @media (max-width: 550px) {
    width: 300px;
    height: 300px;
  }
`;

const Battlefield = () => {
    const [types, setTypes] = useState(Array(9).fill('empty'));
    const [allowClick, setAllowClick] = useState(true);

    interface Winner {
        [key: string]: number[];
    }

    const winConditions: Winner = {
        row1: [0, 1, 2],  // Первая строка
        row2: [3, 4, 5],  // Вторая строка
        row3: [6, 7, 8],  // Третья строка
        col1: [0, 3, 6],  // Первый столбец
        col2: [1, 4, 7],  // Второй столбец
        col3: [2, 5, 8],  // Третий столбец
        diag1: [0, 4, 8], // Главная диагональ
        diag2: [2, 4, 6]  // Побочная диагональ
    };

    function isWin(crossIndexes: number[], winConditions: Winner): boolean {
        for (const key in winConditions) {
            if (winConditions[key].every(index => crossIndexes.includes(index))) {
                console.log(`Winning condition met: ${key}`);
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        const crossIndexes = types.map((type, index) => type === 'cross' ? index : -1).filter(index => index !== -1);
        const circleIndexes = types.map((type, index) => type === 'circle' ? index : -1).filter(index => index !== -1);
        const emptyIndexes = types.map((type, index) => type === 'empty' ? index : -1).filter(index => index !== -1);
        if (emptyIndexes.length > 0 && !allowClick) {
            setTimeout(() => {
                computerClick();
            }, 500);
        }
        console.log("Current types after update:", types);
        console.log("Empty indexes after update:", emptyIndexes);

        console.log("cross:", crossIndexes);
        console.log("circle:", circleIndexes);

        const playerWon = isWin(crossIndexes, winConditions);
        const computerWon = isWin(circleIndexes, winConditions);

        console.log(playerWon ? 'Игрок победил' : computerWon ? 'Компьютер победил' : '')

    }, [types]);

    const computerClick = useCallback(() => {
        const emptyIndexes = types.map((type, index) => type === 'empty' ? index : -1).filter(index => index !== -1);
        if (emptyIndexes.length > 0) {
            const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
            setTypes(prevTypes => prevTypes.map((type, index) => index === randomIndex ? 'circle' : type));
            setAllowClick(true);
        } else {
            console.log("No moves left");
        }
    }, [types]);

    // const handleClick = useCallback((index: number) => {
    //     if (allowClick && types[index] === 'empty') {
    //         const newTypes = types.slice();
    //         newTypes[index] = 'cross';
    //         setTypes(newTypes);
    //         setAllowClick(false);
    //     }
    // }, [types, allowClick]);

    return (
        <StyledField>
            {types.map((type, index) => (
                <SquareButton
                    key={index}
                    // onClick={() => handleClick(index)}
                    type={type}
                />
            ))}
        </StyledField>
    );
};

export default Battlefield;