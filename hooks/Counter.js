import React, {useState} from 'react'

// 함수형 컴포넌트에서는 클래스형 컴포넌트의 setstate를 대신해 hook함수를 사용
// 해당 컴포넌트는 HOOK중에서도 useState을 사용

function Counter() {
//  const [isLoading, setIsLoading] = useState(true); // isLoading의 초기값: true
//  const [movies, setMovies] = useState([]);

 const [value, setValue] = useState(0);


  return (
    <>
        {/* <button onClick={()=>setIsLoading(false)}>클릭</button>
        <button onClick={()=>setMovies([1,2,3])}>클릭2</button> */}
        <h1>useState Hook 사용하기</h1>
        <p>현재 카운터 값은: <b>{value}</b>입니다. </p>
        <button onClick={()=>setValue(value + 1)}>더하기</button>
        <button onClick={()=>setValue(value - 1)}>빼기</button>
    </>
  )
}

export default Counter