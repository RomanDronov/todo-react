import React from 'react';
import ReactDOM from 'react-dom';
export default class NoteEditTab extends React.Component {
  constructor(props) {
    super(props);
    this.containerEl = document.createElement('div');
    this.externalWindow = null;
  }



  componentDidMount() {
    this.externalWindow = window.open('', 'Edit');
    this.externalWindow.document.body.appendChild(this.containerEl);
    this.externalWindow.document.getElementById('SaveNote').onclick = this.props.saveNote;
    this.externalWindow.document.getElementById('NoteEdit').onchange = this.props.externalTabEditValue;
    this.externalWindow.focus();
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }
}