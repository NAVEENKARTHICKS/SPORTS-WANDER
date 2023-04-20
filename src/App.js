import 'bootstrap/dist/css/bootstrap.min.css'
import Page1 from './Components/Page1';
import Navbarmen from './Components/Navbarmen';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';

function App() {
  return (
   <>
   {<Navbarmen/>}
   {<Page1/>}
   {<Page2/>}
   {<Page3/>}
   {<Page4/>}
   </>
  );
}

export default App;
