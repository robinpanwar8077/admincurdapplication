
import './App.css';
import Form from  './Form' 
import Welcome from  './Welcome' 
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Detail from './Detail';

function App() {
 
  
  return (
    <div className="App">
      
    
   <BrowserRouter>
  
         
        
          <Routes>
         
       
          <Route path="/form"element={<Form/>}/> 
          <Route path="/welcome"element={<Welcome/>}/> 
          <Route path=':id/details' element={<Detail/>}/>
         
       
         
         
       
     </Routes> 
         </BrowserRouter>  
  
    </div>
  );
}

export default App;
