//Week-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Impport components here
import BugEffectLoop from "./components/BugEffectLoop";
import BugMutatedState from "./components/BugMutatedState";
import BugProps from "./components/BugProps";

export default function StudentWork() {
  return (
    <div>
      {/* add components here */}
      <p>Student output will go here</p>
      <BugEffectLoop />
      <BugMutatedState />
      <BugProps />
    </div>
  );
}
