export const CREATE_HABIT = 'CREATE_HABIT';
export const CREATE_STREAK = 'CREATE_STREAK';
export const DELETE_STREAK = 'DELETE_STREAK';
export const COMPLETE_STREAK = 'COMPLETE_STREAK';
export const DELETE_HABIT = 'DELETE_HABIT';
export const UPDATE_HABIT_STREAK = 'UPDATE_HABIT_STREAK';
export const RESET_COMPLETION_MARKS = 'RESET_COMPLETION_MARKS';

export type Habit = {
  name: string;
  completionMarks: CompletionMark[];
  duration: number;
  id: string;
};

export type Streak = {
  id: string;
  name: string;
  streak: number;
};

export type CompletionMark = {
  timestamp: string;
  completed: boolean;
};

export type CreateHabitPayload = {
  name: string;
  duration: number;
  id: string;
};

export interface CreateHabit {
  type: typeof CREATE_HABIT;
  payload: CreateHabitPayload;
}

export interface ResetCompletionMarks {
  type: typeof RESET_COMPLETION_MARKS;
  payload: Id;
}

export interface UpdateHabitStreak {
  type: typeof UPDATE_HABIT_STREAK;
  payload: Id;
}

export interface DeleteHabit {
  type: typeof DELETE_HABIT;
  payload: Id;
}

export type CreateStreakPayload = {
  name: string;
  id: string;
};

export interface CreateStreak {
  type: typeof CREATE_STREAK;
  payload: CreateStreakPayload;
}

export interface CompleteStreak {
  type: typeof COMPLETE_STREAK;
  payload: Id;
}

export type Id = {
  id: string;
};

export interface DeleteStreak {
  type: typeof DELETE_STREAK;
  payload: Id;
}

export type HabitDispatchTypes =
  | CreateHabit
  | DeleteHabit
  | UpdateHabitStreak
  | CreateStreak
  | DeleteStreak
  | CompleteStreak
  | ResetCompletionMarks;
