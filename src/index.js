import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import ClickCounter from "./ClickCounter";
// import CounterPanel from './counterPanel/CounterPanel'
// import CounterPanelRedux from "./counterPanel_redux/CounterPanel";
// import Provider from "./redux_context_old/Provider";
// import Store from "./redux_context_old/Store";
// import Context from './redux_context_new/Context';
// import CounterPanel from "./redux_context_new/views/CounterPanel";
import CounterPanel from "./react_redux/views/CounterPanel";
// import store from "./react_redux/Store";
import { Provider } from 'react-redux';
import { view as Todo, store } from "./todo";
import { view as CountDown } from "./countDown";
import { view as Weather } from "./weather";

ReactDOM.render(
  <React.StrictMode>
    {/* 旧版的context写法 */}
    {/* <Provider store={Store}>
      <CounterPanelRedux />
    </Provider> */}

    {/* 新版的context写法 */}
    {/* <Context.Provider value={{ store: Store }}>
      <CounterPanel />
    </Context.Provider> */}

    {/* react-redux的context写法 */}
    <Provider store={store}>
      {/* todo实例 */}
      {/* <Todo /> */}

      {/* 以函数为子组件 */}
      <CountDown startCount={10}>
        {(count) => <div>{count}</div>}
      </CountDown>

      <Weather />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
