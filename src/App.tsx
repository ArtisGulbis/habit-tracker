import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { default as HabitComp } from './components/Habit';
import './index.css';
import { createHabit, createStreak } from './redux/habit/habitActions';
import { Habit, Streak } from './redux/habit/habitActionTypes';
import { RootStore } from './redux/store';

function App() {
  const { habits, streaks } = useSelector(
    (state: RootStore) => state.habitReducer
  );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Formik
        initialValues={{ name: '', duration: 1 }}
        onSubmit={(values, actions) => {
          const id = uniqid();
          dispatch(createHabit(values.name, values.duration, id));
          dispatch(createStreak(values.name, id));
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="name"
            placeholder="Give your habit a name"
            required
          />
          <Field name="duration" component="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </Field>
          <button type="submit">create</button>
        </Form>
      </Formik>
      <div className="container flex">
        <div>
          {habits
            ? habits.map((habit: Habit) => (
                <HabitComp
                  key={habit.id}
                  name={habit.name}
                  id={habit.id}
                  completionMarks={habit.completionMarks}
                />
              ))
            : ''}
        </div>
        <div className="m-6">
          {streaks.map((streak: Streak) => {
            return (
              <div key={streak.id}>
                {streak.name} : {streak.streak}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
