import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import "./style.css";
import { useSearchParams } from 'react-router-dom';

const MyDocument = () => {
	// deffining states
	const [numPages, setNumPages] = useState( null );
	const [pageNumber, setPageNumber] = useState( 1 );
	// getting document id
	const [searchParams, setSearchParams] = useSearchParams();
	const doc_id = searchParams.get( "id" )
	// pdf on load function
	function onDocumentLoadSuccess ( { numPages } ) {
		setNumPages( numPages );
		setPageNumber( 1 );
	}
	function changePage ( offset ) {
		setPageNumber( prevPageNumber => prevPageNumber + offset );
	}
	// previous page
	function previousPage () {
		changePage( -1 );
	}
	// next page
	function nextPage () {
		changePage( 1 );
	}

	return (
		<div>
			<Document file={ `https://arxiv.org/pdf/${ doc_id }.pdf` } onLoadSuccess={ onDocumentLoadSuccess } scale={ 0.5 }>
				<Page pageNumber={ pageNumber } />
			</Document>
			<div>
				<p>
					Page { pageNumber || ( numPages ? 1 : '--' ) } of { numPages || '--' }
				</p>
				<button
					type="button"
					disabled={ pageNumber <= 1 }
					onClick={ previousPage }
				>
					Previous
				</button>
				<button
					type="button"
					disabled={ pageNumber >= numPages }
					onClick={ nextPage }
				>
					Next
				</button>
			</div>
		</div>
	)
};

export default MyDocument;