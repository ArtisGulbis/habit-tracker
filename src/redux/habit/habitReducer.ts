import {
  DELETE_HABIT,
  CREATE_HABIT,
  HabitDispatchTypes,
  Habit,
} from './habitActionTypes';

export interface HabitStateI {
  habits: Habit[];
}

const initialState: HabitStateI = {
  habits: [],
};

export const habitReducer = (
  state: HabitStateI = initialState,
  action: HabitDispatchTypes
): HabitStateI => {
  switch (action.type) {
    case CREATE_HABIT:
      const newHabit: Habit = {
        name: action.payload.name,
        duration: action.payload.duration,
        id: action.payload.id,
      };
      return {
        ...state,
        habits: [...state.habits, newHabit],
      };
    case DELETE_HABIT:
      return {
        ...state,
        habits: [
          ...state.habits.filter(
            (habit: Habit) => habit.id != action.payload.id
          ),
        ],
      };
    default:
      return state;
  }
};
