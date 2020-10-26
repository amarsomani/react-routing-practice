import React, { useState } from "react";
import { Prompt } from "react-router-dom";

function BlockingForm() {
  let [isBlocking, setIsBlocking] = useState(false);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.target.reset();
        setIsBlocking(false);
      }}
    >
      <Prompt
        when={isBlocking}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      ></Prompt>
      <p>Blocking ? {isBlocking ? "click a link or a back button" : "Nope"}</p>
      <p>
        <input
          size="50"
          placeholder="type something to block transitions"
          onChange={event => {
            setIsBlocking(event.target.value.length > 0);
          }}
        />
      </p>

      <button>Submit to stop blocking</button>
    </form>
  );
}

export default BlockingForm;
