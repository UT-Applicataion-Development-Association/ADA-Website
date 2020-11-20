import React from "react";
import { ArrowRightSquare } from "react-bootstrap-icons";

export default function Left(props) {
  return (
    <div>
      Page Left
      {!props.isMobile && (
        <ArrowRightSquare
          className="left-arrow-button"
          onClick={() => props.setCurrPage("Main")}
        />
      )}
    </div>
  );
}