import React from 'react';

const scaleName = {
    c: 'Celcious',
    f: 'Farenhite',
};

export default function TemparatureInput({ temparature, scale, changeTemparature }) {
    return (
        <div>
            <fieldset>
                <legend>Enter temparature in {scaleName[scale]}</legend>
                <input
                    type="text"
                    value={temparature}
                    onChange={(e) => changeTemparature(e, scale)}
                />
            </fieldset>
        </div>
    );
}
