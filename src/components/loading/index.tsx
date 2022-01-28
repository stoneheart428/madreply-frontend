import React from "react";
import { Text } from "styles/globals.styled";
import loading from "assets/Book.gif";

const Loading = () => {
  return (
    <Text tAlign="center">
      <img src={loading.src} />
    </Text>
  );
};

export default Loading;
