import * as React from 'react';
import { View } from 'react-native';
import { styles } from './PanelComponent.styles';

interface IPanelComponentProps {
  style?: any;
}

export const PanelComponent: React.SFC<IPanelComponentProps> = (props) => (
  <View style={[styles.panelViewStyle, props.style]}>{props.children}</View>
);
