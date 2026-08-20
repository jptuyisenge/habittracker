import { useState } from "react";

import { Header } from "./components/Header";
import { HabitForm } from "./components/HabitForm";
import { HabitList, type Habit } from "./components/HabitList";

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  function addHabit(name: string) {
    setHabits((curr) => [...curr, { id: crypto.randomUUID(), name }]);
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4 p-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} />
    </div>
  );
}
