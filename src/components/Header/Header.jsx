import Typography from "@mui/material/Typography"

import BackButton from "components/BackButton/BackButton";

import "./header.css"

const Header = ({ title }) => {
  return (
    <div className="HeaderRounded">
      <BackButton />
      <Typography className="title" textAlign="center">
        {title}
      </Typography>
    </div>
  )
}

export default Header
