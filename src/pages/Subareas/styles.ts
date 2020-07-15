import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Subarea } from './index';

export const SubareaViewTitle = styled.View`
  align-items: center;
`;

export const SubareaTextTitle = styled.Text`
  font-size: 32px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
`;

export const SubareaList = styled(
  FlatList as new () => FlatList<Subarea>,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 16px;
`;

// export const SubareasListTitle = styled.Text`
//   font-size: 24px;
//   margin-bottom: 16px;
//   color: #f4ede8;
//   font-family: 'RobotoSlab-Medium';
// `;
export const RadioButtonView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RadioText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f0f0f5;
`;

export const TagView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TagText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f0f0f5;
`;

export const LocalView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocalText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f0f0f5;
`;

export const SearchView = styled.View`
  margin-bottom: 16px;
`;

export const SubareaContainer = styled(RectButton)`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
`;

export const SubareaDetail = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
`;
