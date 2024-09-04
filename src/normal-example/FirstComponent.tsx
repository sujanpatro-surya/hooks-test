import { SecondComponent } from "./SecondComponent";

export const FirstComponent = (): React.ReactElement => {

  const notify = (message: string): void => {
    alert(message);
  };

  const notificationMessage = "Hello There";

  return (
    <div>
      <button onClick={() => notify(notificationMessage)}>Notify</button>
      <SecondComponent message={notificationMessage} />
    </div>
  );
};
