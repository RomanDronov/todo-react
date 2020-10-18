import React from 'react';
import './NoteIcon.css';

export default class NoteIcon extends React.Component{
    constructor(props){
        super(props);
        this.id=this.props.note.id;
        this.description=this.props.note.description;
        this.createdTime=this.props.note.createdDateTime;
        this.isCompleted=this.props.note.isCompleted;

    }
    render(){
        return(
            <div className="NoteIcon">
                {this.id}
                <br/>
                {this.description}
                <br/>
                {this.createdTime}
                <br/>
                {this.isCompleted}
            </div>
        )
    }
}