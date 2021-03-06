import React from 'react'
import Banner from '../Banner'
import NavBar from '../NavBar'
import Row from '../Row'
import requests from '../Requests'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <NavBar />

            <Banner />

            <Row 
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />

            <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Documantaries' fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen
