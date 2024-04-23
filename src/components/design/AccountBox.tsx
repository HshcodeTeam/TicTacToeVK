import styled from "styled-components";
import PrifileIcon from "./ProfileIcon.tsx";
import bodyProfilePink from "../../assets/profile_pink.svg";
import bodyProfileBlue from "../../assets/peofile_blue.svg";
import {UserInfo} from "@vkontakte/vk-bridge";
import {Dispatch, FC, SetStateAction} from "react";

interface AccountProps {
    value?: "X" | "O" | null;
    id?: string;
    fetchedUser?: UserInfo;
    partyCount?: number;
    setPartyCount?: Dispatch<SetStateAction<0 | 1 | 2 | 3>>;
    firtsPlayer?: string;
    secondPlayer?: string;
}

const StyledAccountBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 200px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const UnionProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfImage = styled.img`
  width: 56px;
`;

const ProfCheck = styled.p`
  margin: 0;
  font-family: Inter,serif;
  font-size: 36px;
  -webkit-text-stroke-width: 2px; // Ширина обводки
  -webkit-text-stroke-color: #fff; // Цвет обводки
`;

const ProfBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
`;

const Versus = styled.p`
  text-align: center;
  font-family: Inter,serif;
  font-size: 54px;  
`;

const AccountBox: FC<AccountProps> = ( {firtsPlayer, secondPlayer} ) => {
    return (
        <StyledAccountBox>
            <ProfBox>
                <ProfCheck style={{color: "#FB9CFF"}}>{secondPlayer}</ProfCheck>
                <UnionProfile style={{display: "flex", flexDirection: "column"}}>
                    <PrifileIcon color = "#FB9CFF"/>
                    <ProfImage src={bodyProfilePink} />
                </UnionProfile>
            </ProfBox>
            <Versus>VS</Versus>
            <ProfBox>
                <ProfCheck style={{color: "#06EBFF"}}>{firtsPlayer}</ProfCheck>
                <UnionProfile style={{display: "flex", flexDirection: "column"}}>
                    <PrifileIcon color = "#06EBFF"/>
                    <ProfImage src={bodyProfileBlue} />
                </UnionProfile>
            </ProfBox>
        </StyledAccountBox>
    );
};

export default AccountBox;