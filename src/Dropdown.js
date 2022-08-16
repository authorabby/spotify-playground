import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Dropdown(props) {

    const {items, dropdownLabel = "My Dropdown"} = props 
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{dropdownLabel}</InputLabel>
            <Select
            id={`demo-simple-select-autowidth-${dropdownLabel}`}
            value={age}
            onChange={handleChange}
            autoWidth
            label={dropdownLabel}
            >
                {items.map((item) =>
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                )}

            </Select>
        {/* </InputLabel> */}
        </FormControl>
    )
}