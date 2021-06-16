import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, localeTime: currentLocale } = this.props;
        const { change: nextChange, localeTime: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        console.log('button componenet rendered');
        const { change, localeTime, show } = this.props;
        return (
            <>
                <button type="button" onClick={() => change(localeTime)}>
                    {localeTime === 'bn-BD' ? 'Change clock.' : 'গড়ি পরিবর্তন করুন।'}
                </button>
                {show && <p>Hello</p>}
            </>
        );
    }
}

export default Button;
