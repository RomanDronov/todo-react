import React from 'react';
import './NoteIcon.css';

export default class NoteIcon extends React.Component{
    constructor(props){
        super(props);
        this.id=this.props.note.id;
        this.description=this.props.note.description;
        this.createdTime=this.props.note.created;
        this.date=this.getDateString(this.createdTime);
        this.isCompleted=this.props.note.isCompleted;
        this.style={
            background:this.props.color,
            border:(this.props.color==="#FFFFFF")?'1px solid rgba(51, 51, 51, 0.6)':'none',
        }

    }
    getDateString(str){
        let date=new Date(str);
        console.log(date);
        let options = {year: 'numeric', month: 'long', day: 'numeric' };
        return  date.toLocaleDateString('en-US', options);
    }

    render(){
        return(
            <div className="NoteCard" style={this.style}>
                <div className="Note">{this.description}</div>
                <div className="Date">{this.date}</div>
            </div>
        )
    }
}
/*
                <br/>
                {this.createdTime}
                <br/>
                {this.isCompleted}*/