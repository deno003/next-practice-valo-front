import Layout from "src/components/Layout";
import NavBar from "src/components/ui/NavBar/NavBar";
import React from "react";
import { Map } from "interfaces/index";
import MapList from "src/components/maps/MapsList";
import MapImage from "src/components/maps/Maps";
import Grid from "@material-ui/core/Grid";
import Table from "src/components/aimSensitivity/table";

// export async function getServerSideProps() {
//   // locale
//   const locale: string = 'ja-JP';
//   const MapsReqUrl = 'https://valorant-api.com/v1/maps?language=' + locale;

//   const mapsRes = await fetch(MapsReqUrl, { mode: 'cors' }).then((r) => r.json());
//   const mapsResString = JSON.stringify(mapsRes);
//   console.log('agentsRes:' + mapsResString);

//   return {
//     props: {
//       mapsJson: mapsResString
//     }
//   }
// }

export const MapContext = React.createContext(
	{} as {
		mapUuid: string;
		setMapUuid: React.Dispatch<React.SetStateAction<string>>;
	}
);

export default function Maps(props: any) {
	const [mapUuid, setMapUuid] = React.useState(
		"7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
	);

	//   const contents = props.mapsJson;
	//   const contentsJson = JSON.parse(contents);
	//   const maps: Map[] = contentsJson.data;

	return (
		<NavBar>
			<Layout title='Maps'>
				<Table />
			</Layout>
		</NavBar>
	);
}
