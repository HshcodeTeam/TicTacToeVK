import { FC, useState, useEffect } from "react";
import { NavIdProps, Panel } from "@vkontakte/vkui";
import NavigationBox from "../components/NavigationBox.tsx";
import ThemeBox from "../components/design/ThemeBox.tsx";
import HeaderBox from "../components/HeaderBox.tsx";
import InfoBox from "../components/InfoBox.tsx";
import styled from "styled-components";
import SquareButton from "../components/buttons/SquareButton.tsx";

const TrainingField = styled.div`
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

type Des = {
    [key: string]: string;
}

const Description: Des = {
    step_1: "Поставьте крестик в отмеченное место на поле",
    step_2: "Бот делает ход",
    step_3: "Сейчас вам надо хорошо обдумать следующий ход:",
    step_4: "Сделайте правильный ход",
    step_5: "Бот тоже не сдается и пытается помешать вам",
    step_6: "Подсказка! Попробуйте выстроить новый ряд",
    step_7: "Бот делает ход",
    step_8: "Бот просчитался, теперь вы можете выиграть",
}

const findIndexes = (array: string[], searchElement: string): number[] => {
    const indexes: number[] = [];
    array.forEach((element, index) => {
        if (element === searchElement) {
            indexes.push(index);
        }
    });
    return indexes;
};

export const Tutorial: FC<NavIdProps> = ({ id }) => {

    type actSteps = 'step_1' | 'step_2' | 'step_3' | 'step_4' | 'step_5' | 'step_6' | 'step_7' | 'step_8'

    const [types, setTypes] = useState(Array(9).fill('empty'));
    const [allowClick, setAllowClick] = useState(true);
    const [act, setAct] = useState<actSteps>('step_1')

    useEffect(() => {

        const crossIndexes = findIndexes(types, 'cross');
        const circleIndexes = findIndexes(types, 'circle');
        const emptyIndexes = findIndexes(types, 'empty');
        if (crossIndexes.length > 0 && !allowClick && act === 'step_1') {
            setAct('step_2')
            setTimeout(() => {
                computerClick();
            }, 500);
        }
        console.log("Current types after update:", types);
        console.log("Empty indexes after update:", emptyIndexes);
        console.log("cross:", crossIndexes);
        console.log("circle:", circleIndexes);
    }, [types]);

    const computerClick = () => {
        const emptyIndexes = findIndexes(types, 'empty');
        if (emptyIndexes.length > 0) {
            const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
            setTypes(prevTypes => prevTypes.map((type, index) => index === randomIndex ? 'circle' : type));
            setAllowClick(true);
        } else {
            console.log("No moves left");
        }
    };

    // const handleClick = (index: number) => {
    //     if (allowClick && types[index] === 'empty') {
    //         const newTypes = types.slice();
    //         newTypes[index] = 'cross';
    //         setTypes(newTypes);
    //         setAllowClick(false);
    //     }
    // };

    return (
        <Panel id={id}>
            <ThemeBox>
                <HeaderBox current="other" text="Обучение"/>
                {act === 'step_1' && <InfoBox depart={75} text={Description.step_1} />}
                {act === 'step_2' && <InfoBox depart={75} text={Description.step_2} />}
                {act === 'step_3' &&(
                    <>
                        <InfoBox depart={75} text={Description.step_3} />
                        <InfoBox depart={120} text={
                            <div>
                                <span style={{ textAlign: "left" }}>
                                    1. Постараться выстроить линию из трех: вертикально, горизонтально или по диагонали
                                    <br />
                                    <br />
                                    2. Не дать противнику выстроить три нолика в ряд
                                </span>
                            </div>
                        }/>
                    </>
                )}
                {act === 'step_4' && <InfoBox depart={75} text={Description.step_4} />}
                {act === 'step_5' && <InfoBox depart={75} text={Description.step_5} />}
                {act === 'step_6' && <InfoBox depart={75} text={Description.step_6} />}
                {act === 'step_7' && <InfoBox depart={75} text={Description.step_7} />}
                {act === 'step_8' && <InfoBox depart={75} text={Description.step_8} />}
                {act !== 'step_3' && (
                <TrainingField>
                    {types.map((type, index) => (
                        <SquareButton
                            key={index}
                            type={type}
                        />
                    ))}
                </TrainingField>
                )}
                <NavigationBox current="other" />
            </ThemeBox>
        </Panel>
    );
};

{/*


                <InfoBox depart={125}  text={
                    <span style={{textAlign: "left"}}>
                      1. Постараться выстроить линию из трех: вертикально, горизонтально или по диагонали
                        <br />
                        <br />
                      2. Не дать противнику выстроить три нолика в ряд
                    </span>
                }/>

*/}