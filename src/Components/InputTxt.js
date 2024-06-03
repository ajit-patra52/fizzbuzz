import { React, useRef, useContext } from "react";
import { TextField, Button } from "../Shared/Material";
import { Context } from "../Context";

export default function InputTxt() {
  const [context, setContext] = useContext(Context);
  const inputRef = useRef(0);
  const handleSubmit = () => {
    const value = inputRef.current.value?.trim();
    if (!!value.length) {
      setContext(value);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center" style={{ gap: "5px" }}>
        <TextField
          label="Enter number"
          variant="outlined"
          required
          inputRef={inputRef}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <p>{JSON.stringify(context)}</p>
    </>
  );
}
