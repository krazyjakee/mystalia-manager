import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RefreshIcon from '@material-ui/icons/Refresh';
import { ipcRenderer, remote } from 'electron';
import { userConfigStore } from '../../utils/ConfigStore';

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

  const [gameDir, setGameDir] = useState(userConfigStore.get('gameDir'));

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <FolderOpenIcon className={classes.block} color="inherit" />
          </Grid>
          <Grid item>
            <Typography>Game Source Folder</Typography>
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              placeholder=""
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput,
              }}
              value={gameDir}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.addUser}
              onClick={() => {
                const pathArray = remote.dialog.showOpenDialogSync({
                  properties: ['openDirectory'],
                });
                if (!pathArray) return;

                setGameDir(pathArray[0]);
                userConfigStore.set('gameDir', pathArray[0]);
              }}
            >
              Select Folder
            </Button>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Content);
