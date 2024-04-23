import {Dispatch, FC, SetStateAction} from 'react';
import styled from "styled-components";
import DirButton from "./buttons/DirButton.tsx";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

interface NavigationBoxProps {
    current: "home" | "stat" | "market" | "game" | "result" | "other";
    setPartyCount?: Dispatch<SetStateAction<number>>;
}

const NavigateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 71%;
  height: 16%;
`;

const NavigateSquare = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;  
  align-items: center;
  align-self: center;
  width: 40%;
  height: 27%;
`;

const Separator = styled.div`
  display: flex;  
  flex-direction: row;
`;

const SecondSeparator = styled.div`
  padding: 8% 25px;
`;
const NavigationBox: FC<NavigationBoxProps> = ( { current, setPartyCount } ) => {
    const routeNavigator = useRouteNavigator();

    if (current === "home") {
        return (
            <NavigateBox>
                <DirButton onClick={() => routeNavigator.push('statistics')} directory="STATISTICS" />
                <DirButton onClick={() => routeNavigator.push('/')} directory="HOME"/>
                <DirButton onClick={() => routeNavigator.push('market')} directory="MARKET"/>
            </NavigateBox>
        );
    } else if (current === "stat") {
        return (
            <NavigateBox>
                <DirButton onClick={() => routeNavigator.push('')} directory="STATISTICS" />
                <DirButton onClick={() => routeNavigator.push('/')} directory="HOME"/>
                <DirButton onClick={() => routeNavigator.push('../market')} directory="MARKET"/>
            </NavigateBox>
        );
    } else if (current === "market") {
        return (
            <NavigateBox>
                <DirButton onClick={() => routeNavigator.push('../statistics')} directory="STATISTICS" />
                <DirButton onClick={() => routeNavigator.push('/')} directory="HOME"/>
                <DirButton onClick={() => routeNavigator.push('')} directory="MARKET"/>
            </NavigateBox>
        );
    } else if (current === "result") {
        return (
            <NavigateSquare>
                <Separator>
                    <SecondSeparator>
                        <DirButton onClick={() => {
                            routeNavigator.push('../game');
                            setTimeout(() => setPartyCount?.(0), 1000);
                        }} directory="AGAIN" />
                    </SecondSeparator>
                    <SecondSeparator>
                        <DirButton onClick={() => {
                            routeNavigator.push('/');
                            setTimeout(() => setPartyCount?.(0), 1000);
                        }} directory="HOME"/>
                    </SecondSeparator>
                </Separator>
                <Separator>
                    <SecondSeparator>
                        <DirButton onClick={() => {
                            routeNavigator.push('../statistics');
                            setTimeout(() => setPartyCount?.(0), 1000);
                        }} directory="STATISTICS" />
                    </SecondSeparator>
                    <SecondSeparator>
                        <DirButton onClick={() => {
                            routeNavigator.push('../market');
                            setTimeout(() => setPartyCount?.(0), 1000);
                        }} directory="MARKET"/>
                    </SecondSeparator>
                </Separator>
            </NavigateSquare>
        );
    } else if (current === "game") {
        return (
            <NavigateBox>
                <DirButton onClick={() => {
                    routeNavigator.push('../statistics');
                    setTimeout(() => setPartyCount?.(0), 1000);
                }} directory="STATISTICS" />
                <DirButton onClick={() => {
                    routeNavigator.push('/');
                    setTimeout(() => setPartyCount?.(0), 1000);
                }} directory="HOME"/>
                <DirButton onClick={() => {
                    routeNavigator.push('../market');
                    setTimeout(() => setPartyCount?.(0), 1000);
                }} directory="MARKET"/>
            </NavigateBox>
        );
    } else if (current === "other") {
        return (
            <NavigateBox>
                <DirButton onClick={() => routeNavigator.push('../statistics')} directory="STATISTICS" />
                <DirButton onClick={() => routeNavigator.push('/')} directory="HOME"/>
                <DirButton onClick={() => routeNavigator.push('../market')} directory="MARKET"/>
            </NavigateBox>
        );
    }
};

export default NavigationBox;