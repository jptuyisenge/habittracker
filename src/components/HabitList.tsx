import { Button } from "./Button";
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isFuture,
  startOfWeek,
} from "date-fns";

export type Habit = { id: string; name: string };

type HabitsListProps = {
  habits: Habit[];
};

export function HabitList({ habits }: HabitsListProps) {
  if (habits.length == 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits Yet. Add one above and get started
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habitItem={habit} />
      ))}
    </div>
  );
}

type habitItemProps = {
  habitItem: Habit;
};

function HabitItem({ habitItem }: habitItemProps) {
  const visibleDate = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  return (
    <div className="rounded-lg bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-medium">{habitItem.name}</span>
          <span className="text-zinc-400 text-sm"> 🔥 3</span>
        </div>
        <Button variant="ghost-destructive" className="text-sm">
          Delete
        </Button>
      </div>
      <div className="flex gap-1.5">
        {visibleDate.map((date) => (
          <Button
            variant="primary"
            key={date.toString()}
            disabled={isFuture(date)}
            className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-sx"
          >
            <span className="font-medium">{format(date, "EEE")}</span>
            <span>2</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
