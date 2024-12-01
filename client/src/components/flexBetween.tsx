import { Box, styled } from "@mui/material";

interface FlexBetweenProps {
  keyProp?: keyof React.CSSProperties; // Avoid using 'key' as a prop name
  valueProp?: string; // Example of custom props
}

const FlexBetween = styled(Box)<FlexBetweenProps>(({ keyProp, valueProp }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ...(keyProp && valueProp ? { [keyProp]: valueProp } : {}),
}));

export default FlexBetween;
