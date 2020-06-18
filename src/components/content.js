import React from "react";
import mapProperties from "../properties-mapping.js";

export function Content(props) {
  return React.createElement("content", mapProperties("Content", props));
}

Content.propTypes = {
};

Content.defaultProps = {
};