import React, {useEffect, useState} from 'react'

function Info() {
    const [name,setName] = useState('');
    const [nickname,setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value)
    }
    const onChangeNickname = e => {
        setNickname(e.target.value)
    }

    //  rcc의 componentDidMount대신 hook 함수 중 useEffect사용 
    useEffect(()=>{
        console.log('랜더링이 완료됐습니다.') // componentDidMount
        console.log({name,nickname}) // componentDidUpdate
    },[name,nickname]);
    //  []안에 state값이 입력되면 useEffect는 componentDidMount + componentDidUpdate 둘다 수행

  return (
    <div>
        <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
            <div> <b>이름:</b> {name}</div>
            <div> <b>닉네임:</b> {nickname}</div>
        </div>
    </div>
  )
}

export default Info