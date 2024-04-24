import {Dispatch, FC, SetStateAction} from "react";
import styled from "styled-components";
import LearnButton from "./buttons/LearnButton.tsx";
import CloseButton from "./buttons/CloseButton.tsx";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

interface HeaderBoxProps {
    current?: 'home' | 'other' ;
    text?: string;
    setPartyCount?: Dispatch<SetStateAction<number>>;
}

const HeaderBoxStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const HeaderText = styled.div`
  color: white;
  font-family: "VK Sans Display",serif;
  font-size: 32px;
`;

const HeaderBox: FC<HeaderBoxProps> = ({ current, text, setPartyCount } ) => {
    const routeNavigator = useRouteNavigator();

    if(current === "home") {
        return (
            <HeaderBoxStyled>
                <LearnButton visible={true} onClick={() => routeNavigator.push('tutorial')}/>
                <HeaderText>{text}</HeaderText>
                <CloseButton visible={false} onClick={() => {
                    routeNavigator.push('/');
                    setTimeout(() => setPartyCount?.(0), 1000);
                }}/> {/*Должно быть событие закрытия приложения*/}
            </HeaderBoxStyled>
        );
    } else {
        return (
            <HeaderBoxStyled>
                <CloseButton visible={true} onClick={() => {
                    routeNavigator.push('/');
                    setTimeout(() => setPartyCount?.(0), 1000);
                }}/>
                <HeaderText>{text}</HeaderText>
                <LearnButton visible={false}/>
            </HeaderBoxStyled>
        );
    }
};

export default HeaderBox;