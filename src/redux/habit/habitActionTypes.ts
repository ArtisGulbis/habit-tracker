export const CREATE_HABIT = 'CREATE_HABIT';
export const DELETE_HABIT = 'DELETE_HABIT';

export type Habit = {
  name: string;
  duration: number;
  id: number;
};

export interface CreateHabit {
  type: typeof CREATE_HABIT;
  payload: Habit;
}

export type Id = {
  id: number;
};

export interface DeleteHabit {
  type: typeof DELETE_HABIT;
  payload: Id;
}

export type HabitDispatchTypes = CreateHabit | DeleteHabit;
