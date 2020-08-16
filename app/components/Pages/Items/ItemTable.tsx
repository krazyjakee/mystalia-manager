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
import Sprite from '../../Media/Sprite';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
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
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Sprite</TableCell>
            <TableCell align="right">Spritesheet</TableCell>
            <TableCell align="right">SpriteId</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Equippable</TableCell>
            <TableCell align="right">Tags</TableCell>
            <TableCell align="right">Damage</TableCell>
            <TableCell align="right">Effect</TableCell>
            <TableCell align="right">Range</TableCell>
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
                <TableCell align="right">
                  <Sprite
                    spriteId={spriteId}
                    spritesheet={spritesheet}
                    spriteSize={16}
                    sizeMultiplier={1.5}
                  />
                </TableCell>
                <TableCell align="right">{spritesheet}</TableCell>
                <TableCell align="right">{spriteId}</TableCell>
                <TableCell align="right">{type}</TableCell>
                <TableCell align="right">{equippable}</TableCell>
                <TableCell align="right">{tags}</TableCell>
                <TableCell align="right">{damage?.join(', ')}</TableCell>
                <TableCell align="right">{effect}</TableCell>
                <TableCell align="right">{range}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
