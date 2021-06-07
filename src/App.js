import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import './App.css';

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />}></NavItem>
      <NavItem icon={<BellIcon />}></NavItem>
      <NavItem icon={<MessengerIcon />}></NavItem>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [height, setHeight] = useState(null);

  function calHeight(el) {
    const height = el.offsetHeight;
    setHeight(height);
  }

  function DropdownMenuItem(props) {
    return (
      <a
        href='#'
        className='menu-item'
        onClick={() => props.gotoMenu && setActiveMenu(props.gotoMenu)}
      >
        <span className='icon-button'> {props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className='dropdown' style={{ height: height }}>
      <CSSTransition
        unmountOnExit
        timeout={500}
        in={activeMenu === 'main'}
        onEnter={calHeight}
        classNames='menu-primary'
      >
        <div className='menu'>
          <DropdownMenuItem> My Profile</DropdownMenuItem>
          <DropdownMenuItem leftIcon={<CogIcon />} gotoMenu='settings'>
            {' '}
            Settings{' '}
          </DropdownMenuItem>
        </div>
      </CSSTransition>

      <CSSTransition
        unmountOnExit
        timeout={500}
        in={activeMenu === 'settings'}
        classNames='menu-secondary'
      >
        <div className='menu'>
          <DropdownMenuItem
            leftIcon={<ArrowIcon />}
            gotoMenu='main'
          ></DropdownMenuItem>
          <DropdownMenuItem> Settings </DropdownMenuItem>
          <DropdownMenuItem> Settings </DropdownMenuItem>
          <DropdownMenuItem> Settings </DropdownMenuItem>
          <DropdownMenuItem> Settings </DropdownMenuItem>
          <DropdownMenuItem> Settings </DropdownMenuItem>
          <DropdownMenuItem> Settings </DropdownMenuItem>
          <DropdownMenuItem> Settings </DropdownMenuItem>
          <DropdownMenuItem> Settings </DropdownMenuItem>
          <DropdownMenuItem> Settings </DropdownMenuItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
