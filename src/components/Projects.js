import React from 'react'
import triviaImage from "../images/trivia.png"
import currencyConverterImage from "../images/currency-converter.png"
import weatherImage from "../images/weather.png"
import nasaImage from "../images/nasa-project.png"
import amazonPriceTrackerImage from "../images/priceTracker.png"
import ProjectCard from './ProjectCard'

export default function Projects() {

    const amazonPriceTrackerDesc = "Amazon price tracker is a command-line application that takes the input of your Amazon product links, your email, and your target discount. It then processes your request and filters out details to notify you by email when the product price drops less than or equals your target price drop."
    const weatherDesc = "Omni-Weather is a web app that shows the weather and conditions of cities. It changes its color according to the background image and the image changes according to the weather."
    const triviaDesc = "Quiz-App is a quiz application that asks questions about computer awareness questions. Your score is calculated out of 10 and uses Open Trivia API to get all questions. It is based on react.js and worked with concepts like HTML entities."
    const currencyConverterDesc = "Currency-Converter converts all currency exchange rates with each other. It uses Exchange Rates Data API from APILayer to convert all currencies over the world. It does the conversion on the latest pricing and is based on react.js."
    const nasaProjectDesc = "A NASA Mission Control team analyzes Kepler data to identify habitable exoplanets and generates a list of habitable planets. Data from SpaceX launches is also collected, so launch history and upcoming launches are also populated. In other words, it's a simulation of mission control software, so you can schedule any future mission in the simulated mission control web app. You can cancel missions and can see records in history and upcoming."

    return (
        <>
        <h1 id='project-page-title'>Projects</h1>
            <main className="projects-container">
                {/* Nasa Mission Control */}
                <ProjectCard
                    image={nasaImage}
                    title="Nasa Mission Control"
                    description={nasaProjectDesc}
                    link="https://github.com/itsarshadahmad/nasa-mission-control"
                />

                {/* Amazon Price Tracker */}
                <ProjectCard
                    image={amazonPriceTrackerImage}
                    title="Amazon Price Tracker"
                    description={amazonPriceTrackerDesc}
                    link="https://github.com/itsarshadahmad/amazon-price-tracker"
                />

                {/* Weather App */}
                <ProjectCard
                    image={weatherImage}
                    title="Omni Weather"
                    description={weatherDesc}
                    link="https://github.com/itsarshadahmad/omni-weather"
                />

                {/* Trivia App */}
                <ProjectCard
                    image={triviaImage}
                    title="Omni Weather"
                    description={triviaDesc}
                    link="https://github.com/itsarshadahmad/quiz-app"
                />

                {/* Currency Converter App */}
                <ProjectCard
                    image={currencyConverterImage}
                    title="Currency Converter"
                    description={currencyConverterDesc}
                    link="https://github.com/itsarshadahmad/currency-converter"
                />
            </main>
        </>
    )
}
