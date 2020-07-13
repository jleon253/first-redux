import {createStore} from 'redux'
import reducer from './reducer'

console.log('En store')
const store = createStore(reducer)

export default store