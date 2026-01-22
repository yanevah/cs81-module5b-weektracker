// Nina Janeev
// https://github.com/yanevah/cs81-module5b-weektracker


const myWeek = [
  {
    day: "Monday",
    activity: "Reading",
    category: "creative",
    hoursSpent: 1,
    enjoyment: 8,
    timeOfDay: "afternoon"
  },
  {
    day: "Tuesday",
    activity: "Hiking",
    category: "physical",
    hoursSpent: 2,
    enjoyment: 9,
    timeOfDay: "morning"
  },
  {
    day: "Wednesday",
    activity: "Baking",
    category: "creative",
    hoursSpent: 2,
    enjoyment: 8,
    timeOfDay: "afternoon"
  },
  {
    day: "Thursday",
    activity: "Gym",
    category: "physical",
    hoursSpent: 1,
    enjoyment: 5,
    timeOfDay: "morning"
  },
  {
    day: "Friday",
    activity: "Walking",
    category: "physical",
    hoursSpent: 2,
    enjoyment: 7,
    timeOfDay: "afternoon"
  },
  {
    day: "Saturday",
    activity: "Yoga",
    category: "physical",
    hoursSpent: 1,
    enjoyment: 7,
    timeOfDay: "afternoon"
  },
  {
    day: "Sunday",
    activity: "Meet with friends",
    category: "social",
    hoursSpent: 2,
    enjoyment: 8,
    timeOfDay: "afternoon"
  }
];

// PREDICTIONS
// Highest enjoyment activity: Hiking
// Most common category: Physical
// Afternoon activities will be most frequent 

// ------------------
// ANALYSIS FUNCTIONS

// Calculates total hours spent on physical activities
function totalPhysicalHours(week) {
  return week
    .filter(day => day.category === "physical")
    .reduce((sum, day) => sum + day.hoursSpent, 0);
}
// Calculates average enjoyment for afternoon activities
function averageAfternoonEnjoyment(week) {
  const afternoonActivities = week.filter(
    day => day.timeOfDay === "afternoon"
  );

  const totalEnjoyment = afternoonActivities.reduce(
    (sum, day) => sum + day.enjoyment,
    0
  );

  return totalEnjoyment / afternoonActivities.length;
}
// Determines the most common activity category
function mostCommonCategory(week) {
  const counts = week.reduce((acc, day) => {
    acc[day.category] = (acc[day.category] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );
}

// Finds activities that take little time but are highly enjoyable
function lowEffortHighEnjoyment(week) {
  return week
    .filter(day => day.hoursSpent <= 1 && day.enjoyment >= 8)
    .map(day => day.activity);
}
// ----------------------------
// CUSTOM HIGHER-ORDER FUNCTION

// Accepts a test function and filters activities based on it
function filterActivities(testFn) {
  return myWeek.filter(testFn);
}
// custom higher-order function
const longPhysicalActivities = filterActivities(
  act => act.category === "physical" && act.hoursSpent >= 2
);

// -------------
// OUTPUT
console.log("Long physical activities:", longPhysicalActivities);

console.log("Analyzing My Weekly Activities...\n");

console.log(
  "Total hours spent on physical activities:",
  totalPhysicalHours(myWeek)
);

console.log(
  "Average enjoyment for afternoon activities:",
  averageAfternoonEnjoyment(myWeek).toFixed(1)
);

console.log(
  "Most common activity category:",
  mostCommonCategory(myWeek)
);

console.log(
  "Low-effort, high-enjoyment activities:",
  lowEffortHighEnjoyment(myWeek).join(", ")
);

