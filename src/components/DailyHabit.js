import React, { useState } from "react";
import Api from "../utils/api.utils";

export const DailyHabit = ({ habits }) => {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const DaysCompletedCounter = async (e, habitId, days_completed) => {
    let element = e.target;
    let backgroundColor = element.style.backgroundColor;
    const addCompletedDay = { days_completed: days_completed + 1 };
    const deleteCompletedDay = { days_completed: days_completed - 1 };
    try {
      if (backgroundColor === "red") {
        await Api.addCompletedDay(habitId, addCompletedDay);
        setBackgroundColor("green");
      } else if (backgroundColor === "green") {
        await Api.addCompletedDay(habitId, deleteCompletedDay);
        setBackgroundColor("red");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {habits.map((habit) => {
        return (
          <div
            style={{
              border: "1px solid black",
              backgroundColor,
              margin: 10,
              padding: 50,
            }}
            onClick={(e) =>
              DaysCompletedCounter(e, habit._id, habit.days_completed)
            }
          >
            {habit.title}
          </div>
        );
      })}
    </div>
  );
};
