import * as React from 'react';

export interface Props {
  config: string;
  style: object;
}

export interface State {

}

class AXLayout extends React.Component<Props, State> {
  render() {
    const {
      // config,
      style,
    } = this.props;

    return (
      <div data-ax5layout="ax1" style={style}>
        AXLayout
      </div>
    );
  }
}

export default AXLayout;
