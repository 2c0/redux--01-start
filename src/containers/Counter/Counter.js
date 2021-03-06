import React, {Component} from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

  render() {
    return (
        <div>
          <CounterOutput value={this.props.ctr}/>
          <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
          <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
          <CounterControl label="Add 10" clicked={this.props.onAddFiveCounter}/>
          <CounterControl label="Subtract -15" clicked={this.props.onRemoveFiveCounter}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddFiveCounter: () => dispatch({type: 'ADD_FIVE', val: 10}),
    onRemoveFiveCounter: () => dispatch({type: 'SUB5', val: 15})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);