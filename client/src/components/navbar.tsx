import {
  DarkModeOutlined,
  LightMode,
  // LightModeOutlined,
  // DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  // Search,
  // SettingsOutlined,
  // ArrowDropDownOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
// import { setMode } from "../state";
import { useTheme } from "@mui/material/styles";
import { AppBar, IconButton, InputBase, Toolbar } from "@mui/material";
import FlexBetween from "./flexBetween";
import { setMode } from "../state";
import { SidebarProps } from "../types/types";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            sx={{
              borderRadius: "9px",
              gap: "3rem",
              p: "0.1rem 1.5rem",
            }}
          >
            <InputBase placeholder="Suchen" />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween sx={{ gap: "1.5rem" }}>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
