import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";

const BASE_URL = "https://api.github.com/users";

/** GitHub Profile Component --- shows info from GH API */

function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("colt"); //초기 검색어는 "colt" 검색어를 저장하는 상태 변수 username과 이를 업데이트하는 함수 setUsername을 생성
  const [profile, setProfile] = useState({ data: null, isLoading: true }); //검색 결과를 저장하는 상태 변수 profile과 이를 업데이트하는 함수 setProfile을 생성 //데이터 로딩 상태를 나타내는 isLoading 상태 변수를 생성하고, 초기 상태는 true로 설정

  useEffect( //useEffect 훅을 사용하여 컴포넌트가 처음 렌더링될 때와 username이 변경될 때마다 fetchUserOnUsernameChange 함수를 호출 두 번째 인수로 빈 배열 []을 전달하면 효과가 처음 렌더링 이후 한 번만 실행 username이 변경될 때마다 fetchUserOnUsernameChange 함수를 호출
    //useEffect 훅은 함수 컴포넌트에서 부수 효과를 수행하는 데 사용 이 경우, 컴포넌트가 처음 렌더링될 때와 username이 변경될 때마다 fetchUserOnUsernameChange 함수를 호출
    function fetchUserOnUsernameChange() { //fetchUserOnUsernameChange 함수는 username을 인수로 받아서 API에서 사용자 정보를 가져오고, 가져온 정보를 profile 상태 변수에 저장
      async function fetchUser() { //async 함수를 사용하여 API에서 사용자 정보를 가져옴 
        const userResult = await axios.get(`${BASE_URL}/${username}`); //axios 라이브러리를 사용하여 API에서 사용자 정보를 가져옴
        setProfile({ data: userResult.data, isLoading: false }); //가져온 정보를 profile 상태 변수에 저장
      }
      fetchUser(); //fetchUserOnUsernameChange 함수를 호출하여 API에서 사용자 정보를 가져옴
    },
    [username]
  );

  function search(username) { //ProfileSearchForm 컴포넌트에서 search 함수를 props로 전달받음
    setProfile({ data: null, isLoading: true }); //검색어를 전달받으면 profile 상태 변수를 초기화
    setUsername(username); //검색어를 전달받으면 username 상태 변수를 업데이트
  }

  if (profile.isLoading) return <i>Loading...</i>; //데이터 로딩 중에는 "Loading..."을 표시

  return ( //데이터 로딩이 완료되면 사용자 이름과 아바타를 화면에 렌더링
    <div>
      <ProfileSearchForm search={search} />
      <b>{profile.data.name}</b>
      <img src={profile.data.avatar_url} />
    </div>
  );
}

export default ProfileViewerWithSearch;
