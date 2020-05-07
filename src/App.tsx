import React from 'react';
import './styles/index.scss';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  const a = 123;
  const b = 456;
  return (
    <div className="App">
      <header className="App-header">
       <Button>默认</Button>
       <Button btnType={ButtonType.Danger}>危险</Button>
       <Button size={ButtonSize.Large}>大小</Button>
       <Button disabled={true} btnType={ButtonType.Link} href={"http://www.baidu.com"}>Link </Button>
       <Button disabled={true} href={"http://www.baidu.com"}>disabled </Button>
       <Button disabled={true}>disabled </Button>
      </header> 
    </div>
  );
}

export default App;
