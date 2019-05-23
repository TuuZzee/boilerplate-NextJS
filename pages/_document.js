import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					{/* Meta */}
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
					/>

					<link rel="manifest" href="static/manifest.json" />
					<link rel="icon" href="static/img/favicon.ico" />

					{/* CSS imports */}
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
						integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
						crossOrigin="anonymous"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
					/>
					<link
						rel="stylesheet"
						href="https://code.getmdl.io/1.3.0/material.deep_purple-blue.min.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />

					{/* JS scripts imports */}
					<script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
					<script
						src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
						integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
						crossOrigin="anonymous"
					/>
					<script
						src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
						integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
						crossOrigin="anonymous"
					/>
					<script
						src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
						integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
						crossOrigin="anonymous"
					/>
				</body>
			</html>
		);
	}
}
