import { GetStaticProps, GetStaticPaths } from "next";

import { AgentProps } from "../../../interfaces";
import Layout from "../../components/Layout";
import NavBar from "src/components/ui/NavBar/NavBar";
import { useRouter } from "next/router";

type uuidProps = {
	uuid: string;
};

const Agent = ({ uuid }: uuidProps) => {
	const router = useRouter();
	console.log(router.query.id);
	return (
		<NavBar>
			<Layout title={"agent"}>
				<p>{router.query.id}</p>
			</Layout>
		</NavBar>
	);
};

export default Agent;
