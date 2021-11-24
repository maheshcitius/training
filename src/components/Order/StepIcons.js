import React from "react";
import clsx from 'clsx';

import PropTypes from 'prop-types';
import { useStyles} from './styles';

import {
    ContactMail,
    Payments,
} from '@mui/icons-material';

const StepIcons = props => {
    const classes = useStyles();
    const { active, completed } = props;

    const icons = {
        1: <ContactMail />,
        2: <Payments />,
    };

    return <div
        className={clsx(classes.root, {
            [classes.active]: active,
            [classes.completed]: completed,
        })}
    >
        {icons[String(props.icon)]}
    </div>
}

StepIcons.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};

export default StepIcons;