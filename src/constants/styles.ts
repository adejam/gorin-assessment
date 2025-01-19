import { Platform } from "react-native";

export default {
  paddingX20: {
    paddingHorizontal: 20,
  },
  marginTop10: {
    marginTop: 10,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#C0C4EA73',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.75,
        shadowRadius: 30,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  bgGray: {
    backgroundColor: "#EBF0F1",
  },
  fontSm: {
    fontFamily: 'Poppins',
    fontSize: 12
  },
  fontMd: {
    fontFamily: 'Poppins',
    fontSize: 14
  },
  fontNormal: {
    fontFamily: 'Poppins',
    fontSize: 16
  },
  fontLg: {
    fontFamily: 'Poppins',
    fontSize: 20
  },
  fontSemiBold: {
    fontWeight: "500"
  },
  textMuted: {
    color: '#5E626C'
  }
}
