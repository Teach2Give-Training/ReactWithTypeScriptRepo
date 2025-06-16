import React from 'react';
import { Provider } from 'react-redux';
import {store} from '../src/app/store'
import Counter from '../src/components/Counter';
import './App.css'
import Todo from './components/Todo';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div>
                <h3>Redux Counter App</h3>
                <Counter />
                <hr />
                <Todo />
            </div>
        </Provider>
    );
};

export default App;