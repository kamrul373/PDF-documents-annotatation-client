import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import MyDocument from "../components/MyDocument";

const router = createBrowserRouter( [
	{
		path: "/",
		element: <Home></Home>
	},
	{
		path: "/doc",
		// loader: async ( { params } ) => fetch( `https://arxiv.org/pdf/${ params.id }.pdf` ),
		element: <MyDocument></MyDocument>
	}
] )

export default router;