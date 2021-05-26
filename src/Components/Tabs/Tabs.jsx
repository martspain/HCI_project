import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { AppBar, Box, makeStyles, Typography } from '@material-ui/core'
import Food from '../../Screens/Food/Food'
import Recipes from '../../Screens/Recipes/Recipes'
import Sell from '../../Screens/Sell/Sell'

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby = {`simple-tab-${index}`}
    {...other}
  >
    {
      value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )
    }
  </div>
)

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}))

const TabsNav = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Comida" {...a11yProps(0)} />
          <Tab label="Recetas" {...a11yProps(1)} />
          <Tab label="Vender" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Food />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Recipes />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Sell />
      </TabPanel>
    </div>
  )
}

export default TabsNav
