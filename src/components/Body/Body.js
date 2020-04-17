import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const BodyStyles = styled.div`
  background-color: #44014C;
  width: 300px;
  min-height: 200px;
  margin: 30px auto;
  box-sizing: border-box;
`;

const Body = () => {
  return (
    <BodyStyles>
      <Button variant="contained" color="primary">Simple Material Button</Button>
    </BodyStyles>
  );
};

export default Body;
