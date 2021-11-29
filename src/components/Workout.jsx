import React from 'react';

function Workout(props) {
  const Exercise = (name, reps, perSide, canUseEquipment, canNoEquipment) => {return {name: name, reps: reps, perSide: perSide, canUseEquipment: canUseEquipment, canNoEquipment: canNoEquipment}};
  const arms = [
    Exercise("Bent Over Rows", 12, false, true, false),
    Exercise("Overhead Press", 12, false, true, false),
    Exercise("Overhead Incline Press", 12, false, true, false),
    Exercise("Bench", 12, false, true, false),
    Exercise("Lat Pulldown", 8, false, true, false),
    Exercise("Low to High", 6, true, true, false),
    Exercise("Squat & Press", 10, false, true, false),
    Exercise("Bicep Curl", 10, false, true, false),
    Exercise("Shoulder Shrug", 10, false, true, false),
    Exercise("Chest Fly", 10, false, true, false),
    Exercise("Forwards Arm Raise", 10, false, true, false),
    Exercise("Outwards Arm Raise", 10, false, true, false),
    Exercise("Pushups", 8, false, false, true),
    Exercise("Tricep Dips", 10, false, false, true),
    Exercise("Burpees", 10, false, false, true),
    Exercise("Spider Pushups", 4, true, false, true),
    Exercise("Arm Circles", 30, false, false, true),
    Exercise("Plank Walk", 6, false, false, true)
  ];

  const abs = [
    Exercise("Russian Twists", 10, true, true, false),
    Exercise("Plank Rows", 6, true, true, false),
    Exercise("Bent Leg Jackknifes", 10, false, true, true),
    Exercise("Plank Dumbbell Pull Through", 6, true, true, false),
    Exercise("Leg Up Crunch Pulse", 20, false, true, true),
    Exercise("Knees to Chest with Dumbbell Between Legs", 8, false, true, false),
    Exercise("Vertical Scissor Kicks", 16, false, true, true),
    Exercise("Horizontal Scissor Kicks", 16, false, false, true),
    Exercise("Leg Raises with Hip Lift", 10, false, false, true),
    Exercise("Side Planks", 10, true, true, true),
    Exercise("Mountain Climbers", 40, false, false, true),
    Exercise("Straight Leg Jackknifes", 8, false, true, true),
    Exercise("Bicycle Crunches", 10, true, true, true)
  ];

  const lower = [
    Exercise("Squat", 12, false, true, true),
    Exercise("Reverse Lunge", 6, true, true, true),
    Exercise("Side Lunge", 6, true, true, true),
    Exercise("Curtsy Lunge", 6, true, true, true),
    Exercise("Jump Squat", 10, false, false, true),
    Exercise("Weighted Step Ups", 6, true, true, false),
    Exercise("Single Leg Deadlift", 8, true, true, false),
    Exercise("Hip Thrust", 10, false, true, false),
    Exercise("Kettlebell Swing", 10, false, true, false),
    Exercise("Clamshell", 10, true, false, true),
    Exercise("Calf Raises", 16, false, true, true),
    Exercise("Leg Press", 15, false, true, false),
    Exercise("Leg Extension", 15, false, true, false),
    Exercise("Crab Walk", 4, true, true, true),
    Exercise("Laying Down Side Leg Raise", 10, true, false, true)
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

  let count = 0;
  if (props.type["Focus Area"].length === 1) {
    count = 3;
  } else if (props.type["Focus Area"].length === 2) {
    count = 2;
  } else {
    count = 1;
  }

  return (
    <div style={{margin:"3rem auto"}}>
      <h1>Workout</h1>
      {[...Array(count-1)].map(() => {
        return(
          <div>
            <table style={{margin:"auto",maxWidth:"80%"}}>
              <tbody>
                {remixed.map((e) => {
                  return(
                    <tr key={e.name}>
                      <td style={{textAlign:"left"}}>{e.name}</td>
                      <td style={{textAlign:"right", whiteSpace:"nowrap"}}>{e.reps} {(e.perSide) ? "Reps / Side" : "Reps"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h2>Break for 3m</h2>
          </div>
        );
      })}
      <table style={{margin:"auto",maxWidth:"80%"}}>
        <tbody>
          {remixed.map((e) => {
            return(
              <tr key={e.name}>
                <td style={{textAlign:"left"}}>{e.name}</td>
                <td style={{textAlign:"right", whiteSpace:"nowrap"}}>{e.reps} {(e.perSide) ? "Reps / Side" : "Reps"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Workout;