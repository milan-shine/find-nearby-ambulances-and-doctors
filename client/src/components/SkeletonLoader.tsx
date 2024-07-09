import React from 'react';
import styled, { keyframes } from 'styled-components';

const SkeletonLoader: React.FC = () => {
    return (
        <StyledDiv>
            <SkeletonText width="70%" height="20px" />
            <SkeletonText width="50%" height="15px" />
            <SkeletonText width="80%" height="15px" />
        </StyledDiv>
    );
};

export default SkeletonLoader;

const loadingAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonText = styled.div<{ width: string; height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  background: linear-gradient(90deg, rgba(240, 240, 240, 0.5) 25%, rgba(224, 224, 224, 0.5) 50%, rgba(240, 240, 240, 0.5) 75%);
  background-size: 200px 100%;
  animation: ${loadingAnimation} 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 8px;
  margin: 1rem 0rem;
`;

const StyledDiv = styled.div`
  margin-bottom: 15px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;