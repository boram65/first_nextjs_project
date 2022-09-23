import { useState } from "react";
import Layout from "./Layout";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div>
        <h2>카운터 {count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
      </div>
    </Layout>
  );
}
