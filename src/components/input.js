import React from "react";

const Input = ({ content, contentChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          class="content"
          value={content}
          onChange={contentChange}
        />
      </form>
    </div>
  );
};

export default Input;
