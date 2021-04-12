import Layout from '../components/Layout'
import NavBar from 'components/ui/NavBar/NavBar'
import React from 'react'
import Home from 'pages/home'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const ContentsContext = React.createContext('');

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary
        }
    }),
);


// export async function getServerSideProps() {
//   // locale
//   const locale: string = 'ja-JP';
//   const contentsReqUrl = 'https://ap.api.riotgames.com/val/content/v1/contents?locale=' + locale;
//   const headers = {
//     "X-Riot-Token": "RGAPI-fe600e59-8062-47f8-911e-246a78854a9f"
//   }

//   const contentsRes = await fetch(contentsReqUrl, { mode: 'cors', headers }).then((r) => r.json());
//   const contentsResString = JSON.stringify(contentsRes);
//   console.log('contentsRes:' + contentsResString);

//   return {
//     props: {
//       contentsJson: contentsResString
//     }
//   }
// }

export default function HomePage(props: any) {
  const classes = useStyles();
  const contents = props.contentsJson;

  return (
    <ContentsContext.Provider value={contents}>
      <NavBar>
        <Layout title="Valorant Find Aim Sensitivity">
            <Home />
        </Layout>
      </NavBar>
    </ContentsContext.Provider>
  )
}