import { IconButton } from '@mui/material'
import { ArrowBackIosNew } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import './backButton.css'

const BackButton = ({ to = '/', disabled }) => {
    const navigate = useNavigate();
    return (
        <div className='BackButton'>
            <IconButton onClick={() => navigate(to)} component="label" disabled={disabled}>
                <ArrowBackIosNew  />
            </IconButton>
        </div>
    )
}

export default BackButton