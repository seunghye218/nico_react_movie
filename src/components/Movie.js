import React from 'react';
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types';

export default function Movie({ id, movie }) {
	return (
		<div>
			<img src={movie.medium_cover_image} alt={movie.title} />
			<h2>
				<Link to={`/movie/${id}`}>{movie.title}</Link>
			</h2>
			<p>{movie.summary.length < 235 ?
				movie.summary :
				`${movie.summary.slice(0, 235)}...`}
			</p>
			<ul>
				{movie.genres && movie.genres.map((g) =>
					<li key={g}>{g}</li>)
				}
			</ul>
		</div>
	)
}

//movie.propTypes = {

//}
