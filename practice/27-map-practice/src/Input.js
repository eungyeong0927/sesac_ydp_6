import React, { useState } from "react";

export default function Input() {
    const [input, setInput] = useState(0);

    return (
        <div>
            <input
                type="text"
                placeholder="이름"
                value={inputName}
                onChange={(e) => {
                    setInputName(e.target.value);
                }}
            ></input>
            <input
                type="text"
                placeholder="이메일"
                value={inputEamil}
                onChange={(e) => {
                    setInputEmail(e.target.value);
                }}
            ></input>
            <button onClick={addInput}>등록</button>
        </div>
    );
}
