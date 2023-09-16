import { useEffect, useState } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ text: "", author: "" });
    //useState 훅을 사용하여 상태 변수 quote와 이를 업데이트하는 함수 setQuote를 생성
    //초기 상태는 빈 텍스트와 저자 속성을 가진 객체


    useEffect(() => {
        fetchQuote();
    }, []);
    //useEffect 훅은 함수 컴포넌트에서 부수 효과를 수행하는 데 사용 이 경우, 컴포넌트가 처음 렌더링될 때 인용구를 가져오기 위해 사용 
    //두 번째 인수로 빈 배열 []을 전달하면 효과가 처음 렌더링 이후 한 번만 실행

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }
    //fetchQuote 함수는 비동기 함수로, API에서 무작위 인용구를 가져와서 응답을 JSON으로 파싱하고 새로운 인용구로 상태를 업데이트

    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
    //컴포넌트는 버튼과 두 개의 제목을 포함하는 JSX 요소를 반환, 버튼은 클릭될 때 fetchQuote 함수를 호출하는 onClick 핸들러, 제목은 현재 인용구의 텍스트와 저자를 표시
}
