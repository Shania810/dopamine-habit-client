import React from "react";
import { ImageProfile } from "./commons";
import { StyledInput } from "./Input/style";

export const UploadImageForm = ({ imageURL, handleChangeImg }) => {
  return (
    <div>
      {imageURL && <ImageProfile src={imageURL} alt={imageURL} />}
      <StyledInput type="file" onChange={handleChangeImg} />
    </div>
  );
};
