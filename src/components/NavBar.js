import React, { Component } from 'react';

class NavBar extends Component {



  render(){
    return(
        <div className="nav">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header" style={{paddin:'10px'}}>
                        <h1 style={{fontSize:'25px',color:'black',border: '5px solid black',letterSpacing: '5px',padding: '2px'}}>
                        Specialized Success<i style={{fontSize:'10px'}}>©</i>
                        </h1>
                        {/* <a style={{fontFamily:'"Lucida Console", "Courier New", monospace',fontSize:'25px',color:'black',position:"absolute",top:'12px',left:'1328px'}} className="nav-item nav-link " href="#">About</a> */}

                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

export default NavBar;