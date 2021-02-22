import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import SVGICONS from "./icon";

const HandleSvg = (
  style: StyleProp<ViewStyle>,
  color: string,
  name: string,
  height: string,
  width: string
) => <View style={style}>{SVGICONS[name](height, width, color)}</View>;

export default HandleSvg;
