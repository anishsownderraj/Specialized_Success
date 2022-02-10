import React from 'react';

class Login extends React.Component{

    render(){
        return(
            <div>
                <div className='title-style' style={{padding:'5px',background:'#73AD21',borderRadius:'25px',position: 'absolute',top:'100px',left:'8px'}}>Let's get a better knowledge about your software engineering skillset!</div>
                {/* <div className='title-style' style={{padding:'5px',background:'#73AD21',borderRadius:'25px',position: 'absolute',top:'150px',left:'8px'}}>Please sign in below</div> */}
                <form style={{bottom:"1000px",backgroundColor: 'white',padding:'50px',background:'#2e3856',borderRadius:'25px',right:'50px'}}>
                    <h1 style={{color: "whitesmoke"}}>Login</h1>
                    <p style={{color: "whitesmoke"}}>Please enter your information below</p>
                    <hr style={{color: "grey"}}></hr>
                    <div className="form-group row">
                        <label style={{fontSize:'25px',color:'black',paddingRight:'200px',right:'5px'}} for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label style={{fontSize:'25px',color:'black',paddingRight:'200px',right:'5px'}} for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"></input>
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button style={{padding:'5px',borderRadius:'25px'}} onClick={() => this.props.navigate('/card')} type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login