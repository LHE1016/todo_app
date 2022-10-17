import React, { useCallback, useMemo, useRef, useState } from 'react'

const getAverage = lists => {
    console.log('평균값 계산중..');
    if(lists.length === 0) return 0;
    const sum = lists.reduce((a,b) => a+b); // reduce 메소드. 입력한 값들을 합산함
    return sum / lists.length;
}

function Average() {
    const [lists,setLists] = useState([]);
    const [number,setNumber] = useState('');
    const inputEl = useRef(null); // hook 함수 / reference / DOM 요소(html요소)에 이름을 달 때 ID대신 사용(DOM을 직접적으로 건드림)
    
    const onChange = useCallback(e => { // [랜더링 성능 최적화] usecallback: 컴포넌트가 처음 랜더링 될 때만(새로고침) 함수 생성 / 두번째 랜더링부터는 함수 재사용
        setNumber(e.target.value);
    },[]); 

    const onInsert = useCallback(e =>{
        console.log('number 혹은 list가 바뀌었을 때만 함수 생성');
        const nextLists = lists.concat(parseInt(number));
        setLists(nextLists); // 리스트가 누적됨
        setNumber('') // number state은 다시 비워짐
        inputEl.current.focus(); // 첫 input창에 깜빡깜빡 포커스
    },[number,lists]);

    const avg = useMemo(() => getAverage(lists),[lists]); // [랜더링 성능 최적화] useMemo: 처음 랜더링 될 때만 일반값 생성, 값이 바뀌지 않으면 이전 연산결과 재사용

  return (
    <div>
        <input value={number} onChange={onChange} ref={inputEl} />
        <button onClick={onInsert}>등록</button>
        <ul>
            {lists.map((list,index) => (
                <li key={index}>{list}</li>
            ))}
        </ul>
        <div><b>평균값:</b> {avg}</div>
    </div>
  )
}

export default Average