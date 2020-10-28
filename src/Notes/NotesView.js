import React from 'react';
import NoteAdd from './NoteAdd/NoteAdd';
import NoteIcon from './NoteIcon/NoteIcon';
import './NotesView.css';
export default class NotesView extends React.Component {
    constructor(props) {
        super(props);
        this.host = 'https://e499aab1e4a6.ngrok.io';
        this.state =
        {
            isEmpty: false,
            isLoading: true,
            data: null
        };
        this.requestNotes = this.requestNotes.bind(this);
        this.colorMap = this.setColors();

    }
    setColors() {
        let colorMap = new Map();
        colorMap.set('GREEN', '#B2FAB4');
        colorMap.set('RED', '#FF796E');
        colorMap.set('BLUE', '#A8E2FF');
        colorMap.set('GREY', '#CFCFCF');
        colorMap.set('YELLOW', '#FFC947');
        colorMap.set('WHITE', '#FFFFFF');
        colorMap.set('CYAN', '#9EFFFF');
        colorMap.set('PURPLE', '#EE98FB');
        colorMap.set('OCEAN', '#82E9DE');
        colorMap.set('ORANGE', '#FFBB93');
        return colorMap;
    }
    componentDidMount() {
        this.requestNotes();
    }
    requestNotes() {
        console.log('requestNotes' + this.host);
        if (this.props.demo) {
            let notesMockup = {
                value: [
                    {
                        id: "4028812175511756017551181dac0000",
                        description: "Test Note1",
                        created: "2020-10-22T19:15:36.364659",
                        modified: "2020-10-22T19:15:36.364682",
                        color: 'WHITE',
                        completed: false
                    },
                    {
                        id: "40288121755117560175511825e70001",
                        description: "Note via POST",
                        created: "2020-10-22T19:15:38.471398",
                        modified: "2020-10-22T19:15:38.471416",
                        color: 'CYAN',
                        completed: false
                    },
                    {
                        id: "4028812175511756017551182a690002",
                        description: "Note via POST",
                        created: "2020-10-22T19:15:39.625367",
                        modified: "2020-10-22T19:15:39.625384",
                        color: "YELLOW",
                        completed: false
                    },
                    {
                        id: "4028812175511756017551182e520003",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
                        created: "2020-10-22T19:15:40.626722",
                        modified: "2020-10-22T19:15:40.626744",
                        color: "BLUE",
                        completed: false
                    },
                    {
                        id: "40288121755117560175511831e90004",
                        description: "Note via POST",
                        created: "2020-10-22T19:15:41.545278",
                        modified: "2020-10-22T19:15:41.545292",
                        color: 'ORANGE',
                        completed: false
                    }
                ]
            }
            this.handleResponse(notesMockup);
        }
        else {
            fetch(this.host + '/api/todo', {
            }).then(
                res => res.json()).then(json => this.handleResponse(json));
        }
    }
    getColorCode(color) {
        return this.colorMap.get(color);
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
                    let color = this.getColorCode(json.value[i].color);
                    notes.push(<NoteIcon note={json.value[i]} color={color} />);
                }
                console.log(notes);
                this.setState({
                    isEmpty: false,
                    isLoading: false,
                    data: notes
                });

            }
        }

    }
    render() {
        let body = null;
        if (!this.state.isLoading) {
            if (this.state.isEmpty) {
                body = <NoteAdd updateList={this.requestNotes} host={this.host} demo={this.props.demo} />;
            }
            if (!this.state.isEmpty) {
                body = [];
                body.push(this.state.data);
                body.push(<NoteAdd updateList={this.requestNotes} host={this.host} />);
            }
        }
        return (
            <div className="CardView">
                {body}
            </div>
        );
    }
}