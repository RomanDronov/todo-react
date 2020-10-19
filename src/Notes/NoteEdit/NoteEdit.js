import React from 'react';
export default class NoteEdit extends React.Component{
    constructor(props){
        super(props);
        this.buttonClicked=this.buttonClicked.bind(this);
        this.url=this.props.host;
        this.getNoteText=this.getNoteText.bind(this);
        this.updateList=this.props.updateList;
        this.state={
            value:"",
        }
    }
    getNoteText(event){
        console.log('getNoteText');
        this.setState({value:event.target.value});
    }
    buttonClicked(e){
        console.log("edit clicked");
        e.preventDefault();
        this.addNoteReq();

    }
    addNoteReq(){
        fetch(this.url+'/api/todo/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                "description" : this.state.value
            })
        }).then((res)=>res.status).then((json)=>{if(json===201)console.log('ok');this.updateList();}).catch(err=>console.log(err));
    }
    render(){
        return(<div>
            <input type="text" value={this.state.value} id="NoteEdit" onChange={this.getNoteText}/>
            <button onClick={this.buttonClicked} id='SaveNote'>Save note</button>
        </div>)
    }
}