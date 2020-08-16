import React from 'react';
import MaterialTable from 'material-table';
import { tableIcons } from '../../../constants/material-table';
import Sprite from '../../Media/Sprite';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

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
  return (
    <MaterialTable
      editable={{
        isEditable: () => true,
        isEditHidden: () => false,
        isDeletable: () => true,
        isDeleteHidden: () => false,
      }}
      cellEditable={{
        cellStyle: {},
        onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
          return new Promise((resolve, reject) => {
            console.log('newValue: ' + newValue);
            setTimeout(resolve, 0);
          });
        },
      }}
      title="Items"
      icons={tableIcons}
      columns={[
        { title: 'ID', field: 'id', type: 'numeric' },
        { title: 'Name', field: 'name', type: 'string', editable: 'always' },
        {
          title: 'Sprite',
          render: ({ spriteId, spritesheet }) => (
            <Sprite
              spriteId={spriteId}
              spritesheet={spritesheet}
              spriteSize={16}
              sizeMultiplier={1.5}
            />
          ),
          editable: 'never',
        },
        {
          title: 'Spritesheet',
          field: 'spritesheet',
          type: 'string',
          editable: 'always',
        },
        {
          title: 'Sprite ID',
          field: 'spriteId',
          type: 'numeric',
          editable: 'always',
        },
        { title: 'Type', field: 'type', type: 'string', editable: 'always' },
        {
          title: 'Equippable',
          field: 'equippable',
          type: 'boolean',
          editable: 'always',
        },
        { title: 'Tags', field: 'tags', type: 'string' },
        { title: 'Damage', field: 'damage', type: 'string' },
        {
          title: 'Effect',
          field: 'effect',
          type: 'numeric',
          editable: 'always',
        },
        { title: 'Range', field: 'range', type: 'numeric', editable: 'always' },
      ]}
      data={items}
    />
  );
};
