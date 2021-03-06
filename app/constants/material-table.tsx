import React, { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export const tableIcons = {
  Add: forwardRef<any>((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef<any>((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef<any>((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef<any>((props, ref) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef<any>((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef<any>((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef<any>((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef<any>((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef<any>((props, ref) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef<any>((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef<any>((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef<any>((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef<any>((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef<any>((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef<any>((props, ref) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef<any>((props, ref) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef<any>((props, ref) => (
    <ViewColumn {...props} ref={ref} />
  )),
};
