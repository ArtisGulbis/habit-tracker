import { Dispatch } from 'redux';
import {
  DELETE_HABIT,
  HabitDispatchTypes,
  CREATE_HABIT,
  UPDATE_HABIT_STREAK,
  CREATE_STREAK,
  DELETE_STREAK,
  COMPLETE_STREAK,
  RESET_COMPLETION_MARKS,
} from './habitActionTypes';

export const createHabit =
  (name: string, duration: number, id: string) =>
  async (dispatch: Dispatch<HabitDispatchTypes>) => {
    dispatch({ type: CREATE_HABIT, payload: { name, duration, id } });
  };

export const deleteHabit =
  (id: string) => (dispatch: Dispatch<HabitDispatchTypes>) => {
    dispatch({ type: DELETE_HABIT, payload: { id } });
  };

export const updateHabitStreak =
  (id: string) => (dispatch: Dispatch<HabitDispatchTypes>) => {
    dispatch({ type: UPDATE_HABIT_STREAK, payload: { id } });
  };

export const createStreak =
  (name: string, id: string) =>
  async (dispatch: Dispatch<HabitDispatchTypes>) => {
    dispatch({ type: CREATE_STREAK, payload: { name, id } });
  };

export const deleteStreak =
  (id: string) => (dispatch: Dispatch<HabitDispatchTypes>) => {
    dispatch({ type: DELETE_STREAK, payload: { id } });
  };

export const completeStreak =
  (id: string) => (dispatch: Dispatch<HabitDispatchTypes>) => {
    dispatch({ type: COMPLETE_STREAK, payload: { id } });
  };

export const resetCompletionMarks =
  (id: string) => (dispatch: Dispatch<HabitDispatchTypes>) => {
    dispatch({ type: RESET_COMPLETION_MARKS, payload: { id } });
  };
