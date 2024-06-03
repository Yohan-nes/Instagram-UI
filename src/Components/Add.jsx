import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, Image, EmojiEmotions, PersonAdd, VideoCameraBack, DateRange } from "@mui/icons-material";

import { Box } from "@mui/system";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})
const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip
                onClick={(e) => setOpen(true)}
                title="Delete"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 },
                }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography varian="h6" color="gray" textAlign="center">
                        Create Post</Typography>
                    <UserBox>
                        <Avatar
                            src="https://media.licdn.com/dms/image/D5603AQF-8zdLDYomsQ/profile-displayphoto-shrink_400_400/0/1714349670982?e=1722470400&v=beta&t=ybexG8DmwsmqAoGE-0MRErMVFiNPxTidEHgUCYjygJg"
                            sx={{ width: 30, height: 30 }} />

                        <Typography fontWeight={500} variant="span">
                            Yohannes Dawit
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group">
                        <Button> Post</Button>
                        <Button sx={{ width: "100px" }}  >
                            <DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>

    )
}

export default Add