import { configureStore } from '@reduxjs/toolkit';
import CurrencyReducer from './actions/currencyAction';
export default configureStore({
    reducer: {
        'currencyData': CurrencyReducer
    },
});