import { useEffect, useRef, useState } from "react";
import "./App.css";
import { MpSdk, setupSdk } from "@matterport/sdk";

function App() {
  const [sdk, setSdk] = useState<MpSdk>();
  const [horizontal, setHorizontal] = useState(45);
  const [vertical, setVertical] = useState(15);
  const container = useRef<HTMLDivElement>(null);
  let started = false;

  useEffect(() => {
    if (!started && container.current) {
      started = true;
      setupSdk("YOUR_SDK_KEY", {
        container: container.current,
        space: "j4RZx7ZGM6T",
        iframeQueryParams: { qs: 1 },
      }).then(setSdk);
    }
  }, []);

  const rotate = () => {
    sdk?.Camera.rotate(horizontal, vertical);
  };

  return (
    <div className="app">
      <div className="container" ref={container}></div>

      <div className="button-wrap">
        <label>
          <span>Horizontal rotation</span>
          <input
            type="number"
            onInput={(evt) =>
              setHorizontal(parseFloat((evt.target as HTMLInputElement).value))
            }
            value={horizontal}
          />
        </label>
        <label>
          <span>Vertical rotation</span>
          <input
            type="number"
            onInput={(evt) =>
              setVertical(parseFloat((evt.target as HTMLInputElement).value))
            }
            value={vertical}
          />
        </label>
        <button onClick={rotate}>Rotate</button>
      </div>
    </div>
  );
}

export default App;
