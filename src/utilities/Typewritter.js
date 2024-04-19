import { useEffect, useState } from "react";

function Typewritter({ text, delay = "0", speed = "50" }) {
  const now = new Date().getTime();

  delay = parseInt(delay);
  speed = parseInt(speed);

  const [element, setElement] = useState("");

  useEffect(() => {
    let offset = 0;

    const interval = setInterval(() => {
      if (new Date().getTime() > now + delay) {
        offset += 1;

        const newText = text.substring(0, offset);
        setElement(newText);

        if (offset == text.length) {
          clearInterval(interval);
        }
      }
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return element;
}

export default Typewritter;
