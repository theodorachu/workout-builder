import React from 'react';
import TimeTable from './WorkoutComponents/TimeTable';
import RepTable from './WorkoutComponents/RepTable';
import { v4 as uuidv4 } from 'uuid';

function Workout(props) {

  const Exercise = (name, length, canUseEquipment, canNoEquipment) => {return {name: name, length: length, canUseEquipment: canUseEquipment, canNoEquipment: canNoEquipment}};
  const TimeExercise = (name, time, restActivity, restTime, sets, canUseEquipment, canNoEquipment) => {return {name: name, time: time, restActivity: restActivity, restTime: restTime, sets: sets, canUseEquipment: canUseEquipment, canNoEquipment: canNoEquipment}};

  const cardio = [
    TimeExercise("Sprint", "15 sec", "Jog", "30 sec", 3, true, true),
    TimeExercise("Stair Stepper", "3 min", "Rest", "30 sec", 2, true, false),
    TimeExercise("Endurance Run", "3 min", "Rest", "30 sec", 2, true, true)
  ];

  const arms = [
    Exercise("Bent Over Rows", "12 Reps", true, false),
    Exercise("Overhead Press", "10 Reps", true, false),
    Exercise("Overhead Incline Press", "12 Reps", true, false),
    Exercise("Bench", "12 Reps", true, false),
    Exercise("Lat Pulldown", "8 Reps", true, false),
    Exercise("Low to High", "6 Reps / Side", true, false),
    Exercise("Squat & Press", "10 Reps", true, false),
    Exercise("Bicep Curl", "10 Reps", true, false),
    Exercise("Shoulder Shrug", "10 Reps", true, false),
    Exercise("Chest Fly", "10 Reps", true, false),
    Exercise("Forwards Arm Raise", "10 Reps", true, false),
    Exercise("Outwards Arm Raise", "10 Reps", true, false),
    Exercise("Pushups", "8 Reps", false, true),
    Exercise("Tricep Dips", "10 Reps", false, true),
    Exercise("Burpees", "10 Reps", false, true),
    Exercise("Spider Pushups", "4 Reps / Side", false, true),
    Exercise("Arm Circles", "30 Reps", false, true),
    Exercise("Plank Walk", "6 Reps", false, true)
  ];

  const abs = [
    Exercise("Russian Twists", "10 Reps / Side", true, false),
    Exercise("Plank Rows", "6 Reps / Side", true, false),
    Exercise("Bent Leg Jackknifes", "10 Reps", true, true),
    Exercise("Plank Dumbbell Pull Through", "6 Reps / Side", true, false),
    Exercise("Leg Up Crunch Pulse", "20 Reps", true, true),
    Exercise("Knees to Chest with Dumbbell Between Legs", "8 Reps", true, false),
    Exercise("Vertical Scissor Kicks", "16 Reps", true, true),
    Exercise("Horizontal Scissor Kicks", "16 Reps", false, true),
    Exercise("Leg Raises with Hip Lift", "10 Reps", false, true),
    Exercise("Side Planks", "10 Reps / Side", true, true),
    Exercise("Mountain Climbers", "40 Reps", false, true),
    Exercise("Straight Leg Jackknifes", "8 Reps", true, true),
    Exercise("Bicycle Crunches", "10 Reps / Side", true, true)
  ];

  const lower = [
    Exercise("Squat", "12 Reps", true, true),
    Exercise("Reverse Lunge", "8 Reps / Side", true, true),
    Exercise("Side Lunge", "8 Reps / Side", true, true),
    Exercise("Curtsy Lunge", "8 Reps / Side", true, true),
    Exercise("Jump Squat", "10 Reps", false, true),
    Exercise("Weighted Step Ups", "8 Reps / Side", true, false),
    Exercise("Single Leg Deadlift", "8 Reps / Side", true, false),
    Exercise("Hip Thrust", "12 Reps", true, false),
    Exercise("Kettlebell Swing", "12 Reps", true, false),
    Exercise("Clamshell", "10 Reps / Side", false, true),
    Exercise("Calf Raises", "16 Reps", true, true),
    Exercise("Leg Press", "15 Reps", true, false),
    Exercise("Leg Extension", "15 Reps", true, false),
    Exercise("Crab Walk", "5 Reps / Side", true, true),
    Exercise("Laying Down Side Leg Raise", "10 Reps / Side", false, true)
  ]

  if(props.type["Focus Area"].length === 0) return null;
  let remixed = props.type["Focus Area"].map((item) => {
    if (item === "Arms") {
      if(props.type["Uses Equipment"])
        return arms.filter((ex) => ex.canUseEquipment).sort(() => Math.random() - 0.5).slice(0,4);
      return arms.filter((ex) => ex.canNoEquipment).sort(() => Math.random() - 0.5).slice(0,4);
    } else if (item === "Abs") {
      const end = props.type["Focus Area"].length === 1 ? 6 : 4;
      if(props.type["Uses Equipment"])
        return abs.filter((ex) => ex.canUseEquipment).sort(() => Math.random() - 0.5).slice(0,end);
      return abs.filter((ex) => ex.canNoEquipment).sort(() => Math.random() - 0.5).slice(0,end);
    } else {
      if(props.type["Uses Equipment"])
        return lower.filter((ex) => ex.canUseEquipment).sort(() => Math.random() - 0.5).slice(0,4);
      return lower.filter((ex) => ex.canNoEquipment).sort(() => Math.random() - 0.5).slice(0,4);
    }
  });
  remixed = [].concat.apply([], remixed).sort(() => Math.random() - 0.5);

  let cardioEx = [];
  if(props.type["Uses Equipment"])
    cardioEx = cardio.filter((ex) => ex.canUseEquipment).sort(() => Math.random() - 0.5)[0];
  else
    cardioEx = cardio.filter((ex) => ex.canNoEquipment).sort(() => Math.random() - 0.5)[0];

  let workoutOrder = [];
  if (props.type["Focus Area"].length === 1) {
    if(props.type["Includes Cardio"])
      workoutOrder = ["strength", "break", "strength", "cardio", "break", "strength", "break", "strength", "cardio"];
    else
      workoutOrder = ["strength", "break", "strength", "break", "strength", "break", "strength"];
  } else if (props.type["Focus Area"].length === 2) {
    if(props.type["Includes Cardio"])
      workoutOrder = ["strength", "cardio", "break", "strength", "cardio", "break", "strength"];
    else
      workoutOrder = ["strength", "break", "strength", "break", "strength"];
  } else {
    if(props.type["Includes Cardio"])
      workoutOrder = ["strength", "cardio", "break", "strength", "cardio"];
    else
      workoutOrder = ["strength", "break", "strength"];
  }

  const printWorkout = () => {
    return(
      workoutOrder.map((item) => {
        if(item === "strength")
          return <RepTable key={uuidv4()} remixed={remixed}/>;
        else if (item === "cardio")
          return <TimeTable key={uuidv4()} ex={cardioEx}/>;
          return <h3 key={uuidv4()}>~ Break for 2 min ~</h3>;
      })
    );
  }

  return (
    <div style={{margin:"3rem auto"}}>
      <h1>Workout</h1>
      {printWorkout()}
    </div>
  );
}

export default Workout;