import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Box, makeStyles, withStyles } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import { Fastfood, MenuBook } from '@material-ui/icons';
import Food2 from '../../Screens/Food/Food2'
import Recipes from '../../Screens/Recipes/Recipes'
import Sell from '../../Screens/Sell/Sell'
import { ReactComponent as SellIcon } from './sell.svg'

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
        <Box p={3}>
          {children}
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

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: '100%',
      width: '100%',
      backgroundColor: 'orange',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />)

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: 'gray',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(11),
    margin: 0,
    padding: 0,
    minHeight: 50,
    '& > .MuiTab-wrapper > *:first-child': {
      marginBottom: 0,
    },
    '& svg': {
      fill: 'gray',
      height: 20,
    },
    '&:focus': {
      color: 'orange',
      opacity: 1,
      '& svg': {
        fill: 'orange',
      },
    },
  },
}))((props) => <Tab disableRipple {...props} />)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  'hci-theme': {
    backgroundColor: '#FFF9F1',
  },
}))


const TabsNav = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <div className={classes['hci-theme']}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
        >
          <StyledTab icon={<Fastfood />} label="Comida" {...a11yProps(0)} />
          <StyledTab icon={<MenuBook />} label="Recetas" {...a11yProps(1)} />
          <StyledTab icon={<SellIcon />} label="Vender" {...a11yProps(2)} />
        </StyledTabs>
      </div>
      <SwipeableViews
        axis="x"
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Food2 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Recipes />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Sell />
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}

export default TabsNav
