import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '../app/store';
import { increment, decrement, incrementByAmount } from '../features/counterSlice';

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    const [amount, setAmount] = useState<number>(0);

    

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(decrement())}>Decrement -</button>
            <button style={{marginLeft:'6px'}} onClick={() => dispatch(increment())}>Increment +</button>
            <div style={{marginTop: '10px'}}>
                <input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                    style={{width: '60px'}}
                />
                <button
                    style={{marginLeft: '6px'}}
                    onClick={() => dispatch(incrementByAmount(amount))}
                >
                    Increment by Amount
                </button>
            </div>
        </div>
    );
};

export default Counter