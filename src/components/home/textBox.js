import React, { Fragment } from "react";
import TextField from '@material-ui/core/TextField';

export default (props) => {
    return (
        <Fragment>
            <TextField
                id="standard-multiline-flexible"
                multiline
                rows="4"
                variant="outlined"
                value={props.value || ""}
                onChange={props.handleChange}
                name="kanji"
                style={{width: '100%', backgroundColor: 'white', borderRadius:20}}
                disabled={props.disabled}
            />
        </Fragment>
    );
};