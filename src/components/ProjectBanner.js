import { ArrowRightCircle } from "react-bootstrap-icons"
import '../style/Project.scss'
import fdf from '../assets/img/fdf.PNG'
import transcendence from '../assets/img/transcendence.PNG'
import eastclaw from '../assets/img/eastclaw.PNG'
import darkTheme from "../Themes"

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@mui/material/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
  },
}));

export default function ProjectBanner() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue); 
  };

  return (
    <div className="bg-[#000] mt-8 text-4xl">
		<h2 className="project-title text-[#071D88] text-end">PROJECTS</h2>
		<ThemeProvider theme={darkTheme}>
			<AppBar position="static">
				<Tabs 
				value={value} 
				onChange={handleChange} 
				aria-label="simple tabs example"
				indicatorColor="custom.dark"
				textColor="custom"
				backgroundColor="custom.dark"
				// TabIndicatorProps={{style: {background:'#000'}}}
				centered
				>
				<Tab className="text-[#071D88 !imposrtant]" label="42 Projects" {...a11yProps(0)} />
				<Tab label="Free lance Projects" {...a11yProps(1)} />
				<Tab label="Personnal Projects" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<img  src={fdf} width="300" />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<img src={transcendence} width="400" />
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
		</ThemeProvider>
	</div>
  );
}

