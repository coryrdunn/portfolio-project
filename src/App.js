import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="homePage">
          <img className="homeImg" src="https://lh3.googleusercontent.com/LgfCYJ5G0G2Dm1uSZKE-5zu6HMtXGDJu7njc6vf3y6OWS-A9Ekm1ICKOiWGmsLnSUuvLdif1Z1TGxVxlmBW058r6s9gJD_x-ImFd-gcGV2-WlPzTyd3lqTwCKfdFPGzosCAQ5aPv9vNId3zfrXoHXQ1jmncC764oOP8VWZ2uCumrbPJBfenbbPfpbGDjxFIkiyv6LcXYmQVT826nYYerNwFu3GT0SM2h3sz8l-lD9mW0H1CnnE6qNT_xodHhzgf-OBMCeYjirC8p9k7JXSO-9TSupyUiT9dFrZqPDiGhGrhEiZqqVKS0OPkEYcjreG6qWZEIyAS_WcKJcRQTWAmhTOmgGbgSuztNtPsljE_cIcxee5dw3FPBivgKL3bHBJadlxpWs_XaExb1IidvaDwITRUC_A68qv1jxMHwF_z2d5xZPI5eNA_MIKgWmtDUuk5tSMKdrXvdudGEzFArPqs4_YxmPoSFlQ9i7cUUoBwaj-b1mNg6uGLy3VPCr0ZpXStJqPj9_0seGxk7kJQxpK6o4CSPuTbbQ-3u2prcPw8C6oDaHpLm_NEpBFaUcvneR2LaM7mrnZ32vsBwaPf1fDzosnPvZB9vu3qu6cHfcKMpWv2Zn08iYUIE=w2232-h1256-no" alt="mainImg" />
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
