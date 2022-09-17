import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

// STYLES
import { StyledContent, StyledArrow } from './styles';

interface ITooltipProps {
  /**
   * @description Content of the tooltip trigger, is the element that will be responsible for activating the tooltip
   * @example <button type="button">Trigger</button>
   */
  children: React.ReactNode;

  /**
   * @description Content that will appear inside the tooltip
   */
  textContent: string;
}

export function Tooltip({ textContent, children }: ITooltipProps) {
  function Content({ ...props }) {
    return (
      <TooltipPrimitive.Portal>
        <StyledContent {...props}>
          <div>{textContent}</div>
          <StyledArrow />
        </StyledContent>
      </TooltipPrimitive.Portal>
    );
  }

  const Provider = TooltipPrimitive.Provider;
  const TooltipRoot = TooltipPrimitive.Root;
  const TooltipTrigger = TooltipPrimitive.Trigger;
  const TooltipContent = Content;

  return (
    <Provider>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipContent />
      </TooltipRoot>
    </Provider>
  );
}
