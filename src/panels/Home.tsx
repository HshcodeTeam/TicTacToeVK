import {Dispatch, FC, SetStateAction} from 'react';
import {
  Panel,
  NavIdProps,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import ChoiseForm from "../components/ChoiseForm.tsx";
import NavigationBox from "../components/NavigationBox.tsx";
import ThemeBox from "../components/design/ThemeBox.tsx";
import HeaderBox from "../components/HeaderBox.tsx";
import MainFieldDemo from "../components/MainFieldDemo.tsx";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
  setTypeGame?: Dispatch<SetStateAction<string>>;
}

export const Home: FC<HomeProps> = ({ id, setTypeGame}) => { //, fetchedUser
  //const { photo_200, city, first_name, last_name } = { ...fetchedUser };

  return (
    <Panel id={id}>
      <ThemeBox>
        <HeaderBox current="home" text="Главный экран"/>
        <MainFieldDemo />
        <ChoiseForm setTypeGame={setTypeGame}/>
        <NavigationBox current="home" />
      </ThemeBox>
    </Panel>
  );
};
