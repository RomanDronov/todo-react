import React from 'react';
import NoteAdd from './NoteAdd/NoteAdd';
import NoteIcon from './NoteIcon/NoteIcon';
export default class NotesView extends React.Component {
    constructor(props) {
        super(props);
        this.host = 'https://d69b6f2a6529.ngrok.io';
        this.state =
        {
            isEmpty: false,
            isLoading: true,
            data: null
        };
        this.requestNotes=this.requestNotes.bind(this);

    }
    componentDidMount() {
       this.requestNotes();
    }
    requestNotes(){
        console.log('requestNotes'+this.host);
        fetch(this.host + '/api/todo', {
        }).then(
            res => res.json()).then(json => this.handleResponse(json));
    }
    handleResponse(json) {
        console.log(typeof json);
        console.log(Array.isArray(json.value));
        if ('value' in json) {
            if (json.value.length === 0) {
                console.log(json.value.length);
                this.setState({
                    isEmpty: true,
                    isLoading: false
                })
            }
            else if (json.value.length > 0) {
                let notes = [];
                for (let i = 0; i < json.value.length; i++) {
                    notes.push(<NoteIcon note={json.value[i]} />);
                }
                this.setState({
                    isEmpty: false,
                    isLoading: false,
                    data: notes
                })

            }
        }

    }
    render() {
        let body = null;
        if (!this.state.isLoading) {
            if (this.state.isEmpty) {
                body = <NoteAdd updateList={this.requestNotes} host={this.host}/>;
            }
            if (!this.state.isEmpty) {
                body = [];
                body.push(this.state.data);
                body.push(<NoteAdd updateList={this.requestNotes} host={this.host}/>);
            }
        }
        return (
            <div>
                {body}
            </div>
        );
    }
}