import React from "react";
import { WebView } from "react-native-webview";

function MediaPlayer({ videoUrl }) {
  return (
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      source={{
        uri: videoUrl,
      }}
      javaScriptCanOpenWindowsAutomatically={true}
      allowsInlineMediaPlayback={true}
      setSupportMultipleWindows={false}
      onShouldStartLoadWithRequest={(request) => {
        return request.mainDocumentURL === videoUrl;
      }}
    />
  );
}

export default MediaPlayer;
