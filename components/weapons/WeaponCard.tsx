import React from 'react'
import { WeaponImage, WeaponProps } from 'interfaces/weapons'
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { weaponImage } from 'public/weapon/weaponImage.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.primary.light,
      width: 480,
      height: 140
    },
    details: {
      display: 'flex',
    },
    content: {
      flex: '1 0 auto',
      color: theme.palette.text.primary,
      zIndex:0
    },
    image:{
      alignSelf:'flex-end',
      justifyContent:'flex-end'
    }
  }),
);

const getWeaponImageXY = (weaponUuid: string) => {

  let wi: WeaponImage = {
    uuid: '',
    weaponName: '',
    path:''
  }

  weaponImage.map((weaponImage: WeaponImage) => {
    if (weaponImage.uuid == weaponUuid) {
      wi = weaponImage;
    }
  })

  return wi;
}


export default function WeaponCard({ weapon }: WeaponProps) {
  const classes = useStyles();
  const theme = useTheme();
  const weaponImage: WeaponImage = getWeaponImageXY(weapon.uuid);
  console.log("a1:" + weapon.killStreamIcon)

  return (
    <Card className={classes.root}>
      <div className={classes.details} >
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {weapon.displayName}
          </Typography>
        </CardContent>
        </div>
      <CardMedia className={classes.image} component="img" height="140" image={weaponImage.path} >
        {/* <Image
          src={weaponImage.path}
          quality={100}
          width="450"
          height="165"
           /> */}
        </CardMedia>
    </Card>
  );
}