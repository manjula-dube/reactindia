import React from 'react';
import globalStyle from "./ui/globalStyles";

export default class Server {

  apply(serverHandler) {

    serverHandler.hooks.beforeHtmlRender.tap("Add Global CSS", (Application) => {

      Application.htmlProps.head.push(
        <style dangerouslySetInnerHTML={{ __html: globalStyle }}/>);
      return Application;
    });
  }
}
