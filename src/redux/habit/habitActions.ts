import { Dispatch } from 'redux';
import {
  DELETE_HABIT,
  HabitDispatchTypes,
  CREATE_HABIT,
} from './habitActionTypes';

export const createHabit =
  (name: string, duration: number, id: number) =>
  async (dispatch: Dispatch<HabitDispatchTypes>) => {
    dispatch({ type: CREATE_HABIT, payload: { name, duration, id } });
  };

export const deleteHabit =
  (id: number) => (dispatch: Dispatch<HabitDispatchTypes>) => {
    dispatch({ type: DELETE_HABIT, payload: { id } });
  };
