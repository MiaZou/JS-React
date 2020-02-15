import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
//  static contextType = LanguageContext;

  render() {
//    const text = this.context === 'english' ? 'Submit' : '提交';

    return (
//      <button className="ui button primary">{text}</button>

//    below is using the consumer way to pass context values
//    Provider vs consumer: consumer takes multiple contexts


      <ColorContext.Consumer>
        {(color) =>
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => value === 'english' ? 'Submit' : '提交'}
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>

    );
  }
}

export default Button;