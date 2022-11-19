import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header.js';
import Pages from './pages/index.js';
import './assets/style/global.scss'
function App() {
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(false)
   const test = useSelector(state => state.counterSlice.test)
   return <div className="App">
      {loading ?
         <div>loading</div>
         :
         <div>
            <div>
               <Header />
            </div>
            <div>
               <Pages />
            </div>
         </div>
      }
   </div>
}
export default App;
