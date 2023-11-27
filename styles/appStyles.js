import styled from "styled-components/native";

import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
} from "react-native";

import Constants from "expo-constants";

export const colors = {
  primary: "#332424",
  secondary: "#4D3636",
  tertiary: "#E6E6E6",
  alternative: "#999999",
};

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView({
  backgroundColor: colors.primary,
  padding: "20px",
  paddingBottom: "0px",
  flex: 1,
  paddingTop: `${statusBarHeight}px`,
});

export const HeaderView = styled.View({
  paddingVertical: "10px",
  marginBottom: "10px",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const HeaderTitle = styled.Text({
  fontSize: "35px",
  fontWeight: "bold",
  color: colors.tertiary,
  letterSpacing: "2px",
  fontStyle: "italic",
});

export const HeaderButton = styled.TouchableOpacity({
  fontWeight: "bold",
  colod: colors.tertiary,
});

export const ListContainer = styled.View({
  marginBottom: "30px",
  flex: 1,
  paddingBottom: "40px",
});

export const ListView = styled.TouchableHighlight({
  backgroundColor: colors.secondary,
  minHeight: "85px",
  width: "100%",
  padding: "15px",
  justifyContent: "space-around",
  marginBottom: "15px",
  borderRadius: "10px",
});

export const ListViewHidden = styled.View({
  backgroundColor: colors.tertiary,
  minHeight: "85px",
  width: "100%",
  padding: "15px",
  justifyContent: "center",
  alignItems: "flex-start",
  marginBottom: "15px",
  borderRadius: "11px",
});

export const HiddenButton = styled.TouchableOpacity({
  width: "55px",
  alignItems: "center",
});

export const TodoText = styled.Text({
  fontSize: "16px",
  letterSpacing: "1px",
  color: colors.tertiary,
});

export const TodoDate = styled.Text({
  fontSize: "10px",
  letterSpacing: "1px",
  color: colors.alternative,
  textAlign: "right",
  textTransform: "uppercase",
});

export const SwipedTodoText = styled(TodoText)({
  color: colors.alternative,
  fontStyle: "italic",
  textDecoration: "line-through",
});

export const ModalButton = styled.TouchableOpacity({
  width: "60px",
  height: "60px",
  backgroundColor: colors.tertiary,
  borderRadius: "50px",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  position: "absolute",
  bottom: "15px",
});

export const ModalContainer = styled.View({
  padding: "20px",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  backgroundColor: colors.primary,
});

export const ModalView = styled.View({
  backgroundColor: colors.secondary,
  borderRadius: "20px",
  padding: "35px",
});

export const StyledInput = styled.TextInput({
  width: "300px",
  height: "50px",
  backgroundColor: colors.tertiary,
  padding: "10px",
  fontSize: "16px",
  borderRadius: "10px",
  color: colors.secondary,
  letterSpacing: "1px",
});

// below we use backtiks `` to be able to read variables since ({}) is not working at the moment
export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View({
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: "30px",
});

export const ModalIcon = styled.View({
  alignItems: "center",
  marginBottom: "30px",
});
