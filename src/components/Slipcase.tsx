import React, { Fragment, useState } from 'react'
import { Switch, Typography } from '@material-ui/core';

const Slipcase = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <Fragment>
            <Typography variant="overline" component="span">Slipcase</Typography>
            <Switch
                checked={checked}
                onChange={handleChange}
                name="slipcase"
                inputProps={{ 'aria-label': 'slipcase checkbox' }}
            />
        </Fragment>
    )
}

export default Slipcase;
