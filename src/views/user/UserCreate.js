import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Divider,
    Switch,
    TextField,
    Typography,
    colors
} from '@material-ui/core';
import { Page } from '../../components';

import SuccessSnackbar from './SuccessSnackbar';
import Header from './Header';
const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(3)
    },
    tabs: {
        marginTop: theme.spacing(3)
    },
    divider: {
        backgroundColor: colors.grey[300]
    },
    content: {
        marginTop: theme.spacing(3)
    },
    saveButton: {
        color: theme.palette.white,
        backgroundColor: colors.green[600],
        '&:hover': {
            backgroundColor: colors.green[900]
        }
    }
}));

const UserCreate = props => {
    const classes = useStyles();
    const { className, rest } = props;
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const initialValues = {
        name: '',
        tag: '',
        tags: ['Full-Time', 'ReactJS'],
        startDate: moment(),
        endDate: moment().add(1, 'day')
      };
    const [values] = useState({ ...initialValues });

    const [setCalendarTrigger] = useState(null);
    const handleChange = event => {
    };
    const handleSubmit = event => {
        event.preventDefault();
        fetch("http://sistech-api.local.com", {
	    	method: "POST",
	    	credentials: 'include',
	    	body: JSON.stringify({teste:123, ola:456}),
	    	headers: {
	    		"Content-Type": "application/json",
	    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
	    	},
	    	mode: 'cors',
	    }).then((response) => {
	    	if(response.ok){
		    	console.log(response);
	 		    return response;
	    	}else{
		    	return response;
	    	}
	    }).catch((error) => {
	    	return error;
	    });
        console.log("1");
        setOpenSnackbar(true);
        console.log("2");
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const handleCalendarOpen = trigger => {
        setCalendarTrigger(trigger);
      };
    /*
      const handleCalendarChange = () => {};
    
      const handleCalendarAccept = date => {
        setValues(values => ({
          ...values,
          [calendarTrigger]: date
        }));
      };
    
      const handleCalendarClose = () => {
        setCalendarTrigger(false);
      };
      const calendarOpen = Boolean(calendarTrigger);
      const calendarMinDate =
        calendarTrigger === 'startDate'
          ? moment()
          : moment(values.startDate).add(1, 'day');
      const calendarValue = values[calendarTrigger];
    */
      return (
        <Page
            className={classes.root}
            title="User Create"
        >
            {console.log(React.version)}
            <Header />
            <Divider className={classes.divider} />
            <div className={classes.content}>
                <Card
                    {...rest}
                    className={clsx(classes.root, className)}
                >
                    <form onSubmit={handleSubmit}>
                        <CardHeader title="Novo Usuário" />
                        <Divider />
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid
                                    item
                                    md={6}
                                    sm={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        helperText="Informe o nome do usuário"
                                        label="Nome"
                                        name="name"
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    sm={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        helperText="Email é um campo obrigatório e único"
                                        label="Email"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid
                                    item
                                    md={6}
                                    sm={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        label="Senha"
                                        name="password"
                                        type="password"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    sm={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        label="Confirme a senha"
                                        name="confirm"
                                        type="password"
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <Typography variant="h6">Usuário ativo?</Typography>
                                    <Typography variant="body2">
                                        Se você alternar isso, o usuário será criado inativo.
                                    </Typography>
                                    <Switch
                                        checked={true}
                                        color="secondary"
                                        edge="start"
                                        name="canHire"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <TextField
                                        className={classes.dateField}
                                        label="Start Date"
                                        name="startDate"
                                        helperText="Data que coloca o usuário como inativo"
                                        onClick={() => handleCalendarOpen('startDate')}
                                        value={moment(values.startDate).format('DD/MM/YYYY')}
                                        variant="outlined"
                                    />
                                </Grid>

                            </Grid>
                        </CardContent>
                        <Divider />
                        <CardActions>
                            <Button
                                className={classes.saveButton}
                                type="submit"
                                variant="contained"
                            >
                                Salvar
                            </Button>
                        </CardActions>
                    </form>
                    <SuccessSnackbar
                        onClose={handleSnackbarClose}
                        open={openSnackbar}
                    />
                </Card>
            </div>
        </Page>
    );
};

export default UserCreate;