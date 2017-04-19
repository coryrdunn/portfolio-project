import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="homePage">
          <img className="homeImg" src="https://lh3.googleusercontent.com/P5mTu5H7ihe4jUyjYyLWVTggBpIztdqQbVXS_PkZpkZSa9KulIB8Yc5Na1dQsYUHpZy1Oy2WBP0t806VLiF6Bq-_oa5Q5EbF5p9hpvVLQX-qwfEIyEvYOYyztI4f5ST9lXvZkQLwqEYDOP63T6NY3nPNjb3a8TkcopfVpEEUUnN4AzA619Xv9xenx_DIEFguoxiPetsjgKWXZlJ6SUx7Vo5nILc4CF0CCIZY8R6pFZzgUBV9zj1J_0m1t5bWiLlrOTBjRJP_CGqklkat9aEEClU-VCkhpBcLFSs5AFvtwl2jGSMcble5_Iq8HQeO5GFKb2Khknn4uhQNUtiTMzzBYAN3YxD_4zXfzoh_vcyODG9vOa09crHlfiDkX0XqIBzyIcTmWIZwHdWXUgRIqrlimuLjasvX3J5d00CgI2SgWLkdsgZxLnU0OgputFnT3ALOLALnEnRMDP9aKCuzP-GGn1KpAxXZGX-uov9Ddap6Amc4PexLFuLpwhEPSji5Ta-5vV0DR9R5xrvYN2oimz_HfgJIhusRsDP3iCB1OWxzQ2VisqcmfFcZMbJ_xLvEuOiqcpbU6wXROuWwcT8ZB8Myvge1N25ZROqq3CTbmSjlCKYVnYkT=w360-h203-no" alt="mainImg" />
          <div className="homeTitle">Welcome To My Portfolio</div>
          <div className="homeDetails">
            A place to showcase projects, skills, and contact information.
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
