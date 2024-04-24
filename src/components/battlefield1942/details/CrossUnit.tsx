import styled from "styled-components";

const StyledCrossUnit = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: transparent;
  animation: fadeIn 0.5s forwards;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 111%;
    height: 5px;
    background-color: #06EBFF;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  @media (min-width: 600px) {
    width: 116px;
    height: 116px;

    &:before,
    &:after {
      height: 10px;
    }
  }

  @media (max-width: 600px) {
    width: 100px;
    height: 100px;

    &:before,
    &:after {
      height: 7px;
    }
  }

  @media (max-width: 550px) {
    width: 83px;
    height: 83px;
  }
`;

const CrossUnit = () => {
    return (
        <StyledCrossUnit />
    );
};

export default CrossUnit;