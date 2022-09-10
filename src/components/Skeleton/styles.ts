import styled, { keyframes } from "styled-components";

const skeleton = keyframes`
  to{
      background-position-x: -200%;
  }
`;

interface ISkeletonProps {
  height?: number;
}

export const BoxSkeleton = styled.div<ISkeletonProps>`
  height: ${(props) => props.height && `${props.height}%`};
  border-radius: 40px;
  background: var(--white-100);
  background: linear-gradient(110deg, #cfcfcf 8%, #f7f6f6 18%, #cfcfcf 33%);
  background-size: 200% 100%;
  animation: 1.5s ${skeleton} linear infinite;
`;
