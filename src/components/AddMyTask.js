import React, { Component } from 'react';
import { addTODO } from '../reduxMngment/actions/actionCreators.js';
import { connect } from 'react-redux';

class AddMyTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            newTODO:'',
            todoID:'',
            // isChecked: false
        }
    }
    handleChange = (e)=>{
        this.setState({newTODO:e.target.value})
    }
    sendIt = ()=>{
        
        this.setState({newTODO: ''});
    }
    render() {
        return (
            <div>
                <h3>My ToDo list</h3>
                <div>
                    <input value={this.state.newTODO} onChange={this.handleChange}></input>
                    <button className='add-btn' onClick={()=>{this.props.addIt(this.state.newTODO);this.sendIt()}}>add</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIt: payload=>{dispatch(addTODO(payload))}
    }
}

export default connect(null, mapDispatchToProps)(AddMyTask);