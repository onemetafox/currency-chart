import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {getAll,selectCurrency} from '../actions/currencyAction';
const Example = () =>{
    Echo.channel('currency-channel').listen("ActionEvent", e=>{
        if(signal == "true"){
            setSignal("false")
        }else{
            setSignal("true");
        }
    })
    const [signal, setSignal] =  useState("true")
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAll());
    }, [signal])
    const currencyList = useSelector(selectCurrency);
    return(
        <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Currency Code A</th>
                  <th>Currency Code B</th>
                  <th>Date</th>
                  <th>Rate Sell</th>
                </tr>
              </thead>
              <tbody>
                {currencyList.map((item, index)=>{
                    return (
                    <tr key={index}>
                        <td>{index +1}</td>
                        <td>{item.currencyCodeA}</td>
                        <td>{item.currencyCodeB}</td>
                        <td>{item.date}</td>
                        <td>{item.rateCross}</td>
                    </tr>
                    );
                })}
              </tbody>
            </table>
        </div>
    );
}

export default Example;
