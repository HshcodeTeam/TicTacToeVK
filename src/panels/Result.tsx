import {Dispatch, FC, SetStateAction} from "react";
import {Panel} from "@vkontakte/vkui";
import ThemeBox from "../components/design/ThemeBox.tsx";
import HeaderBox from "../components/HeaderBox.tsx";
import NavigationBox from "../components/NavigationBox.tsx";
import {InfoBoxOutlineTop} from "../components/design/InfoBoxOutlineTop.tsx";
import ResultIcon from "../components/design/ResultIcon.tsx";

interface ResultProps {
    id?: string;
    partyCount?: number;
    setPartyCount?: Dispatch<SetStateAction<number>>;
}

export const Result: FC<ResultProps> = ( { id, partyCount, setPartyCount } ) => {
    return (
        <Panel id={id}>
            <ThemeBox>
                <HeaderBox current="other" text="Результат"/>
                <>
                    {partyCount === 1 && <InfoBoxOutlineTop>Вы победили</InfoBoxOutlineTop>}
                    {partyCount === 1 && <ResultIcon result="win"/>}
                </>
                <>
                    {partyCount === 0 && <InfoBoxOutlineTop>Вы проиграли</InfoBoxOutlineTop>}
                    {partyCount === 0 && <ResultIcon result="lose"/>}
                </>
                <>
                    {partyCount === 2 && <InfoBoxOutlineTop>Ничья</InfoBoxOutlineTop>}
                    {partyCount === 2 && <ResultIcon result="dead_heat"/>}
                </>
                <NavigationBox
                    current="result"
                    setPartyCount = {setPartyCount}
                />
            </ThemeBox>
        </Panel>
    )
};