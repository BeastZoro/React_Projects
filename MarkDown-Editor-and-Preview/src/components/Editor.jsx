import React, { useState } from "react";
import Preiview from "./Preiview";

const Editor = () => {
  const [text, setText] = useState("");
  const [expand, setExpand] = useState(false);
  const [preview, setPreview] = useState(false);
  const [clear, setClear] = useState(true);

  const handlePreview = () => {
    setPreview((pre) => !pre);
  };

  const handleClear = () => {
    setClear((pre) => pre);
    clear && setText("");
  };

  console.log(clear);
  return (
    <>
      <main>
        <div
          className="editor-wrapper"
          style={{
            minHeight: expand ? "100vh" : "",
            display: preview ? "none" : "block",
          }}
        >
          <div className="edit-header">
            <h3>Editor</h3>
            <div className="editor-actions">
              <p onClick={handleClear}>Clear</p>
              <p onClick={() => setExpand((pre) => !pre)}>
                {expand ? (
                  <i class="bi bi-fullscreen-exit"></i>
                ) : (
                  <i class="bi bi-fullscreen"></i>
                )}
              </p>
            </div>
          </div>
          <textarea
            id="editor"
            style={{ minHeight: expand ? "100vh" : "" }}
            className="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <Preiview text={text} preview={preview} handlePreview={handlePreview} />
      </main>
    </>
  );
};

export default Editor;
