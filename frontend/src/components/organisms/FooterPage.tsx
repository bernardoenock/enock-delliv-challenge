import React from "react"
import { Box, Link, Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"

function FooterPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#453cff",
        color: "white",
        width: "100%",
      }}
    >
      <Typography>Challenge Delliv by Enock</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <GitHubIcon />
        <Link
          href="http://https://github.com/bernardoenock"
          target="_blank"
          sx={{
            textDecoration: "none",
            color: "white",
            ml: 1,
          }}
        >
          GitHub
        </Link>
      </Box>
    </Box>
  )
}

export default FooterPage
