import React from 'react';
import './ColorPickup.css';
import Color from './Color/Color';
export default class ColorPickupTool extends React.Component {
    constructor(props) {
        super(props);
        this.colorMap = this.setColors();
    }
    setColors() {
        let colorMap = new Map();
        colorMap.set('green', '#B2FAB4');
        colorMap.set('red', '#FF796E');
        colorMap.set('blue', '#A8E2FF');
        colorMap.set('grey', '#CFCFCF');
        colorMap.set('yellow', '#FFC947');
        colorMap.set('white', '#FFFFFF');
        colorMap.set('cyan', '#9EFFFF');
        colorMap.set('purple', '#EE98FB');
        colorMap.set('ocean', '#82E9DE');
        colorMap.set('orange', '#FFBB93');
        return colorMap;
    }
    render() {
        let colors = [];
        for (let color of this.colorMap.values()) {
            console.log(color);
            colors.push(<Color color={color} key={color} changeColor={this.props.changeColor} />);
        }

        return (
            <div className="ColorPickup">
                {colors}
            </div>
        )
    }
}