import styled from "@emotion/styled";

import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import Image from "../components/prebuilt/Image";

const Title = styled.div`
  text-align: center;
  font-size: 58px;
  color: #fff;
  margin-top: 30px;
`;

const Message = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 40px;
`;

export default () => {
  return (
    <Layout title="Success!">
      <Image src="/parrot.gif" />
      <Title>success</Title>
      <Message>Stripe has successfully processed your payment</Message>
    </Layout>
  );
};
