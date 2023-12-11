import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import "./widget.css";
import { Excalidraw } from "@excalidraw/excalidraw";

export const render = createRender(() => {
  const [value, setValue] = useModelState("value");
  return (
    <>
      <h1>Excalidraw</h1>
      <div
        style={{
          position: "relative",
          width: "20px",
          height: "300px",
        }}
      >
        {/* <Excalidraw /> */}
      </div>
    </>
  );
});
