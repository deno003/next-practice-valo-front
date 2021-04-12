import React from "react";
import { Weapon, WeaponsProps } from "interfaces/weapons";
import Grid from "@material-ui/core/Grid";
import WeaponCard from "src/components/weapons/WeaponCard";

const CharacterList = ({ weapons }: WeaponsProps) => (
	<div>
		<Grid
			container
			spacing={1}
			direction='row'
			justify='center'
			alignItems='center'>
			{weapons.map((weapon: Weapon) => (
				<Grid key={weapon.uuid} item xs>
					<WeaponCard weapon={weapon} />
				</Grid>
			))}
		</Grid>
	</div>
);

export default CharacterList;
