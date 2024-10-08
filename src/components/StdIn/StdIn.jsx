import { inCharacter } from "../../config/PS1";
import "./StdIn.modules.css";

const StdIn = (props) => {
  const { cmd } = props;

  return (
    <>
      <span className="inCharacter">{inCharacter} </span>
      <span>{cmd}</span>
    </>
  );
};

export default StdIn;
