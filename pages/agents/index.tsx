import Layout from 'components/Layout'
import NavBar from 'components/ui/NavBar/NavBar'
import React from 'react'
import { Agent } from 'interfaces/index'
import AgentList from 'components/agents/agentList'

export async function getServerSideProps() {
    // locale
    const locale: string = 'ja-JP';
    const agentsReqUrl = 'https://valorant-api.com/v1/agents?language=' + locale;
  
    const agentsRes = await fetch(agentsReqUrl, { mode: 'cors' }).then((r) => r.json());
    const agentsResString = JSON.stringify(agentsRes);
    console.log('agentsRes:' + agentsResString);
  
    return {
      props: {
        agentsJson: agentsResString
      }
    }
  }

export default function Agents(props:any) {

    const contents = props.agentsJson;
    const contentsJson = JSON.parse(contents);
    const agents:Agent[] = contentsJson.data;
    const filiteringAgents = agents.filter(agent => agent.uuid !== "320b2a48-4d9b-a075-30f1-1f93a9b638fa");

    return (
        <NavBar>
            <Layout title="Agents">
                <AgentList  agents={filiteringAgents}/>
            </Layout>
        </NavBar>
    )
}