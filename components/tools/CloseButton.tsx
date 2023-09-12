"use client";
import React from "react";
import { CloseIcon } from "../icons";

const CloseButton = ({ close }: { close: () => void }) => {
  return (
    <button type="button" onClick={close}>
      <CloseIcon size={"xs"} />
    </button>
  );
};

export default CloseButton;
