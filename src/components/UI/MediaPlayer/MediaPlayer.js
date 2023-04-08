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
      useWebView2={true}
      onShouldStartLoadWithRequest={(request) => {
        return request.mainDocumentURL === videoUrl;
      }}
    />
  );
}

export default MediaPlayer;
