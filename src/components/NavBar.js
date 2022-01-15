import React, { Component } from 'react';

class NavBar extends Component {



  render(){
    return(
        <div className="nav">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header" style={{paddin:'10px'}}>
                        <h1 style={{fontSize:'25px',color:'black',border: '5px solid black',letterSpacing: '5px',padding: '2px'}}>
                        Leetedln<i style={{fontSize:'10px'}}>©</i>
                        </h1>

                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

export default NavBar;