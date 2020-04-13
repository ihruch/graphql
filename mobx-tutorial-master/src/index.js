import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import DevTools from 'mobx-react-devtools';
import { observable, computed, configure, action} from 'mobx';
import { observer } from 'mobx-react';

configure({ enforceActions: 'observed'})

const nickName =  observable({
  name: "Igor",
  age: "30",
  
  get nickName() {
    console.log('Generate nickName');
    return `${this.name}_${this.age}`
  },

  increment(){ this.age++ },

  decrement(){ this.age-- },
}, {
  increment: action('Plus one'), // increment: action
  decrement: action('Minus one')
});

const todos =  observable([
  {text: 'Learn react'},
  {text: 'Learn mobx'}
]);



@observer class App extends Component {
  
  
  handleIncBtn =  () => { this.props.state.increment() }
  handleDecrBtn = () => { this.props.state.decrement() }
  
  render() {

    return (
      <div className="App">
        <DevTools />
        <h1>Hello MobX!</h1>
           <p>{this.props.state.nickName}</p>
           <p>{this.props.state.age}</p>
           <br />
           <button onClick={this.handleIncBtn}>+1</button>
           <button onClick={this.handleDecrBtn}>-1</button>
          {/* <ul>
            {todos.map( ({text}) => <li key={text}>{text}</li> )}
          </ul> */}
      </div>
    );

  }
}

ReactDOM.render(<App state={nickName}/>, document.getElementById('root'));
//ReactDOM.render(<App store={todos}/>, document.getElementById('root'));

serviceWorker.unregister();
