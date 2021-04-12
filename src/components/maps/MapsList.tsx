import React from "react";
import { MapsProps } from "interfaces/index";
import MapButton from "src/components/maps/MapsButton";
import Grid from "@material-ui/core/Grid";

export default function MapList({ maps }: MapsProps) {
	const diplayMaps = maps.filter(
		(map) => map.uuid != "ee613ee9-28b7-4beb-9666-08db13bb2244"
	);

	return (
		<Grid
			container
			spacing={3}
			direction='row'
			justify='flex-start'
			alignItems='flex-start'>
			{diplayMaps.map((map, index) => (
				<Grid item key={index}>
					<MapButton map={map} key={index} />
				</Grid>
			))}
		</Grid>
	);
}
