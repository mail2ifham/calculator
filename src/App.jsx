import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./sass/app.scss";
import Display from "./components/display/Display";
import KeyPad from "./components/keyPad/KeyPad";
import { useRef, useState } from "react";

function App() {

  const [value,setValue] = useState({mainValue:"",currentValue:""})
  const charCountRef = useRef(0)

  return (
    <main className="wrapper" >
      <Header />
      <Display value={value} charCountRef={charCountRef}/>
      <KeyPad value={value} setValue={setValue} charCountRef={charCountRef}/>
      <Footer />
    </main>
  );
}

export default App;


