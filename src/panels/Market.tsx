import { FC } from "react";
import { NavIdProps, Panel } from "@vkontakte/vkui";
import NavigationBox from "../components/NavigationBox.tsx";
import ThemeBox from "../components/design/ThemeBox.tsx";
import HeaderBox from "../components/HeaderBox.tsx";
import Battlefield from "../components/battlefield1942/Battlefield.tsx";

export const Market: FC<NavIdProps> = ( { id } ) => {

    return (
        <Panel id={id}>
            <ThemeBox>
                <HeaderBox current="other" text="Магазин"/>
                <Battlefield />
                <NavigationBox current="market"/>
            </ThemeBox>
        </Panel>
    )
}