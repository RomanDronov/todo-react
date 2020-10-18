import React from 'react';
export default class NoteSaveButton extends React.Component{
    constructor(props){
        super(props);
        this.buttonClicked=this.buttonClicked.bind(this);
        this.url='https://edd910f37d90.ngrok.io';
        this.body=this.props.body;

    }
    buttonClicked(e){
        e.preventDefault();
       this.addNoteReq();

    }
    addNoteReq(){
        fetch(this.url+'/api/todo/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(this.body)
        }).then((res)=>res.status).then((json)=>{if(json===201)console.log('ok')}).catch(err=>console.log(err));
    }
    render(){
        return(<div>
            <button onClick={this.buttonClicked}>Add note</button>
        </div>)
    }
}