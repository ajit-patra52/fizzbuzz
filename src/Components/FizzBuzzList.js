import React from "react";

export default function FizzBuzzList(props) {
  const list = props?.list;
  console.log(list);
  return (
    <>
      <div className="row">
        <ul>
          {list?.map((x) => {
            <li>{x}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
