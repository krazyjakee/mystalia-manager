import React, { useEffect, useState } from 'react';
import * as fs from 'fs';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { userConfigStore } from '../../../utils/ConfigStore';
import ItemTable from './ItemTable';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      width: 'calc(100vw - 256px)',
      margin: 'auto',
      height: 'calc(100vh - 96px)',
      overflow: 'auto',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '40px 16px',
    },
  });

export type ContentProps = WithStyles<typeof styles>;

function Content(props: ContentProps) {
  const { classes } = props;
  const [items, setItems] = useState<any[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const gameDir = userConfigStore.get('gameDir');
    if (gameDir) {
      const loadedItems = JSON.parse(
        fs.readFileSync(`${gameDir}/src/utilities/data/items.json`, 'utf8')
      );
      setItems(loadedItems);
    }
  }, []);

  return (
    <Paper className={classes.paper}>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Filter by name"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
                onChange={(e) => setFilter(e.target.value)}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <ItemTable
          items={items.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )}
        />
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Content);
