import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { MapProps, MapText, MapUuidProps } from "interfaces/index";
import Image from "next/image";
import { CardContent, Typography } from "@material-ui/core";
import { mapTexts } from "public/mapText.json";
import theme from "src/components/theme";

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "flex-start",
		padding: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	map: {
		width: "550",
		flexShrink: 1,
	},
	text: {
		color: theme.palette.text.primary,
		flexShrink: 7,
	},
});

const getMapImage = (mapUuid: string) => {
	let mapImagePath = "/valo-map-ascent-v-jupiter.jpg";

	// ascent
	if (mapUuid === "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319") {
		mapImagePath = "/valo-map-ascent-v-jupiter.jpg";
		// bind
	} else if (mapUuid === "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba") {
		mapImagePath = "/valo-map-bind-v-jupiter.jpg";
		// haven
	} else if (mapUuid === "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047") {
		mapImagePath = "/valo-map-haven-v-jupiter.jpg";
		// icebox
	} else if (mapUuid === "e2ad5c54-4114-a870-9641-8ea21279579a") {
		mapImagePath = "/valo-map-icebox-v-fav.jpg";
		// split
	} else if (mapUuid === "d960549e-485c-e861-8d71-aa9d1aed12a2") {
		mapImagePath = "/valo-map-split-v-jupiter.jpg";
	}

	return mapImagePath;
};

const getMapText = (mapUuid: string) => {
	let mapText: string = "";

	mapTexts.map((map: MapText) => {
		if (map.uuid == mapUuid) {
			mapText = map.text;
		}
	});
	return mapText;
};

export default function Maps({ mapUuid }: MapUuidProps) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia className={classes.map}>
				<Image
					src={getMapImage(mapUuid)}
					quality={100}
					width='550'
					height='550'
				/>
			</CardMedia>
			<CardContent className={classes.text}>
				<Typography>Text:{getMapText(mapUuid)}</Typography>
			</CardContent>
		</Card>
	);
}
