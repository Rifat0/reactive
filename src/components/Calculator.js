import React from 'react';
import { convert, toCelcious, toFarenhite } from '../lib/convertor';
import BoiledCheck from './BoiledCheck';
import TemparatureInput from './TemparatureInput';

export default class Calculator extends React.Component {
    state = { temparature: '', scale: 'c' };

    handleChange = (e, scale) => {
        this.setState({
            temparature: e.target.value,
            scale,
        });
    };

    render() {
        const { temparature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temparature, toCelcious) : temparature;
        const farenhite = scale === 'c' ? convert(temparature, toFarenhite) : temparature;

        return (
            <div>
                <TemparatureInput
                    scale="c"
                    temparature={celsius}
                    changeTemparature={this.handleChange}
                />
                <TemparatureInput
                    scale="f"
                    temparature={farenhite}
                    changeTemparature={this.handleChange}
                />
                <BoiledCheck temparature={parseFloat(temparature)} scale={scale} />
            </div>
        );
    }
}
