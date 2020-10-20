import React from 'react';
export default class Color extends React.Component{
    constructor(props){
        super(props);
        this.color=this.props.color;
        this.changeColor=this.props.changeColor;
    }
    render(){
        let style={
            background:this.props.color
        };
        style.border=((this.props.color==='#FFFFFF')?'1px solid rgba(51, 51, 51, 0.6)':null);
        console.log('color'+this.color);
        return(
            <div className='Color' style={style} onClick={()=>this.changeColor(this.color)}></div>
        )
    }
}