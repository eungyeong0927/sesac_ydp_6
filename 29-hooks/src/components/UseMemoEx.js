import React, { useState, useMemo } from "react";

// useMemo
// - 메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화
export default function UseMemoEx() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(""); // 재랜더링용

    // [before]
    const calc = () => {
        console.log("열심히 계산중 ..💦[before]");
        for (let i = 0; i < 1000000; i++) {} // 시간 소모적인 작업 대신 delay용으로 for문 사용
        return count ** 2;
    };

    // [after] useMemo 적용
    const calcMemo = useMemo(() => {
        console.log("열심히 계산중 ..📝[after]");
        for (let i = 0; i < 1000000; i++) {} // 시간 소모적인 작업 대신 delay용으로 for문 사용
        return count ** 2;
    }, [count]);
    // count의 값이 바뀔 때에만 함수를 실행
    // input 상태가 바뀌면 컴포넌트는 리랜더링 되지만 calc는 연산되지 않음
    // 의존성을 부여해서 함수가 계속 실행되어 과부하가 걸리는 일이 없도록 함

    return (
        <div>
            <h1>UseMemoEx</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={() => setCount(() => count + 1)}>Plus</button>
            <p>count : {count}</p>

            {/* [before] */}
            <p>calc : {calc()}</p>

            {/* [after] */}
            <p>calcMemo : {calcMemo}</p>
        </div>
    );
}
