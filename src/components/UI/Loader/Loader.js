import React from "react";
import { LoaderWrapper } from "./Loader.style";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

function Loader() {
  return (
    <LoaderWrapper>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </LoaderWrapper>
  );
}

export default Loader;
