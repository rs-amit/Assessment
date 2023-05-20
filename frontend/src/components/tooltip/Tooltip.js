import { useRef, useState } from "react";
import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox
} from "./Styled";

function Tooltip({ position, tooltipChildren, children, background, styleMe = true, showTooltip }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        styleMe={styleMe}
        showOnFocus={isFocused}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer position={position}>
          <TooltipBox background={background} position={position}>
            {tooltipChildren}
          </TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;
