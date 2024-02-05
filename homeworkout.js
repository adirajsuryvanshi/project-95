const workouts = [
    {
      name: "Chest and Triceps",
      exercises: [
        {
          name: "Flat Bench Press",
          reps: 10,
          sets: 3
        },
        {
          name: "Incline Dumbbell Press",
          reps: 10,
          sets: 3
        },
        {
          name: "Dips",
          reps: "to failure",
          sets: 3
        },
        {
          name: "Close-Grip Bench Press",
          reps: 10,
          sets: 3
        },
        {
          name: "Overhead Tricep Extension",
          reps: 10,
          sets: 3
        }
      ]
    },
    {
      name: "Back and Biceps",
      exercises: [
        {
          name: "Wide-Grip Lat Pulldown",
          reps: 10,
          sets: 3
        },
        {
          name: "Seated Cable Rows",
          reps: 10,
          sets: 3
        },
        {
          name: "Hammer Curls",
          reps: 10,
          sets: 3
        },
        {
          name: "Preacher Curl",
          reps: 10,
          sets: 3
        },
        {
          name: "Concentration Curl",
          reps: 10,
          sets: 3
        }
      ]
    },
    {
      name: "Shoulders",
      exercises: [
        {
          name: "Dumbbell Shoulder Press",
          reps: 10,
          sets: 3
        },
        {
          name: "Lateral Raises",
          reps: 10,
          sets: 3
        },
        {
          name: "Front Raises",
          reps: 10,
          sets: 3
        },
        {
          name: "Rear Delt Flyes",
          reps: 10,
          sets: 3
        },
        {
          name: "Shrugs",
          reps: 10,
          sets: 3
        }
      ]
    },
    {
      name: "Abdominals",
      exercises: [
        {
          name: "Crunches",
          reps: "to failure",
          sets: 3
        },
        {
          name: "Russian Twists",
          reps: 10,
          sets: 3
        },
        {
          name: "Leg Raises",
          reps: "to failure",
          sets: 3
        }
      ]
    }
  ];
  
  const main = () => {
    console.log("Starting workout...");
    workouts.forEach(workout => {
      console.log(`Starting ${workout.name} workout...`);
      workout.exercises.forEach(exercise => {
        console.log(`Starting ${exercise.name} exercise...`);
        for (let i = 1; i <= exercise.reps; i++) {
          console.log(`Doing ${i} rep of ${exercise.name}...`);
        }
        console.log(`Finished ${exercise.name} exercise!`);
      });
      console.log(`Finished ${workout.name} workout!`);
    });
    console.log("Workout complete!");
  };
  
  main();