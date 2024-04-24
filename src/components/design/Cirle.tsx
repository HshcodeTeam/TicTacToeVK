import styled from "styled-components";

const StyledCirle = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgb(222, 8, 235), transparent 60%);
  filter: blur(250px);
  z-index: 1;
`;

const Cirle = () => {
    return (
        <StyledCirle />
    );
};

export default Cirle;