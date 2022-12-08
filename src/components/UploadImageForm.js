import React from 'react'
import { ImageProfile } from './commons'

export const UploadImageForm = ({imageURL,handleChangeImg}) => {
  return (
    <div>
      {imageURL && <ImageProfile src={imageURL} alt={imageURL}/>}
      <input type="file" onChange={handleChangeImg}  />
    </div>
  )
}
