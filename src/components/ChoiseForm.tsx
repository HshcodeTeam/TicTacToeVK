import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import styled from "styled-components";
import ChoiseRadioButton from "./buttons/ChoiseRadioButton.tsx";
import StartButton from "./buttons/StartButton.tsx";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

interface ChoiseFormProps {
    setTypeGame?: Dispatch<SetStateAction<string>>;
}

const RadioForm = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        
        width: 100%;
        height: 67%;
    `;

const RadioBox = styled.div`
        padding: 5% 0;
    `;

const ChoiseForm: FC<ChoiseFormProps> = ({setTypeGame}) => {

    const [selectedValue, setSelectedValue] = useState<string>('classic');

    const routeNavigator = useRouteNavigator();

    const handleRadioChange = (value: string) => () => {
        setSelectedValue(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedValue === 'classic') {
            routeNavigator.push('game');
            setTypeGame?.(selectedValue);
        } else if (selectedValue === 'giveaways') {
            console.log('Selected option:', selectedValue);
        }
    };

    return (
        <RadioForm onSubmit={handleSubmit}>
            <RadioBox>
                <ChoiseRadioButton
                    title="Классика"
                    checked={selectedValue === "classic"}
                    onChange={handleRadioChange("classic")}
                />
                <ChoiseRadioButton
                    title="Поддавки"
                    checked={selectedValue === "giveaways"}
                    onChange={handleRadioChange("giveaways")}
                />
                <ChoiseRadioButton
                    title="Игра с ботом"
                    checked={selectedValue === "bot"}
                    onChange={handleRadioChange("bot")}
                />
            </RadioBox>
            <StartButton type="submit" />
        </RadioForm>
    );
};

export default ChoiseForm;