import React, { useState } from "react";
import { marked } from "marked";

const Preiview = ({ text, preview, handlePreview }) => {

  marked.setOptions({
    breaks : true
  })
  return (
    <div
      className="preview-wrapper"
      style={{ minHeight: preview ? "100vh" : "" }}
    >
      <div className="preview-header">
        <h3>Preview</h3>
        <p onClick={() => handlePreview()}>
          {preview ? (
            <i class="bi bi-fullscreen-exit"></i>
          ) : (
            <i class="bi bi-fullscreen"></i>
          )}
        </p>
      </div>

      <div
      id="preview"
        className="preview-text"
        style={{ minHeight: preview ? "100vh" : "" }}
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      >
       
      </div>
    </div>
  );
};

export default Preiview;
