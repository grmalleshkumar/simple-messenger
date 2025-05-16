import "./Greeting.css";

interface Props {
  name: string;
}

const Greetings = ({ name }: Props) => {
  const myDate = new Date();
  const hours = myDate.getHours();
  let greet;

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 17) greet = "afternoon";
  else if (hours >= 17 && hours <= 24) greet = "evening";

  return (
    <p className="greeting">
      Good {greet}, {name}
    </p>
  );
};

export default Greetings;
