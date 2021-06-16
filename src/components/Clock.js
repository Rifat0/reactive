import React from 'react';
import Button from './Button';

export default class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handelClick = (localeTime) => {
        this.setState({
            locale: localeTime,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                    <Button change={this.handelClick} localeTime="en-US" show={false} />
                ) : (
                    <Button change={this.handelClick} localeTime="bn-BD" show />
                )}
            </div>
        );
    }
}
