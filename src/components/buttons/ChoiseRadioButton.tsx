import { FC } from 'react';
import styled from "styled-components";

interface ChoiseRadioButtonProps {
    title?: string;
    checked?: boolean;
    onChange?: () => void;
}

const ChoiseRadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 18px 0;
  font-family: "VK Sans Display";
  font-weight: 400;
  font-size: 32px;
  color: #fff;
`;

const ChoiseRadioButtonInput = styled.input`
  margin-right: 16px;
  font-size: 3em;
  width: 38px;
  height: 38px;

  border: 5px solid #fff;
  background-clip: border-box;
  
  border-radius: 50%;
  appearance: none;
  transition: background-color 0.3s, box-shadow 0.3s;
  
  &:checked {
    background-color: #06EBFF;
    box-shadow: 0px 0px 0px 4px rgba(0, 123, 255, 0.5);
  }
`;

const ChoiseRadioButton: FC<ChoiseRadioButtonProps> = ( { title, checked, onChange } ) => {
    return (
        <ChoiseRadioButtonLabel>
            <ChoiseRadioButtonInput
                type="radio"
                checked={checked}
                onChange={onChange}
            />
            {title}
        </ChoiseRadioButtonLabel>
    );
};

export default ChoiseRadioButton;