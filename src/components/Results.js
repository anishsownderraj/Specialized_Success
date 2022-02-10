import React from 'react';
import {recs} from './Reccomendations'

class Results extends React.Component {
    render(){
        var diff = 0;
        // .easy[0].text
        // const diff;

        const item = recs.reccs[this.props.value]
        console.log(this.props.value)
        if(this.props.value == 0){
            diff = item.easy
        } else if (this.props.value == 1){
            diff = item.medium
        } else {
            diff = item.hard
        }
        const round ={color:'black',padding:'5px',borderRadius:'25px',backgroundColor: `${diff[2].color}`}



        return(
            <div className="list-group">
                {/* <a href="#" className="list-group-item list-group-item-action" style={{font:'small-caption'}} >Your Results!!!</a> */}
                <h1 style={{color:'white',paddingLeft:'15px'}}>Your Results</h1>
                <br></br>

                <a style={{color:'black'}} href="#" className="list-group-item list-group-item-action list-group-item-primary" style={{color:'black',padding:'5px',borderRadius:'25px',backgroundColor: `${diff[0].color}`}

}>{diff[0].text}</a>
                <br></br>
                <a href="#" className="list-group-item list-group-item-action list-group-item-secondary" style={{color:'black',padding:'5px',borderRadius:'25px',backgroundColor: `${diff[1].color}`}

}>{diff[1].text}</a>
                <br></br>
                <a href="#" className="list-group-item list-group-item-action list-group-item-success" style={{color:'black',padding:'5px',borderRadius:'25px',backgroundColor: `${diff[2].color}`}

}>{diff[2].text}</a>
                <br></br>
                <a href="#" className="list-group-item list-group-item-action list-group-item-danger" style={{color:'black',padding:'5px',borderRadius:'25px',backgroundColor: `${diff[3].color}`}

}>{diff[3].text}</a>
                <br></br>
                <a href="#" className="list-group-item list-group-item-action list-group-item-warning" style={{color:'black',padding:'5px',borderRadius:'25px',backgroundColor: `${diff[4].color}`}

}>{diff[4].text}</a>
                <br></br>
                <a href="#" className="list-group-item list-group-item-action list-group-item-info" style={{color:'black',padding:'5px',borderRadius:'25px',backgroundColor: `${diff[5].color}`}

}>{diff[5].text}</a>
                <br></br>
                <a href="#" className="list-group-item list-group-item-action list-group-item-light" style={{color:'black',padding:'5px',borderRadius:'25px',backgroundColor: `${diff[6].color}`}

}>{diff[6].text}</a>
                <br></br>
                <a href="#" className="list-group-item list-group-item-action list-group-item-dark" style={{color:'black',padding:'5px',borderRadius:'25px',backgroundColor: `${diff[7].color}`}

}>{diff[7].text}</a>
            </div>

            );

        }

    }

export default Results;