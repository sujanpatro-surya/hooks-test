import { useEffect } from "react"

export const SecondComponent = ({ message }: { message: string }): React.ReactElement => {
  // It's a useEffect because we to call this notify function after the component is rendered.
  useEffect(() => {
    alert(message);
  }, []); // We want this event to run once, hence a blank array.

  return <div>{"Some Text"}</div>;
}
