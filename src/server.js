import React from 'react';
import globalStyle from "./ui/globalStyles";

export default class Server {

  apply(serverHandler) {

    serverHandler.hooks.beforeHtmlRender.tap("Add Global CSS", (Application) => {
      Application.htmlProps.head.push(
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.20/css/uikit.min.css" />
      );
      Application.htmlProps.head.push(
        <style dangerouslySetInnerHTML={{ __html: globalStyle }}/>);
      Application.htmlProps.head.push(
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.20/js/uikit.min.js" />
      );
      Application.htmlProps.head.push(
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.20/js/uikit-icons.min.js" />
      );
      return Application;
    });
  }
}
