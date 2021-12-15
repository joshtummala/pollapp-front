import styled from "styled-components";

const BigHeading = styled.h1`
  font-size: 70px;
  color: white;
`;
const RightColumn = () => {
  return (
    <div className="col-6 bg-primary mh-100 p-5 text-center">
      <BigHeading>be curious together.</BigHeading>
      <br />
      <BigHeading>be asking together.</BigHeading>
      <br />
      <BigHeading>be helpful together.</BigHeading>
      <br />
    </div>
  );
};

export default RightColumn