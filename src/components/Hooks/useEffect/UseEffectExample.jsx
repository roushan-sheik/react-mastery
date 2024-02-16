import React, { useEffect, useState } from "react";
const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  //* usEffect useState এর মত এটা method সব সময় একটা anonymous function  নিবে।
  //* এটার সাহায্যে sideEffect এর কাজ গুলো করতে পারি।
  //* যখনই রেন্ডার হবে তখনই usEffect টা কল হবে।
  //* নরমালি State এর value পরিবর্তন হওয়ার সাথে সাথে usEffect কল হবে।
  //* কিন্তু আমরা চাইলে dependency add করে দিতে পারি। //[] ব্রাকেট এর মাধ্যমে।
  //* dependency add করলে শুধুমাত্র প্রথম েরেন্ডারিং এ কল হবে।
  //* অর্থাৎ কোন State এর উপর ভিত্তি করে render হবে dependency
  //* এর মাধ্যমে বলে দিতে হয়।
  useEffect(() => {
    console.log("use effect calling...");
  }, [count]);
  return (
    <section className="container flex justify-center">
      {/* // counter  */}
      <div className="w-1/2 p-4">
        <h2>{count}</h2>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="btn btn-secondary"
        >
          Increment
        </button>
      </div>
    </section>
  );
};

export default UseEffectExample;
