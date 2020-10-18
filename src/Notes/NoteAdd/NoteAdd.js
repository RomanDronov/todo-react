import React from 'react';
import NoteEdit from '../NoteEdit/NoteEdit';
export default class NoteAdd extends React.Component{
    constructor(props){
        super(props);
        this.buttonClicked=this.buttonClicked.bind(this);
        this.state={
            isEditOpen:false,
        }


    }
    buttonClicked(e){
        e.preventDefault();
        this.setState({isEditOpen:true});
    }
    render(){
        let editView=null;
        if(this.state.isEditOpen){
            editView=<NoteEdit updateList={this.props.updateList}/>
        }
        else if(!this.state.isEditOpen){
            editView=<button onClick={this.buttonClicked}>Add note</button>;
        }
        return(<div>
            
            {editView}
        </div>)
    }
}