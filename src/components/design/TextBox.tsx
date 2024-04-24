import {FC} from 'react';
import styled from 'styled-components';

interface TextBoxProps {
    text?: string;
    marginTop?: number;
    font?: number;
}

const StyledTextBox = styled.p`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "VK Sans Display",serif;
  font-weight: 400;
`;

const TextBox: FC<TextBoxProps> = ( { text,marginTop, font } ) => {
    return (
        <StyledTextBox style={{top: `${marginTop}%`, fontSize: `${font}px`}}>
            { text }
        </StyledTextBox>
    );
};

export default TextBox;