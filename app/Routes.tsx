/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import Items from './components/pages/Items';
import Abilities from './components/Pages/Abilities';
import Craftables from './components/Pages/Craftables';
import Effects from './components/Pages/Effects';
import Enemies from './components/Pages/Enemies';
import Loot from './components/Pages/Loot';
import Shops from './components/Pages/Shops';
import Settings from './components/Pages/Settings';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.ITEMS} component={Items} />
        <Route path={routes.ABILITIES} component={Abilities} />
        <Route path={routes.CRAFTABLES} component={Craftables} />
        <Route path={routes.EFFECTS} component={Effects} />
        <Route path={routes.ENEMIES} component={Enemies} />
        <Route path={routes.LOOT} component={Loot} />
        <Route path={routes.SHOP} component={Shops} />
        <Route path={routes.SETTINGS} component={Settings} />
      </Switch>
    </App>
  );
}
