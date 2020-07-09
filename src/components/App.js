import React from "react";
import Header from "./Header";
import PostControl from "./PostControl";
import { Container } from 'reactstrap';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <PostControl />
      </Container>
    </React.Fragment>
  )
}

export default App;