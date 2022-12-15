import React, { useState, useEffect } from "react";
import { EntryPage } from "../pages/style";
import Api from "../utils/api.utils";
import { Button, ImageProfile } from "./commons";
import EntryCard from "./EntryCard";
import Input from "./Input";
import InputGroup from "./InputGroup";
import { UploadImageForm } from "./UploadImageForm";

export const User = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState(null);
  const handleChangeImg = (e) => {
    const fileObject = e.target.files[0];
    setFile(fileObject);
    if (file) {
      const imageURL = URL.createObjectURL(fileObject);
      setImageURL(imageURL);
    } else {
      setImageURL("");
    }
  };
  const uploadImage = async () => {
    try {
      await Api.uploadImage(file);
      await getUser();
    } catch (error) {}
  };
  const getUser = async () => {
    try {
      const data = await Api.getUser();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const addNewPassword = async () => {
    try {
      await Api.putPassword({ password });
      await getUser();
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  const addNewUsername = async () => {
    try {
      await Api.putUsername({ username });
      await getUser();
      setUsername("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <EntryPage>
      <EntryCard>
        <ImageProfile src={user.imageURL} alt={user.imageURL} />
        <UploadImageForm
          imageURL={imageURL}
          handleChangeImg={handleChangeImg}
        />
        <Button onClick={uploadImage}>Update Photo</Button>
        <InputGroup>
          <h5>{user.username}</h5>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>
        <Button onClick={addNewUsername}>Update Username</Button>
        <InputGroup>
          <h5>Password:</h5>
          <Input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <Button onClick={addNewPassword}>Update Password</Button>
      </EntryCard>
    </EntryPage>
  );
};
