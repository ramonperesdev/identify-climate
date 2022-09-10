import * as TooltipPrimitive from "@radix-ui/react-tooltip";

// STYLES
import { StyledContent, StyledArrow } from "./styles";

export function Tooltip({ textContent, children }: any) {
  function Content({ children, ...props }: any) {
    return (
      <TooltipPrimitive.Portal>
        <StyledContent {...props}>
          {children}
          <StyledArrow />
        </StyledContent>
      </TooltipPrimitive.Portal>
    );
  }

  const Provider = TooltipPrimitive.Provider;
  const Tooltip = TooltipPrimitive.Root;
  const TooltipTrigger = TooltipPrimitive.Trigger;
  const TooltipContent = Content;

  return (
    <Provider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipContent>{textContent}</TooltipContent>
      </Tooltip>
    </Provider>
  );
}
