import React from 'react';

export default class Form extends React.Component {
    state = {
        text: 'Text',
        textarea: 'Textarea',
        select: 'Vue',
        checked: false,
    };

    handelChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                textarea: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                select: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                checked: e.target.checked,
            });
        } else {
            console.log(e.target.type);
        }
    };

    formSubmit = (e) => {
        e.preventDefault();
        const { text, textarea, select, checked } = this.state;
        console.log(text, textarea, select, checked);
    };

    render() {
        const { text, textarea, select, checked } = this.state;
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type="text" value={text} onChange={this.handelChange} />
                    <br />
                    <br />
                    <br />
                    <textarea type="textarea" value={textarea} onChange={this.handelChange} />
                    <br />
                    <br />
                    <br />
                    <select type="select" value={select} onChange={this.handelChange}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br />
                    <br />
                    <br />
                    <input type="checkbox" checked={checked} onChange={this.handelChange} />
                    <br />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
