import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './redux/store';
import { createHabit, deleteHabit } from './redux/habit/habitActions';
import { Formik, Form, Field } from 'formik';
import { Habit } from './redux/habit/habitActionTypes';
import uniqid from 'uniqid';

function App() {
  const habitState = useSelector((state: RootStore) => state.habitReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Formik
        initialValues={{ name: '', duration: 0 }}
        onSubmit={(values) => {
          dispatch(createHabit(values.name, values.duration, uniqid()));
        }}
      >
        <Form>
          <Field type="text" name="name" />
          <Field type="text" name="duration" />
          <button type="submit">create</button>
        </Form>
      </Formik>
      {habitState.habits.map((habit: Habit) => (
        <div key={habit.id}>
          {habit.name} : {habit.duration}
          <button onClick={() => dispatch(deleteHabit(habit.id))}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
