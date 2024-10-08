
import styled from "styled-components"
const Score = () => {
    return (
        <Scorecontainer><h1>0</h1>
            <p>total score</p></Scorecontainer>
    )
}

export default Score

const Scorecontainer =styled.div`
h1{
    font-size: 100px;
}
p{
    font-size: 30px;
}
padding-left:50px`
;
