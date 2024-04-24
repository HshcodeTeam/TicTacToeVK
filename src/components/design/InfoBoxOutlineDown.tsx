import styled, { keyframes, css } from 'styled-components';
import { FC } from "react";

interface ForInfoBox {
    time?: number; // Определение времени как необязательного числового свойства
    children?: React.ReactNode; // Поддержка вложенных JSX элементов
}

// Определение анимации keyframes
const pulseBorder = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(6, 235, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(6, 235, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(6, 235, 255, 0.7);
  }
`;

// Стилизованный компонент с интегрированной анимацией
export const StyledInfoBoxOutlineDown = styled.div<{ time?: number }>`
  width: 50%;
  height: fit-content;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -25%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 4px solid #06EBFF;
  border-radius: 52px;
  background-color: rgba(0, 0, 0, 0);
  font-family: "VK Sans Display", serif;
  padding: 8px 12px;
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  transition: background-color 0.8s, box-shadow 0.8s, transform 0.8s;
  animation: ${({ time }) => css`${pulseBorder} ${time || 0}s infinite ease-in-out`};
`;
const InfoBoxOutlineDown: FC<ForInfoBox> = ({ time, children }) => {
    return (
        <StyledInfoBoxOutlineDown time={time}>
            {children}
        </StyledInfoBoxOutlineDown>
    );
};

export default InfoBoxOutlineDown;
