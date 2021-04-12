import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SiRiotgames } from "react-icons/si";
import { RiGroupFill } from 'react-icons/ri';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { RiProfileLine } from 'react-icons/ri';
import { FaMapMarkedAlt } from 'react-icons/fa'
import { GiPistolGun } from 'react-icons/gi'
import { FaMousePointer } from 'react-icons/fa'

interface Props {
    children: ReactNode;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: theme.palette.primary.dark
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: theme.palette.primary.main
        },
        drawerContainer: {
            overflow: 'auto',
            color: theme.palette.text.primary
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        icon:{
            color: theme.palette.text.primary
        }
    }),
);

const menuList = [
    {
        title: 'OverView',
        icon: <RiProfileLine />,
        href: '/'
    },
    {
        title: 'Matches',
        icon: <SiRiotgames />,
        href: '/matches'
    },
    {
        title: 'Agents',
        icon: <RiGroupFill />,
        href: '/agents'
    },
    {
        title: 'Maps',
        icon: <FaMapMarkedAlt />,
        href: '/maps'
    },
    {
        title: 'Weapons',
        icon: <GiPistolGun />,
        href: '/weapons'
    },
    {
        title:'Aim Sensitivity',
        icon: <FaMousePointer />,
        href: '/aimSensitvity'
    }
]

export default function ClippedDrawer({ children }: Props) {
    const classes = useStyles();
    const router = useRouter();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Valorant Find Aim Sensitivity
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {menuList.map(({ title, icon, href }) => (
                            <ListItem button key={title} onClick={() => {
                                router.push(href);
                            }}>
                                <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
                                <ListItemText primary={title} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {children}
            </main>
        </div>
    );
}