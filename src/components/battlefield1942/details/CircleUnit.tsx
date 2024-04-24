import styled from 'styled-components';

const StyledCircleUnit = styled.div`
  width: 61px;
  height: 61px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FB9CFF;
  border: 4px solid #fff;
  border-radius: 100%;
  animation: fadeIn 0.5s forwards;

  @media (min-width: 600px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 550px) {
    width: 61px;
    height: 61px;
  }
`;

const CircleUnit = () => {
    return (
        <StyledCircleUnit />
    );
};

export default CircleUnit;