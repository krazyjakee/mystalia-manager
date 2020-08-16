import React from 'react';
import {
  makeStyles,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Sprite from '../../Media/Sprite';

const useStyles = makeStyles({
  table: {
    overflow: 'scroll',
  },
});

export type ItemSpec = {
  id: number;
  name: string;
  spritesheet: string;
  spriteId: number;
  type?: string;
  equippable?: boolean;
  tags?: string[];
  damage?: [number, number];
  effect?: number;
  range?: number;
};

type Props = {
  items: ItemSpec[];
};

export default ({ items }: Props) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="center">Sprite</TableCell>
            <TableCell align="center">Spritesheet</TableCell>
            <TableCell align="center">SpriteId</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Equippable</TableCell>
            <TableCell align="center">Tags</TableCell>
            <TableCell align="center">Damage</TableCell>
            <TableCell align="center">Effect</TableCell>
            <TableCell align="center">Range</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(
            ({
              id,
              name,
              spriteId,
              spritesheet,
              type = 'unknown',
              equippable = false,
              tags = [],
              damage = null,
              effect = null,
              range = null,
            }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="center">
                  <Sprite
                    spriteId={spriteId}
                    spritesheet={spritesheet}
                    spriteSize={16}
                    sizeMultiplier={1.5}
                  />
                </TableCell>
                <TableCell align="center">{spritesheet}</TableCell>
                <TableCell align="center">{spriteId}</TableCell>
                <TableCell align="center">{type}</TableCell>
                <TableCell align="center">
                  {equippable ? <CheckIcon /> : <CloseIcon />}
                </TableCell>
                <TableCell align="center">{tags}</TableCell>
                <TableCell align="center">{damage?.join(' to ')}</TableCell>
                <TableCell align="center">{effect}</TableCell>
                <TableCell align="center">{range}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
