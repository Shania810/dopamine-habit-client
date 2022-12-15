import React from "react";
import Api from "../utils/api.utils";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { ButtonFinish, Checklist, HabitCard, HabitsCard, NoCheckList } from "./commons";
import randomColor from "./colors/colors";
export const DailyHabit = ({ habits, getHabit, updateAnalysis }) => {
  const DaysCompletedCounter = async (habit) => {
    const addCompletedDay = {
      days_completed: habit.days_completed + 1,
      completed: !habit.completed,
    };
    const deleteCompletedDay = {
      days_completed: habit.days_completed - 1,
      completed: !habit.completed,
    };
    try {
      if (!habit.completed) {
        await Api.addCompletedDay(habit._id, addCompletedDay);
      } else {
        await Api.addCompletedDay(habit._id, deleteCompletedDay);
      }
      await getHabit();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <HabitsCard>
        {habits?.map((habit, index) => {
          return (
            <HabitCard
              key={habit._id}
              style={{
                border: `9px solid ${randomColor(index)}`,
                color: randomColor(index),
              }}
              onClick={() => DaysCompletedCounter(habit)}
            >
              <p>
                {habit.title[0].toUpperCase() +
                  habit.title.slice(1, habit.title.length)}
              </p>
              {habit.completed ? (
                <Checklist>
                  <BsFillCheckCircleFill />
                </Checklist>
              ) : (
                <NoCheckList>
                  <TiDelete />
                </NoCheckList>
              )}
            </HabitCard>
          );
        })}
      </HabitsCard>
      <ButtonFinish onClick={updateAnalysis}>Finish</ButtonFinish>
    </div>
  );
};
