import { RegisteredStyle, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

interface PanelComponentStyle {
  panelViewStyle: RegisteredStyle<ViewStyle>;
}

const panelViewStyle: ViewStyle = {
  backgroundColor: 'white',
  borderColor: 'black',
  borderWidth: 0.5,
  marginHorizontal: '16@ms',
};

export const styles: PanelComponentStyle = ScaledSheet.create({
  panelViewStyle,
});
