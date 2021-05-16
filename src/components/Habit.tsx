import { DateTime } from 'luxon';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import {
  deleteHabit,
  deleteStreak,
  updateHabitStreak,
  completeStreak,
  resetCompletionMarks,
} from '../redux/habit/habitActions';
import { CompletionMark } from '../redux/habit/habitActionTypes';

interface IHabitProps {
  name: string;
  id: string;
  completionMarks: CompletionMark[];
}

const Habit = ({ completionMarks, id, name }: IHabitProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (completionMarks.every((mark) => mark.completed === true)) {
      dispatch(completeStreak(id));
      dispatch(resetCompletionMarks(id));
    }
  }, [completionMarks]);

  const dt = DateTime.now().toISODate();

  return (
    <div className="m-6">
      <p>{name}</p>
      {completionMarks.map((completionMark: CompletionMark) => {
        return (
          <input
            key={uniqid()}
            type="checkbox"
            disabled={
              (dt === completionMark.timestamp ? false : true) ||
              (completionMark.completed ? true : false)
            }
            id={id}
            name={name}
            checked={completionMark.completed}
            onChange={() => {
              dispatch(updateHabitStreak(id));
            }}
          />
        );
      })}
      <button
        onClick={() => {
          dispatch(deleteHabit(id));
          dispatch(deleteStreak(id));
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Habit;
