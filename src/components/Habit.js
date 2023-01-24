import React from "react";
import {
  HabitCard,
  HabitTitle,
  HabitsCard,
  PositionContainer,
  HabitDescription,
  ButtonDelete,
} from "./commons";
import Api from "../utils/api.utils";
import randomColor from "./colors/colors";
import { MdDelete } from "react-icons/md";
const Habit = ({ habits, getHabit, condition }) => {
  const deleteHabit = async (id) => {
    try {
      await Api.deleteHabit(id);
      await getHabit();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PositionContainer>
      <HabitsCard
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {habits.map((habit, index) => {
          return (
            <HabitCard
              width='400px'
              key={habit._id}
              style={{
                border: `9px solid ${randomColor(index)}`,
                background: randomColor(index)
              }}
            >
              <HabitTitle>
                {habit.title[0].toUpperCase() +
                  habit.title.slice(1, habit.title.length)}
              </HabitTitle>
              <HabitDescription>
                <div>
                  <p style={{ color: "black" }}>
                    <b>Description</b>
                  </p>
                  <p>
                    {habit.description[0].toUpperCase() +
                      habit.description.slice(1, habit.description.length)}
                  </p>
                </div>
                <div>
                  <p style={{ color: "black" }}>
                    <b>Frequency</b>
                  </p>
                  <p>
                    {habit.frequency[0].toUpperCase() +
                      habit.frequency.slice(1, habit.frequency.length)}
                  </p>
                </div>
              </HabitDescription>
              {condition() && (
                <ButtonDelete>
                  <MdDelete onClick={() => deleteHabit(habit._id)} />
                </ButtonDelete>
              )}
            </HabitCard>
          );
        })}
      </HabitsCard>
    </PositionContainer>
  );
};

export default Habit;
