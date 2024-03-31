import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>

                    <div className='col-sm'>
                        <Remaining />
                    </div>

                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>

                    <div className='col-sm alert' style={{ backgroundColor: 'rgb(147,228,153)', size: 10, color: 'white', fontWeight: 'bold'}}>
                        <label>Currency</label>
                        <span>(</span>   
                        <select style={{ backgroundColor: 'rgb(147,228,153)', border: 'none', outline: 'none', color: 'white', padding: '2px'}}>
                            <option style={{ padding: '20px'}}>$ Dollar</option>
                            <option value="£">£ Pound</option>
                            <option value="€">€ Euro</option>
                            <option value="₹">₹ Ruppee</option>
                        </select>
                        <span>)</span>
                    </div>
                </div>
                <div className='col-sm'>
                    <ExpenseList />
                </div>

                <div className='col-sm'>
                    <ExpenseItem />
                </div>


                <div className='col-sm'>
                    <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
