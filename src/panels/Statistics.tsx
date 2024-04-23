import {FC, useEffect, useState} from 'react'
import styled from "styled-components";
import { NavIdProps, Panel } from "@vkontakte/vkui";
import NavigationBox from "../components/NavigationBox.tsx";
import ThemeBox from "../components/design/ThemeBox.tsx";
import HeaderBox from "../components/HeaderBox.tsx";
import StatPoint from "../components/graphs/graphsUI/StatPoint.tsx";
import {Graphs} from "../components/graphs/Graphs.tsx";

const StyledWrapFPoint = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24%;
`;

const StyledGraphs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Statistics: FC<NavIdProps> = ({id}) => {

    const [size, setSize] = useState('200%');

    useEffect(() => {
        function handleResize() {
            // Здесь мы устанавливаем размер в 150% от меньшей стороны экрана
            const minWidth = window.innerWidth;
            const minHeight = window.innerHeight;
            minWidth < 361 && minHeight < 741 || minWidth < 541 && minHeight < 721 ? setSize('180%') : setSize('200%');
            minWidth < 414 ? setSize(`180%`) : setSize(`200%`);
            minHeight < 670 ? setSize('165%') : setSize('200%');
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [selectedId, setSelectedId] = useState<string | null>('win');

    const handleSelect = (id: string) => {
        setSelectedId(selectedId === id ? 'win' : id);
    };

    return (
        <Panel id={id}>
            <ThemeBox>
                <HeaderBox text="Статистика" />
                <StyledGraphs>
                    <Graphs size={size} progress={23} strokeWidth={45} />
                </StyledGraphs>
                <StyledWrapFPoint>
                    <StatPoint
                        colour={"06EBFF"}
                        text={"Победы"}
                        selected={selectedId === 'win'}
                        onClick={() => handleSelect('win')}
                    />
                    <StatPoint
                        colour={"FB9CFF"}
                        text={"Поражения"}
                        selected={selectedId === 'lose'}
                        onClick={() => handleSelect('lose')}
                    />
                    <StatPoint
                        colour={"B054F8"}
                        text={"Ничья"}
                        selected={selectedId === 'dead_heat'}
                        onClick={() => handleSelect('dead_heat')}
                    />
                </StyledWrapFPoint>
                <NavigationBox current="stat" />
            </ThemeBox>
        </Panel>
    );
};