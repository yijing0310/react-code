import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function StackedRainChart() {
    const [rawData, setRawData] = useState();
    const [error, setError] = useState("");
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(
                    "https://opendata.cwa.gov.tw/api/v1/rest/datastore/C-B0025-001?Authorization=CWA-59B4CD82-192E-4DAE-A1F2-C4F4E0F7D9DB&format=JSON&sort=YearMonth&timeFrom=2025-02-12&timeTo=2025-02-14"
                );
                if (!res.ok) throw new Error("請求失敗");

                const data = await res.json();
                setRawData((data.records.location || []).slice(0, 3));
                
            } catch (error) {
                console.error(error);
                setError("資料載入失敗");
            }
        }

        fetchData();
    }, []);
    if (error) return <div>{error}</div>;
    if (!rawData || rawData.length === 0) return <div>載入中...</div>;
    // 取得所有日期
    const dates = rawData[0].stationObsTimes.stationObsTime.map(
        (item) => item.Date
    );

    // 地區名稱
    const locations = rawData.map((site) => site.station.StationName);

    const datasets = dates.map((date, dateIndex) => ({
        label: date,
        data: rawData.map((station) =>
            parseFloat(
                station.stationObsTimes.stationObsTime[dateIndex]
                    .weatherElements.Precipitation
            )
        ),
        backgroundColor: `hsl(${(dateIndex * 80) % 360}, 70%, 60%)`, 
    }));

    const data = {
        labels: locations,
        datasets: datasets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "2/12~2/13總降雨量",
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: "降雨量 (mm)",
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ maxWidth: 800, margin: "2rem auto" }}>
            <Bar data={data} options={options} />
        </div>
    );
}
