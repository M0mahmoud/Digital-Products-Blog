import React from "react";

const Custom404 = () => {
  return (
    <div className={"error_container"}>
      <h1 className={"error_title"}>Oops!</h1>
      <p className={"error_message"}>
        An error occurred while loading the page.
      </p>
      <p className={"error_message"}>
        Please try again later or contact support.
      </p>
    </div>
  );
};

export default Custom404;
