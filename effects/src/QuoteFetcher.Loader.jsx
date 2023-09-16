import { useEffect, useState } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
//API에서 무작위 인용구를 가져오기 위해 사용할 URL을 상수로 정의

export default function QuoteFetcherLoader() {
    const [quote, setQuote] = useState({ text: "", author: "" });
    //useState 훅을 사용하여 상태 변수 quote와 이를 업데이트하는 함수 setQuote를 생성
    //초기 상태는 빈 텍스트와 저자 속성을 가진 객체
    const [isLoading, setIsLoading] = useState(true);
    //데이터 로딩 상태를 나타내는 isLoading 상태 변수를 생성하고, 초기 상태는 true로 설정

    useEffect(() => {
        async function fetchQuote() {
            const response = await fetch(RANDOM_QUOTE_URL);//fetch 함수를 사용하여 API에서 무작위 인용구를 가져옴
            const jsonResponse = await response.json();//응답을 JSON으로 파싱
            const randomQuote = jsonResponse.quote;//응답에서 quote 속성을 추출
            setQuote(randomQuote);//새로운 인용구로 상태를 업데이트
            setIsLoading(false);//데이터 로딩이 완료되었음을 나타내는 isLoading 상태를 false로 업데이트
        }
        fetchQuote();//fetchQuote 함수를 호출하여 인용구를 가져옴
    }, []);
    //useEffect 훅은 함수 컴포넌트에서 부수 효과를 수행하는 데 사용 이 경우, 컴포넌트가 처음 렌더링될 때 인용구를 가져오기 위해 사용 
    //두 번째 인수로 빈 배열 []을 전달하면 효과가 처음 렌더링 이후 한 번만 실행



    return (
        <div>
            {/* <button onClick={fetchQuote}>Get Quote Using handler</button> */}
            <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>Loading...</p>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
    //Loader 클래스를 가진 <p> 엘리먼트: 데이터가 로딩 중인 동안에만 표시되며 isLoading 상태에 따라 투명도가 조절
    //현재 인용구의 텍스트를 표시하는 <h1> 엘리먼트
    //현재 인용구의 저자를 표시하는 <h3> 엘리먼트
}
/*
이 컴포넌트는 초기 로딩 중에 "Loading..."을 표시하고, 
데이터가 로드되면 무작위 인용구의 텍스트와 저자를 화면에 렌더링 
데이터 로딩 상태는 isLoading 상태 변수를 통해 관리되며, 
데이터 로딩이 완료되면 isLoading이 false로 설정 
*/