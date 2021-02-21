import React from 'react';

import './App.css';
// import { Link, Badge,Navbar, Nav, Form, NavDropdown , FormControl } from 'react-bootstrap';
import { Link} from 'react-bootstrap';


function App() {
  return (
    <div className="App">




      <p className="black-nav">🦄15 react bootstrap (쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치)</p>
      {/*(2)-3  */}
      <button type="button" class="btn btn-primary">Primary</button>

      <nav className="ig_nav">
      <Link to='/'>Home</Link>
      <Link to='/detail'>Detail</Link>
      <Link to='/component'>component</Link>
      <Link to='/component2'>component2</Link>
      <Link to='/main2'>main2</Link>
      <Link to='/detail2'>detail2</Link>
     </nav>


      

    </div>
  );
}

export default App;
