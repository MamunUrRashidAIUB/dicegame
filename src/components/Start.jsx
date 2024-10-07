import styled from "styled-components"
import { Button } from "../styled/Button";
const Start = () => {
    return (
        <Container><img src="/images/dices1.png" alt="" />
           <div>
            <h1>DICE GAME</h1>
            <Button> Play now</Button>
           </div>
        
        
        </Container>
    )
}

export default Start
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
