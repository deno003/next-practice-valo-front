import Layout from "src/components/Layout";
import NavBar from "src/components/ui/NavBar/NavBar";
import React from "react";
import { Weapon } from "interfaces/weapons";
import WeaponsList from "src/components/weapons/WeaponsList";

export async function getServerSideProps() {
	// locale
	const locale: string = "ja-JP";
	const weaponsReqUrl =
		"https://valorant-api.com/v1/weapons?language=" + locale;

	const weaponsRes = await fetch(weaponsReqUrl, { mode: "cors" }).then((r) =>
		r.json()
	);
	const weaponsResString = JSON.stringify(weaponsRes);
	console.log(weaponsRes);

	return {
		props: {
			weaponsJson: weaponsResString,
		},
	};
}

export default function Weapons(props: any) {
	const contents = props.weaponsJson;
	const contentsJson = JSON.parse(contents);
	const weapons: Weapon[] = contentsJson.data;

	return (
		<NavBar>
			<Layout title='Weapons'>
				<WeaponsList weapons={weapons} />
			</Layout>
		</NavBar>
	);
}
