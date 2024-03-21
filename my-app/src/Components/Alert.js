import React from 'react'

export default function Alert(props) {
   
    return (
props.alert &&  <div>
            <div className="alert alert-success" role="alert">
                {props.alert.type}:{props.alert.msg}

            </div>
        </div> 
    )
}
