import { FC, ReactNode } from 'react';
import styled from "styled-components";

interface InfoBoxProps{
    depart?: number;
    text?: ReactNode;
}

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 76%;
  height: fit-content;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -75%);
  padding: 4% 3%;  
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.21);  
  text-align: center;
  color: #fff;
  font-family: "VK Sans Display",serif;
  font-size: 32px;
  font-weight: 400;
`;

const InfoBox: FC<InfoBoxProps> = ({ text, depart }) => {
    const coef: number = 50;

    // Вычисляем значение для свойства top
    const effectiveDepart = depart !== undefined ? depart : 0;
    const topValue = effectiveDepart - coef;

    return (
        <StyledInfo
            style={{
                transform: `translate(-50%, -${depart}%)`,
                top: `${topValue}%`
            }}
        >
            {text}
        </StyledInfo>
    );
};

export default InfoBox;