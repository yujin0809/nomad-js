const quotes = [
    {
        quote: "인생이 끝날까 두려워하지마라. 당신의 인생이 시작조차 하지 않을 수 있음을 두려워하라.",
        author: "Grace Hansen",
    },
    {
        quote: "인간의 삶 전체는 단지 한 순간에 불과하다. 인생을 즐기자.",
        author: "Plutarch",
    },
    {
        quote: "연은 순풍이 아니라 역풍에 가장 높이 난다.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "숨을 들이 쉬라. 내 쉬라. 그리고 바로 이 순간이 네가 확실히 가지고 있음을 네가 아는 유일한 순간임을 상기하라.",
        author: "Oprah Winfrey",
    },
    {
        quote: "게으름 피울 수 있을 만큼 똑똑하지 못한 것을 포부가 높기 때문이라고 변명할 수 없다.",
        author: "Edgar Bergen",
    },
    {
        quote: "희망을 품지 않은 자는 절망도 할 수 없다.",
        author: "George Bernard Shaw",
    },
    {
        quote: "낙관주의는 성공으로 인도하는 믿음이다. 희망과 자신감이 없으면 아무것도 이루어질 수 없다.",
        author: "Helen Keller",
    },
    {
        quote: "나는 중요한 슛을 놓친 결과에 절대 개의치 않는다. 그 결과에 대해 생각하면 언제나 부정적인 결과만 생각하게 된다.",
        author: "Michael Jordan",
    },
    {
        quote: "많이 보고 많이 겪고 많이 공부하는 것은 배움의 세 기둥이다.",
        author: "Benjamin Disraeli",
    },
    {
        quote: "목표에 도달했을 때 돌아서지 마라.",
        author: "Publilius Syrus",
    },
];
const quote = document.querySelector("#quotes .quote");
const author = document.querySelector("#quotes .author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;