import React, { useState } from "react";
import apiUtils from "../utils/api.utils";
import { ButtonDefault, FormHabit, Input, Label } from "./commons";

export const NewHabit = ({ getHabit }) => {
  const [description, setDescription] = useState(" ");
  const [title, setTitle] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addNewHabit = {
      title,
      description,
      frequency: "Once a day",
    };

    await apiUtils.addNewHabit(addNewHabit);
    await getHabit();
    setDescription(" ");
    setTitle(" ");
  };
  return (
    <FormHabit onSubmit={handleSubmit}>
      <div>
        <div>
          <Label>Habit Title</Label>
        </div>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <div>
          <Label>Habit Description</Label>
        </div>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <ButtonDefault
        style={{ fontSize: 30, width: 50, color: "black", background: "white" }}
      >
        +
      </ButtonDefault>
    </FormHabit>
  );
};
