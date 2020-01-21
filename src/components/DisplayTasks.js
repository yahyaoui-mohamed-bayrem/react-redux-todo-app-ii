import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTODO, removeTODO } from '../reduxMngment/actions/actionCreators.js';

class DisplayTasks extends Component {
    constructor(props){
        super(props)
        this.state = {
            modifyTODO: '',
        }
    }
    handleChange = (x,event) => {
        this.setState({modifyTODO: event.target.value},()=>this.props.modifyIt(x, this.state.modifyTODO));
        
    }
    handleUpdate = (x) => {
        
    }

    render() {
        return (
            <div>
                {this.props.list.map((e,i)=>{
                    return (
                    <div key={i}>
                        <input type="text" onChange={(event)=>this.handleChange(e.todoID,event)} value={e.newTODO}/>
                        <button onClick={()=>this.props.deleteIt(e.todoID)}> delete </button>
                    </div>)
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state
    }
}

const mapDispachToProps = dispatch => {
    return {
        modifyIt: (x,y)=>dispatch(updateTODO(x,y)),
        deleteIt: (payload)=>dispatch(removeTODO(payload))
    }
}

export default connect(mapStateToProps, mapDispachToProps)(DisplayTasks);