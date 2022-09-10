import styled, { keyframes } from "styled-components";
import * as Tooltip from "@radix-ui/react-tooltip";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const StyledContent = styled(Tooltip.Content)`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1px;
  color: var(--white-200);
  background: var(--gray-500);
  box-shadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px";
  user-select: none;

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    &[data-state="delayed-open"] {
      &[data-side="top"] {
        animation-name: ${slideDownAndFade};
      }
      &[data-side="right"] {
        animation-name: ${slideLeftAndFade};
      }
      &[data-side="bottom"] {
        animation-name: ${slideUpAndFade};
      }
      &[data-side="left"] {
        animation-name: ${slideRightAndFade};
      }
    }
  }
`;
export const StyledArrow = styled(Tooltip.Arrow)`
  fill: var(--gray-500);
`;
