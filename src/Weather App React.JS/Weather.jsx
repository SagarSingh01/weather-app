import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import axios from 'axios';
import dayjs from 'dayjs';
import Style from './Style.js';

function Weather() {

    const [input, setInput] = useState("");
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const Date = dayjs().format("ddd DD MMM YYYY");
    
    async function weatherApp() {

        if (input.trim() === "") {
            setError("Search City");
            return
        }

            try {
                setLoading(true);
                const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=ab5b58beed904cc79fd65013261802&q=${input}&aqi=yes`);
                setError("");
                setData(res.data);
            }

            catch (error) {
                setLoading(true);
                setError(error.response.data.error.message);
            }

            finally {
                setInput("");
                setLoading(false);
            }
    }

    return <>
        <div className={Style.containerClass}>
            <div className={Style.cardClass}>
                {/* Search */}
                <div className={Style.searchWrapperClass}>
                    <input className={Style.searchInputClass} value={input} onKeyDown={(e) => e.key === "Enter" && weatherApp()} onChange={(e) => setInput(e.target.value)} placeholder="Search place..." />
                    <span className={Style.searchIconClass} onClick={weatherApp}><FaSearch size={20} /></span>
                </div>

                {/* Weather Section */}
                {
                    loading ? (
                        <div className={Style.loadingWrapperClass}>
                            <div className={Style.loadingSpinnerClass}></div>
                            <p className={Style.loadingTextClass}>Searching weather...</p>
                        </div>
                    ) : error ? (
                        <div className={Style.errorWrapperClass}>
                            <FcSearch size={32} />
                            <p className={Style.errorTextClass}>{error}</p>
                        </div>
                    ) : data ? (
                        <div className="mt-8 text-center w-full">
                            <h2 className={Style.locationClass}>
                                {[data?.location?.name, data?.location?.country].filter(Boolean).join(", ")}
                            </h2>

                            {/* Date */}
                            <p className={Style.dateClass}>
                                {Date}
                            </p>

                            <div className="flex justify-center mt-4">
                                <img
                                    src={data?.current?.condition?.icon}
                                    alt="weather"
                                    className={Style.weatherIconClass}
                                />
                            </div>

                            <div className="mt-2">
                                <span className={Style.temperatureClass}>
                                    {data?.current?.temp_c}
                                    <span className="text-5xl text-white">°C</span>
                                </span>
                            </div>

                            <p className={Style.conditionClass}>
                                {data?.current?.condition?.text}
                            </p>

                            <div className={Style.dividerClass}></div>

                            <div className={Style.extraInfoClass}>
                                <div className={`${Style.infoBoxClass} ${Style.humidityHoverClass}`}>
                                    <span className={Style.infoLabelClass}>Humidity</span>
                                    <span className={Style.infoValueClass}>
                                        {data?.current?.humidity}%
                                    </span>
                                </div>

                                <div className={`${Style.infoBoxClass} ${Style.windHoverClass}`}>
                                    <span className={Style.infoLabelClass}>Wind</span>
                                    <span className="text-lg font-semibold text-purple-200">
                                        {data?.current?.wind_kph} km/h
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    </>
}

export default Weather