import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  STATISTICS: 'statistics',
  MARKET: 'market',
  TUTORIAL: 'tutorial',
  GAME: 'game',
  RESULT: 'result',
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.STATISTICS, `/${DEFAULT_VIEW_PANELS.STATISTICS}`, []),
      createPanel(DEFAULT_VIEW_PANELS.MARKET, `/${DEFAULT_VIEW_PANELS.MARKET}`, []),
      createPanel(DEFAULT_VIEW_PANELS.TUTORIAL, `/${DEFAULT_VIEW_PANELS.TUTORIAL}`, []),
      createPanel(DEFAULT_VIEW_PANELS.GAME, `/${DEFAULT_VIEW_PANELS.GAME}`, []),
      createPanel(DEFAULT_VIEW_PANELS.RESULT, `/${DEFAULT_VIEW_PANELS.RESULT}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());

