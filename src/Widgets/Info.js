import React from 'react';
import '../css/Widget.css';

const infos = [
  { MOVIE_ID: 13, QUOTE: "Hello - me", TITLE_EN: "Spirited Away", TITLE_JP: "千と千尋の神隠し", TITLE_JP_ROM: "Sen to Chihiro no Kamikakushi", SCREENTIME: 125, RELEASE_DT: 2001 },
  // Add more movies as needed
];

const InfoWidget = ({ MOVIE_ID }) => {
    const selectedMovie = infos.find(movie => movie.MOVIE_ID === MOVIE_ID);
    
    if (!selectedMovie) {
        return <div>No information found for movie ID: {MOVIE_ID}</div>;
    }
    
    return (
      <div>
        <p>{selectedMovie.QUOTE}</p>
        <p>{selectedMovie.TITLE_EN}</p>
        <p>{selectedMovie.TITLE_JP}</p>
        <p>{selectedMovie.TITLE_JP_ROM}</p>
        <p>{selectedMovie.SCREENTIME} mins</p>
        <p>{selectedMovie.RELEASE_DT}</p>
      </div>
    );
};

export default InfoWidget;
