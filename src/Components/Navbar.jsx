import { Mail, Notifications, Pets } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import React, { useState } from "react";

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex", alignItems: "center", gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        // makes app bar static on screen. It does not move position as user scrolls down and doesn't cover any other components
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    YOHANNES DAWIT
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search> <InputBase placeholder="search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://media.licdn.com/dms/image/D5603AQF-8zdLDYomsQ/profile-displayphoto-shrink_800_800/0/1714349670982?e=1722470400&v=beta&t=WrUNspqhchaOFdFDh-3B4OWnqzSZO-_JxId4YozSxCI"
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://media.licdn.com/dms/image/D5603AQF-8zdLDYomsQ/profile-displayphoto-shrink_800_800/0/1714349670982?e=1722470400&v=beta&t=WrUNspqhchaOFdFDh-3B4OWnqzSZO-_JxId4YozSxCI" />
                    <Typography variant="span"> Yohannes</Typography>

                </UserBox>

            </StyledToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>

        </AppBar>
    )
}

export default Navbar