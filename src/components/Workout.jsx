import React from 'react';

function Workout(props) {
  const Exercise = (name, reps, canUseEquipment, canNoEquipment) => {return {name: name, reps: reps, canUseEquipment: canUseEquipment, canNoEquipment: canNoEquipment}};
  const arms = [
    Exercise("Bent Over Rows", 12, true, false),
    Exercise("Overhead Press", 12, true, false),
    Exercise("Overhead Incline Press", 12, true, false),
    Exercise("Bench", 12, true, false),
    Exercise("Lat Pulldown", 8, true, false),
    Exercise("Low to High", 12, true, false),
    Exercise("Squat & Press", 10, true, false),
    Exercise("Bicep Curl", 10, true, false),
    Exercise("Shoulder Shrug", 10, true, false),
    Exercise("Chest Fly", 10, true, false),
    Exercise("Forwards Arm Raise", 10, true, false),
    Exercise("Outwards Arm Raise", 10, true, false),
    Exercise("Pushups", 8, false, true),
    Exercise("Tricep Dips", 10, false, true),
    Exercise("Burpees", 10, false, true),
    Exercise("Spider Pushups", 8, false, true),
    Exercise("Arm Circles", 30, false, true),
    Exercise("Plank Walk", 6, false, true)
  ];

  const abs = [
    Exercise("Russian Twists", 20, true, false),
    Exercise("Plank Rows", 12, true, false),
    Exercise("Bent Leg Jackknifes", 10, true, true),
    Exercise("Plank Dumbbell Pull Through", 10, true, false),
    Exercise("Leg Up Crunch Pulse", 20, true, true),
    Exercise("Knees to Chest with Dumbbell Between Legs", 8, true, false),
    Exercise("Vertical Scissor Kicks", 16, true, true),
    Exercise("Horizontal Scissor Kicks", 16, false, true),
    Exercise("Leg Raises with Hip Lift", 10, false, true),
    Exercise("Side Planks", 10, true, true),
    Exercise("Mountain Climbers", 40, false, true),
    Exercise("Straight Leg Jackknifes", 8, true, true),
    Exercise("Bicycle Crunches", 20, true, true)
  ];

  const lower = [
    Exercise("Squat", 12, true, true),
    Exercise("Reverse Lunge", 12, true, true),
    Exercise("Side Lunge", 12, true, true),
    Exercise("Curtsy Lunge", 12, true, true),
    Exercise("Jump Squat", 10, false, true),
    Exercise("Weighted Step Ups", 12, true, false),
    Exercise("Single Leg Deadlift", 16, true, false),
    Exercise("Hip Thrust", 10, true, false),
    Exercise("Kettlebell Swing", 10, true, false),
    Exercise("Clams", 20, false, true),
    Exercise("Calf Raises", 16, true, true),
    Exercise("Leg Press", 15, true, false),
    Exercise("Leg Extension", 15, true, false)
  ]

  if(props.type["Focus Area"].length === 0) return null;
  let remixed = props.type["Focus Area"].map((item) => {
    if (item === "Arms") {
      return arms.sort(() => Math.random() - 0.5).slice(0,4);
    } else if (item === "Abs") {
      return abs.sort(() => Math.random() - 0.5).slice(0,4);
    } else {
      return lower.sort(() => Math.random() - 0.5).slice(0,4);
    }
  });
  remixed = [].concat.apply([], remixed).sort(() => Math.random() - 0.5);

  return (
    <table style={{margin:"3rem auto 3rem auto"}}>
      <tbody>
        {remixed.map((e) => {
          return(
            <tr key={e.name}>
              <td style={{textAlign:"left"}}>{e.name}</td>
              <td style={{textAlign:"right"}}>{e.reps} Reps</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Workout;