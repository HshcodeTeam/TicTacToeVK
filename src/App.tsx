import { useState, useEffect, ReactNode } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import {View, SplitLayout, SplitCol, ScreenSpinner} from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import {Home, Statistics, Market, Tutorial, Game, Result} from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';


export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState<UserInfo | undefined>();
  const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size="large" />);

  // Тип игры
  const [typeGame, setTypeGame] = useState< string >("")
  // Счет внутри партии
  const [partyCount, setPartyCount] = useState< number >(0);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const userID = fetchedUser?.id.toString();

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home
              id={'home'}
              fetchedUser={fetchedUser}
              setTypeGame={setTypeGame}
          />
          <Statistics id={'statistics'} />
          <Market id={'market'} />
          <Tutorial id={'tutorial'} />
          <Game
              id={'game'}
              fetchedUser={fetchedUser}
              userID = {userID}
              typeGame={typeGame}
              partyCount = {partyCount}
              setPartyCount = {setPartyCount}
          />
          <Result
              id={'result'}
              partyCount = {partyCount}
              setPartyCount = {setPartyCount}
          />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
