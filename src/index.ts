import { SettingPinPage } from './pages/SettingPinPage/SettingPinPage';

import './index.styl';

const app = document.querySelector<HTMLDivElement>('.app');

const settingPinPage = new SettingPinPage(app);
