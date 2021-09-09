import {useState} from 'react'
import './App.css';
import Navbar from './Componenets/Navbar';
import TextArea from './Componenets/TextArea';
import Alert from './Componenets/Alert';

function App(props) {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  let showAlert = (message,type) =>{
    setAlert({
       message : message,
       type : type
     })
  }


  let toggleMode = ()=>{
    if(mode == 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#15202b'
      document.body.style.color = 'white'
      showAlert('Dark Mode is Enabled','success')



    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light Mode is Enabled','dark')




    }
  }

  setTimeout(function(){
    setAlert(null)
  },3000)

  return (
<>

<Navbar mode={mode} toggleMode={toggleMode}/>
<Alert  alert={alert}/>
<TextArea mode = {mode} showAlert={showAlert}/>

</>



    );
}

export default App;
