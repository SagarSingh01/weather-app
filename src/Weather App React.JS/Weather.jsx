import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import axios from "axios";
import dayjs from "dayjs";
import Style from "./Style.js";

function Weather() {
    const API_KEY = "ab5b58beed904cc79fd65013261802";

    const [input, setInput] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const currentDate = dayjs().format("ddd DD MMM YYYY");

    /* SUGGESTIONS */
    async function getSuggestions(value) {
        if (!value.trim()) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        try {
            const res = await axios.get(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${value}`);
            setSuggestions(res.data);
            setShowSuggestions(true);
        }

        catch {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }

    /* Search Weather */
    async function weatherApp(city = input) {
        if (!city.trim()) {
            setError("Search City");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`);
            setData(res.data);
            setError("");
            setShowSuggestions(false);

        } catch (error) {
            setError(error?.response?.data?.error?.message || "Something went wrong");
        }

        finally {
            setLoading(false);
            setInput("");
        }
    }

    /* Default Weather */
    useEffect(() => {
        weatherApp("India")
    } , [])

    return (
        <div className={Style.containerClass}>
            <div className={Style.cardClass}>
                {/* Search */}
                <div className="relative">
                    <div className={Style.searchWrapperClass}>
                        <input
                            className={Style.searchInputClass}
                            value={input}
                            placeholder="Search place..."
                            onKeyDown={(e) => e.key === "Enter" && weatherApp()}
                            onChange={(e) => {
                                const value = e.target.value;
                                setInput(value);
                                getSuggestions(value);
                                setShowSuggestions(false);
                            }}
                        />

                        <span
                            className={Style.searchIconClass}
                            onClick={() => weatherApp()}
                        >
                            <FaSearch size={20} />
                        </span>
                    </div>

                    {/* Suggestions */}

                    {
                        showSuggestions && suggestions.length > 0 && (
                            <div className={Style.suggestionWrapperClass}>
                                {
                                    suggestions.slice(0, 5).map((city, index) => (
                                        <div
                                            key={index}
                                            className={Style.suggestionItemClass}
                                            onClick={() => {
                                                setInput(city.name);
                                                setShowSuggestions(false);
                                                weatherApp(city.name);
                                            }}
                                        >
                                            <div className={Style.suggestionContentClass}>
                                                <div className={Style.suggestionIconClass}>
                                                    📍
                                                </div>

                                                <div className={Style.suggestionTextWrapperClass}>
                                                    <span className={Style.suggestionCityClass}>
                                                        {city.name}
                                                    </span>

                                                    <span className={Style.suggestionCountryClass}>
                                                        {city.country}
                                                    </span>
                                                </div>
                                            </div>

                                            <span className={Style.suggestionArrowClass}>
                                                →
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>

                {/* Weather Section */}
                {
                    loading ? (
                        <div className={Style.loadingWrapperClass}>
                            <div className={Style.loadingSpinnerClass}></div>
                            <p className={Style.loadingTextClass}>
                                Fetching weather...
                            </p>
                        </div>
                    ) : error ? (
                        <div className={Style.errorWrapperClass}>
                            <FcSearch size={32} />
                            <p className={Style.errorTextClass}>{error}</p>
                        </div>
                    ) : data ? (
                        <div className="mt-8 text-center w-full">
                            <h2 className={Style.locationClass}>
                                {data.location.name}, {data.location.country}
                            </h2>

                            <p className={Style.dateClass}>
                                {currentDate}
                            </p>

                            <div className="flex justify-center mt-4">
                                <img
                                    src={data.current.condition.icon}
                                    alt="weather"
                                    className={Style.weatherIconClass}
                                />
                            </div>

                            <div className="mt-2">
                                <span className={Style.temperatureClass}>
                                    {data.current.temp_c}
                                    <span className="text-5xl text-white">
                                        °C
                                    </span>
                                </span>
                            </div>

                            <p className={Style.conditionClass}>
                                {data.current.condition.text}
                            </p>

                            <div className={Style.dividerClass}></div>

                            <div className={Style.extraInfoClass}>
                                <div
                                    className={`${Style.infoBoxClass} ${Style.humidityHoverClass}`}
                                >
                                    <span className={Style.infoLabelClass}>
                                        Humidity
                                    </span>

                                    <span className={Style.infoValueClass}>
                                        {data.current.humidity}%
                                    </span>
                                </div>

                                <div
                                    className={`${Style.infoBoxClass} ${Style.windHoverClass}`}
                                >
                                    <span className={Style.infoLabelClass}>
                                        Wind
                                    </span>

                                    <span className="text-lg font-semibold text-purple-200">
                                        {data.current.wind_kph} km/h
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
}

export default Weather;