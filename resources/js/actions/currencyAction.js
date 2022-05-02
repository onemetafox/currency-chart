import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {setting, conf} from '../config';
export const slice = createSlice({
  name: 'currencyData',
  initialState: {
      currency: []
  },
  reducers: {
    getAllData: (state, action) => {
      state.currency = action.payload;
    },
    
  },
});

export const { getAllData} = slice.actions;

export const getAll = () => dispatch =>{
    axios.post('http://localhost:8000/api/currency/list')
        .then(response => {
            var data = response.data;
            dispatch(getAllData(data));
        })
        .catch(() => {
    });
}

export const selectCurrency = state => state.currencyData.currency;

export default slice.reducer;