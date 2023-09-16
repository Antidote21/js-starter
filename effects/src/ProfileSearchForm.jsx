import { useState } from "react";

function ProfileSearchForm({ search }) {//ProfileSearchForm 컴포넌트는 search 함수를 props로 전달받음
  const [term, setTerm] = useState("");//검색어를 저장하는 상태 변수 term과 이를 업데이트하는 함수 setTerm을 생성

  function handleChange(evt) { //검색어를 입력할 때마다 상태 변수 term을 업데이트
    setTerm(evt.target.value); //이벤트 객체의 target.value 속성을 사용하여 검색어를 추출
  }

  function handleSubmit(evt) {//검색어를 입력하고 폼을 제출하면 search 함수를 호출
    evt.preventDefault();//이벤트 객체의 preventDefault 메서드를 호출하여 기본 동작을 막음
    search(term);//search 함수를 호출하여 검색어를 전달
    setTerm("");//검색어를 전달한 후에는 상태 변수 term을 빈 문자열로 업데이트
  }

  return (//검색어를 입력할 수 있는 <input> 엘리먼트와 검색 버튼을 포함하는 <form> 엘리먼트를 반환
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={handleChange} />
      <button>Search!</button>
    </form>
  );
}

export default ProfileSearchForm;
