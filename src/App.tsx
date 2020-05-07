import React from 'react';
import './styles/index.scss';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  const a = 123;
  return (
    <div className="App">
      <header className="App-header">
       <Button autoFocus onClick={ (e) => alert(123)} >默认</Button>
       <Button btnType={ButtonType.Primary} >Primary</Button>
       <Button btnType={ButtonType.Danger}>Danger</Button>
       <Button size={ButtonSize.Large}>Large button</Button>
       <Button size={ButtonSize.Small}>Small button</Button>
       <Button disabled={true} btnType={ButtonType.Link} href={"http://www.baidu.com"}> Disabled link</Button>
       <Button disabled={false} btnType={ButtonType.Link}  href={"http://www.baidu.com"} target="_blank" >Link </Button>
       <Button disabled={true}>disabled </Button>
      </header> 
    </div>
  );
}

export default App;
