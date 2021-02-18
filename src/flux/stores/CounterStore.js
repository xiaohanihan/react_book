import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'
import { INCREMENT, DECREMENT } from '../ActionTypes'

const counterValues = {
  'First': 0,
  'Second': 1,
  'Third': 2,
}
const CHANGE_EVENT = 'changed';

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function () {
    return counterValues;
  },
  emitChanges: function () {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
})

CounterStore.dispatchToken = AppDispatcher.register(action => {
  if (action.type === INCREMENT)
  {
    counterValues[action.counterCaption]++;
    CounterStore.emitChanges();
  } else if (action.type === DECREMENT)
  {
    counterValues[action.counterCaption]--;
    CounterStore.emitChanges();
  }
})

export default CounterStore;