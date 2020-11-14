import React from 'react';
import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';



export default function run(App=import('./App'), selector='root', store=null ){
  startUpReactApp(App, selector)
  //! here you can switch from a React app to a Vue app
  // startUpVueApp(App, selector, store)
}



export function startUpReactApp(App, selector){
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(selector)
  );
  
  // const rootElement = document.getElementById(selector)

  // ReactDOM.createRoot(rootElement).render(<App />);
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

  
  // reportWebVitals();

}


export function startUpVueApp(App, selector, store=null){
  // return new Vue({
  //   store,
  //   render: h => h(App),
  // }).$mount(selector);
}