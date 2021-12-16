import MyInfoCard from "components/myinfocard/MyInfoCard";
import NewLetterCard from "components/newletter";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import React from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";

import { useRouter } from "next/router";
import LetterViewCard from "components/letterview";

const LetterPage = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column" gap={30}>
              <LetterViewCard />
              {/* {router.query.id} */}
            </Div>
            <Div w={30} mode="column" gap={30}>
              <MyInfoCard />
              <UnsentLetters />
            </Div>
          </Div>
        </Container>
      </HomeContainer>
    </React.Fragment>
  );
};

export default LetterPage;