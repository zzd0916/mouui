import React from 'react';
import './styles/index.scss';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={ (index) => {alert(index)}}>
          <MenuItem index={0}>
            cool link 1
          </MenuItem>
          <MenuItem index={1} disabled>
            cool link 2
          </MenuItem>
          <MenuItem index={2}>
            cool link 3
          </MenuItem>
        </Menu>
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
