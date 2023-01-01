import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const pdfCollection = [
		{
			id: 1,
			fileName: "Sample Document 1.pdf",
			url: "https://arxiv.org/pdf/2212.08011.pdf",
			doc_id: "2212.08011"
		},
		{
			id: 2,
			fileName: "Sample Document 2.pdf",
			url: "https://arxiv.org/pdf/2212.07937.pdf",
			doc_id: "2212.07937"
		},
		{
			id: 3,
			fileName: "Sample Document 3.pdf",
			url: "https://arxiv.org/pdf/2212.07931.pdf",
			doc_id: "2212.07931"
		}
	]
	return (
		<div>
			<h2>Documents</h2>
			<ul>
				{
					pdfCollection.map( pdf => <li key={ pdf.id }>
						<Link to={ `/doc?id=${ pdf.doc_id }` }>{ pdf.fileName }</Link>
					</li> )
				}
			</ul>
		</div>
	);
};

export default Home;