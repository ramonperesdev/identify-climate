interface IColorProps {
  color0: "#6E64C5";
  color1: "#363537";
  color2: "#9A8FD3";
  color3: "#FFFFFF";
  color4: "#57489B";
  color5: "#f3f4f6";
  color6: "#212121";
  color7: "#515151";
  color8: "#666666";
  color9: "#d3d3d3";
}

export const allColors: IColorProps = {
  color0: "#6E64C5",
  color1: "#363537",
  color2: "#9A8FD3",
  color3: "#FFFFFF",
  color4: "#57489B",
  color5: "#f3f4f6",
  color6: "#212121",
  color7: "#515151",
  color8: "#666666",
  color9: "#d3d3d3",
};

export const lightTheme = {
  value: "light",
  body: allColors.color0,
  text: allColors.color1,
  content: allColors.color2,
  backgroundCard: allColors.color3,
  buttonColor: allColors.color4,
  buttonRefreshColor: allColors.color5,
};
export const darkTheme = {
  body: allColors.color6,
  text: allColors.color5,
  content: allColors.color7,
  backgroundCard: allColors.color7,
  buttonColor: allColors.color8,
  buttonRefreshColor: allColors.color9,
};
