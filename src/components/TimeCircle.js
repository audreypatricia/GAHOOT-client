import React from "react";
export default function TimeCircle() {
  const [timer, setTimer] = React.useState(60);
  const id = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };
  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <div className="TimeCircle">
      <div>Time left : {timer} </div>
    </div>
  );
}
