import React from 'react'
import { ImageProfile } from './commons'

export const UploadImageForm = ({imageURL,handleChangeImg}) => {
  return (
    <div>
      <input type="file" onChange={handleChangeImg}  />
      {imageURL && <ImageProfile src={imageURL} alt={imageURL}/>}
    </div>
  )
}
