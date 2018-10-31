import * as React from 'react';

type Props = {
  styles?: React.CSSProperties;
  placeholder?: string;
  autoFocus: boolean
  value: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  sendCommand: () => void;
}

class Input extends React.Component<Props> {

  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.sendCommand();
    }
  }
  
  render() {
    return (
      <input
        style={this.props.styles}
        type="text"
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        onKeyPress={this.handleKeyPress}
        autoFocus={this.props.autoFocus}
        value={this.props.value}
      />
    );
  }
}

export default Input;
