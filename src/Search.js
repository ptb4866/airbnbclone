import React, { useState, useEffect } from 'react';
import {
    TextField,
    Box,
    Modal,
    Button,
    IconButton,
    Typography
} from '@mui/material';
import CloseIcon   from '@mui/icons-material/Close';
import PeopleIcon   from '@mui/icons-material/People';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './Search.css';
import { useNavigate } from "react-router-dom"; 


function Search({ triggerModal, onClose }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const navigate = useNavigate(); 
    // Automatically open modal on click from Banner component
    useEffect(() => {
        if (triggerModal) {
            setOpen(true);
        }
    }, [triggerModal]);

    const handleClose = () => {
        setOpen(false);
        if (onClose) onClose();
    };

    return (
        <div className="search">

            <Modal open={open} onClose={handleClose}>
                <Box className="date-picker-box">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">Select Dates</Typography>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Start Date"
                            value={startDate}
                            onChange={(newValue) => setStartDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DatePicker
                            label="End Date"
                            value={endDate}
                            onChange={(newValue) => setEndDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider> 
                    <h2> Number of guests <PeopleIcon/></h2>
                    <input min={1} defaultValue={2} type="number" /> 

                    <Button variant="contained" onClick={() => navigate('/search')}>
                        Search
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default Search;


