import './App.css';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from "./screens/SecondScreen.js"
import FifthScreen from './screens/FifthScreen.js';
import PrivacyPolicy from './components/privacy/Privacy.js';
function App() {
  return <>
  <FirstScreen/>
<SecondScreen/>
<FifthScreen/>
      <ThirdScreen/>


  <ForthScreen/>
  <PrivacyPolicy 
  ownerName="ליגל גרבי" 
  email="Ligal.mild2018@gmail.com" 
  phone="+972 53-420-6408" 
  domain="http://ligal-makeup.co.il/" 
/>
  <ByMe/>
  </>
}

export default App;
