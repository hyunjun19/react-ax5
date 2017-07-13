import * as React from 'react';

export interface Props {
  config?: {
    animateTime?: number,
    splitter?: {
      size?: number,
    },
    autoResize?: boolean,
  };
  style?: object;
}

export interface State {}

class AXLayout extends React.Component<Props, State> {
  render() {
    const {
      config,
      style,
      children,
    } = this.props;

    return (
      <div data-ax5layout="ax5" style={style} data-config={config}>
        {children}
      </div>
    );
  }
}

export default AXLayout;
