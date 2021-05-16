import {
  DELETE_HABIT,
  CREATE_HABIT,
  HabitDispatchTypes,
  Habit,
  Streak,
  UPDATE_HABIT_STREAK,
  CompletionMark,
  CREATE_STREAK,
  DELETE_STREAK,
  COMPLETE_STREAK,
  RESET_COMPLETION_MARKS,
} from './habitActionTypes';
import { DateTime } from 'luxon';

export interface HabitStateI {
  habits: Habit[];
  streaks: Streak[];
}

const initialState: HabitStateI = {
  habits: [],
  streaks: [],
};

export const habitReducer = (
  state: HabitStateI = initialState,
  action: HabitDispatchTypes
): HabitStateI => {
  switch (action.type) {
    case CREATE_HABIT:
      const streaks: CompletionMark[] = [];
      for (let i = 0; i < action.payload.duration; i++) {
        const time = DateTime.now().plus({ days: i });
        streaks[i] = {
          completed: false,
          timestamp: time.toISODate(),
        };
      }
      const newHabit: Habit = {
        name: action.payload.name,
        completionMarks: streaks,
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
            (habit: Habit) => habit.id !== action.payload.id
          ),
        ],
      };

    case UPDATE_HABIT_STREAK:
      let done = false;
      return {
        ...state,
        habits: [
          ...state.habits.map(
            (habit: Habit): Habit =>
              habit.id === action.payload.id
                ? {
                    name: habit.name,
                    duration: habit.duration,
                    id: habit.id,
                    completionMarks: [
                      ...habit.completionMarks.map(
                        (streak: CompletionMark): CompletionMark => {
                          if (!done && streak.completed === false) {
                            done = true;
                            return {
                              completed: true,
                              timestamp: streak.timestamp,
                            };
                          }
                          return streak;
                        }
                      ),
                    ],
                  }
                : habit
          ),
        ],
      };

    case CREATE_STREAK:
      const newStreak: Streak = {
        id: action.payload.id,
        name: action.payload.name,
        streak: 0,
      };
      return {
        ...state,
        streaks: [...state.streaks, newStreak],
      };
    case DELETE_STREAK:
      return {
        ...state,
        streaks: [
          ...state.streaks.filter(
            (streak: Streak) => streak.id !== action.payload.id
          ),
        ],
      };
    case COMPLETE_STREAK:
      return {
        ...state,
        streaks: [
          ...state.streaks.map(
            (streak: Streak): Streak =>
              streak.id === action.payload.id
                ? {
                    id: streak.id,
                    name: streak.name,
                    streak: (streak.streak += 1),
                  }
                : streak
          ),
        ],
      };
    case RESET_COMPLETION_MARKS:
      return {
        ...state,
        habits: [
          ...state.habits.map(
            ({ name, id, duration, completionMarks }: Habit): Habit => {
              if (id === action.payload.id) {
                return {
                  name,
                  duration,
                  id,
                  completionMarks: [
                    ...completionMarks.map(
                      (completionMark: CompletionMark): CompletionMark => {
                        return {
                          completed: false,
                          timestamp: completionMark.timestamp,
                        };
                      }
                    ),
                  ],
                };
              }
              return { name, id, duration, completionMarks };
            }
          ),
        ],
      };

    default:
      return state;
  }
};
