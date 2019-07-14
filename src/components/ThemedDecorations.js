// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className:
      });
    });
    return (
      <div className="themed-decorations">
        {childrenWithExtraProp}
      </div>
    );
  }
}
