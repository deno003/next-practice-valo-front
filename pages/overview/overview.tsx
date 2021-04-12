import Layout from '../components/Layout'
import NavBar from 'components/ui/NavBar/NavBar'
import React, {useContext} from 'react'

export async function getServerSideProps(context: any) {

    // アカウントIDを取得
    const inputRiotId: string = context.query.riotId;
    const index: number = inputRiotId.indexOf('#');
    const riotId: string = inputRiotId.substring(0, index);
    const tagLine: string = inputRiotId.slice(index + 1);
    const region = 'asia';

    const accountRequestUrl = 'https://' + region + '.api.riotgames.com/riot/account/v1/accounts/by-riot-id/' + riotId + '/' + tagLine;
    console.log(accountRequestUrl);
    const headers = {
        "X-Riot-Token": "RGAPI-fe600e59-8062-47f8-911e-246a78854a9f"
    }
    const accountResponseJson = await fetch(accountRequestUrl, { mode: 'cors', credentials: 'include', headers }).then((r) => r.json());
    console.log(accountResponseJson);

    const puuid = await accountResponseJson.puuid;

    // マッチリスト
    const matchListUrl = 'https://ap.api.riotgames.com//val/match/v1/matchlists/by-puuid/' + puuid;
    const matchListResponseJson = await fetch(matchListUrl, { mode: 'cors', credentials: 'include', headers }).then((r) => r.json());
    console.log(matchListResponseJson);


    return {
        props: {
            puuid: puuid
        }
    };

}

export default function OverView(props: any) {
    const puuid = props.puuid;

    return (
        <NavBar>
            <Layout title="OverView">
                <h1>Valorant OverView</h1>
                <p>{puuid}</p>
            </Layout>
        </NavBar>
    )
}