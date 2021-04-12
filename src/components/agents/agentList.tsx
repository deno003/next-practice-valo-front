import React from "react";
import { AgentsProps } from "interfaces/index";
import AgentListItem from "src/components/agents/agentListItem";
import Grid from "@material-ui/core/Grid";

const AgentList = ({ agents }: AgentsProps) => (
	<div>
		<Grid
			container
			spacing={1}
			direction='row'
			justify='center'
			alignItems='center'>
			{agents.map((agent) => (
				<Grid key={agent.uuid} item xs>
					<AgentListItem agent={agent} />
				</Grid>
			))}
		</Grid>
	</div>
);

export default AgentList;
