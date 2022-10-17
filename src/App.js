import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './App.css'

function App() {
  const[todos, setTodos] = useState([
    {
      id:1,
      text  : '운동하기',
      checked: true,
    },
    {
      id:2,
      text  : '요리하기',
      checked: true,
    },
    {
      id:3,
      text  : '학원하기',
      checked: false,
    }
  ]);

  const nextId = useRef(4); // ref를 사용하여 변수 담기
  const onInsert = useCallback(value =>{
    const todo = {
      id: nextId.current,
      text: value,
      checked: false,
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos]); // todos값이 바뀔때 마다

  const onRemove = useCallback(id =>{
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);

  const onToggle = useCallback(id =>{
    setTodos(todos.map(todo => todo.id === id? {...todo,checked: !todo.checked} : todo));
                                                // id번째 todo의 모든 값을 가지고와서 checked의 속성값만 기존 checked 값의 반대로 바꿈 
  },[todos])

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert = {onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
      {/* 컴포넌트도 시작/종료 태그처럼 작성이 가능하다 > 그 안에 내용을 집어 넣을수있음. 텍스트대신 컴포넌트를 넣으면 컴포넌트가 나옴. 이 컴포넌트는 템플릿의 자식요소로 들어감.(헷갈리면 개발자 찍어보기) */}
    </div>
  );
}

export default App;

