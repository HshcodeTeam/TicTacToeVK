import { FC } from 'react'
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

export const Statistics: FC<NavIdProps> = ({id}) => {

    return (
        <Panel id={id}>
            <ThemeBox>
                <HeaderBox text="Статистика" />
                <Graphs size={"200%"} progress={20} strokeWidth={45} />
                <StyledWrapFPoint>
                    <StatPoint  colour={"06EBFF"}  text={"Победы"}/>
                    <StatPoint  colour={"FB9CFF"}  text={"Поражения"}/>
                    <StatPoint  colour={"B054F8"}  text={"Ничья"}/>
                </StyledWrapFPoint>
                <NavigationBox current="stat" />
            </ThemeBox>
        </Panel>
    );
};