import React from 'react';
import NoteEdit from '../NoteEdit/NoteEdit';
import NoteEditTab from '../NoteEditTab/NoteEditTab';
import ColorPickupTool from '../ColorPickup/ColorPickupTool';
export default class NoteAdd extends React.Component{
    constructor(props){
        super(props);
        this.buttonClicked=this.buttonClicked.bind(this);
        this.expandEditTab=this.expandEditTab.bind(this);
        this.setEditColor=this.setEditColor.bind(this);
        this.host=this.props.host;
        this.state={
            isEditOpen:false,
            isExpandEdit:false,
            color:'#FFFFFF'
        }
        this.closeEdit=this.closeEdit.bind(this);
    }
    closeEdit(){
        this.setState({isEditOpen:false});
    }
    buttonClicked(e){
        e.preventDefault();
        this.setState({isEditOpen:true});
    }
    expandEditTab(e){
        e.preventDefault();
        this.setState({isExpandEdit:true,isEditOpen:false})
    }
    externalTabEditValue(e){
        console.log("externalTab"+e.target.value);
        this.setState({value:e.target.value});
    }
    setEditColor(color){
        this.setState({
            color:color
        });
    }
    saveNoteExternalTab(e){
            e.preventDefault();
            fetch(this.host+'/api/todo/',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({
                    "description" : this.state.value
                })
            }).then((res)=>res.status).then((json)=>{if(json===201)console.log('ok');this.props.updateList();this.setState({isExpandEdit:false});}).catch(err=>console.log(err));
    }
    render(){
        let editView=null;
        if(this.state.isEditOpen){
            editView=<div>
                <ColorPickupTool changeColor={this.setEditColor}/>
                <NoteEdit updateList={this.props.updateList} closeEdit={this.closeEdit}host={this.props.host} color={this.state.color}/>
            <button onClick={this.expandEditTab}>Expand editor</button>
            </div>;
        }
        else if(!this.state.isEditOpen){
            editView=<button onClick={this.buttonClicked}>Add note</button>;
        }
       /*if(this.state.isExpandEdit){
          editView=  <NoteEditTab><NoteEdit updateList={this.props.updateList} host={this.props.host}/></NoteEditTab>;
        }*/
        return(<div>
            {editView}
            {this.state.isExpandEdit&&(
                <NoteEditTab saveNote={(e)=>this.saveNoteExternalTab(e)} externalTabEditValue={(e)=>this.externalTabEditValue(e)}><NoteEdit/></NoteEditTab>
            )}
        </div>)
    }
}