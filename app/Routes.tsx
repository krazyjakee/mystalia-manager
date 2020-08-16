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
        <Route exact path={routes.ROOT} component={Items} />
        <Route exact path={routes.ITEMS} component={Items} />
        <Route exact path={routes.ABILITIES} component={Abilities} />
        <Route exact path={routes.CRAFTABLES} component={Craftables} />
        <Route exact path={routes.EFFECTS} component={Effects} />
        <Route exact path={routes.ENEMIES} component={Enemies} />
        <Route exact path={routes.LOOT} component={Loot} />
        <Route exact path={routes.SHOP} component={Shops} />
        <Route exact path={routes.SETTINGS} component={Settings} />
      </Switch>
    </App>
  );
}
