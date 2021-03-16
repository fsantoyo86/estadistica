import React,{useState,useEffect} from 'react';
import PopChart from './PopChart';

export default function Home() {
    const [optionsEstados, setOptionsEstados] = useState({});
    const [seriesEstados, setSeriesEstados] = useState([]);

    const [optionsEmpleo, setOptionsEmpleo] = useState({});
    const [seriesEmpleo, setSeriesEmpleo] = useState([]);

    const [optionsVivienda, setOptionsVivienda] = useState({});
    const [seriesVivienda, setSeriesVivienda] = useState([]);

        const [optionsConstruccion, setOptionsConstruccion] = useState({});
        const [seriesConstruccion, setSeriesConstruccion] = useState([]);

    useEffect(() => {
      setOptionsEstados({
        chart: {
          background: "#f4f4f4",
          foreColor: "#333",
        },
        xaxis: {
          categories: [
            "Estado de México",
            "Ciudad de México",
            "Veracruz",
            "Jalisco",
            "Puebla",
            "Guanajuato",
            "Chiapas",
            "Nuevo León",
            "Michoacán",
            "Oaxaca",
            "Chihuahua",
            "Guerrero",
            "Tamaulipas",
            "Baja California",
            "Coahuila",
            "Sinaloa",
            "Hidalgo",
            "Sonora",
            "San Luis Potosí",
            "Tabasco",
            "Querétaro",
            "Yucatán",
            "Morelos",
            "Durango",
            "Quintana Roo",
            "Zacatecas",
            "Aguascalientes",
            "Tlaxcala",
            "Nayarit",
            "Campeche",
            "Baja California Sur",
            "Colima",
          ],
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        fill: {
          colors: ["#f44336"],
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Población estados de México",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
          },
        },
      });
      setSeriesEstados([
        {
          name: "Poblacion",
          data: [
            17427790,
            9018645,
            8539862,
            6604451,
            5730367,
            5610153,
            4825401,
            4143593,
            3801487,
            3657048,
            3650602,
            3634868,
            3218720,
            3156674,
            3086414,
            3074745,
            2866142,
            2279637,
            2259098,
            2044058,
            1868996,
            1723259,
            1666426,
            1434635,
            1380011,
            1288571,
            1000617,
            804708,
            785153,
          ],
        },
      ]);
      setOptionsEmpleo({
        chart: {
          background: "#f4f4f4",
          foreColor: "#333",
        },
        xaxis: {
          categories: [
            "Estado de México",
            "Ciudad de México",
            "Veracruz",
            "Jalisco",
            "Puebla",
            "Guanajuato",
            "Chiapas",
            "Nuevo León",
            "Michoacán",
            "Oaxaca",
            "Chihuahua",
            "Guerrero",
            "Tamaulipas",
            "Baja California",
            "Coahuila",
            "Sinaloa",
            "Hidalgo",
            "Sonora",
            "San Luis Potosí",
            "Tabasco",
            "Querétaro",
            "Yucatán",
            "Morelos",
            "Durango",
            "Quintana Roo",
            "Zacatecas",
            "Aguascalientes",
            "Tlaxcala",
            "Nayarit",
            "Campeche",
            "Baja California Sur",
            "Colima",
          ],
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        fill: {
          colors: ["#f7dd16"],
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Desempleo de México",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
          },
        },
      });
      setSeriesEmpleo([
        {
          name: "Desempleo",
          type:'column',
          data: [
            3742743,
            2901864,
            4853986,
            660445,
            5730367,
            5610153,
            982540,
            4143593,
            3801487,
            3657048,
            3250602,
            263486,
            3218720,
            1156674,
            2200414,
            3074745,
            2866142,
            2279637,
            2259098,
            2044058,
            1868996,
            1723259,
            1666426,
            1434635,
            1380011,
            1288571,
            1000617,
            804708,
            785153,
          ],
        },
      ]);
      setOptionsVivienda({
        chart: {
          background: "#f4f4f4",
          foreColor: "#333",
          type: "line",
        },
        xaxis: {
          categories: [
            "Estado de México",
            "Ciudad de México",
            "Veracruz",
            "Jalisco",
            "Puebla",
            "Guanajuato",
            "Chiapas",
            "Nuevo León",
            "Michoacán",
            "Oaxaca",
            "Chihuahua",
            "Guerrero",
            "Tamaulipas",
            "Baja California",
            "Coahuila",
            "Sinaloa",
            "Hidalgo",
            "Sonora",
            "San Luis Potosí",
            "Tabasco",
            "Querétaro",
            "Yucatán",
            "Morelos",
            "Durango",
            "Quintana Roo",
            "Zacatecas",
            "Aguascalientes",
            "Tlaxcala",
            "Nayarit",
            "Campeche",
            "Baja California Sur",
            "Colima",
          ],
        },
        fill: {
          colors: ["#f7dd16"],
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          row: {
            colors: ["#ffffff", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        title: {
          text: "Vivienda de México",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
          },
        },
      });
      setSeriesVivienda([
        {
          name: "Desempleo",
          type: "line",
          data: [
            3742743,
            290184,
            485398,
            660445,
            573036,
            561015,
            982540,
            414593,
            380487,
            365748,
            325062,
            2634868,
            3218720,
            1156674,
            2200414,
            3074745,
            2866142,
            2279637,
            2259098,
            2044058,
            1868996,
            1723259,
            1666426,
            1434635,
            1380011,
            1288571,
            1000617,
            804708,
            785153,
          ],
        },
      ]);
      setOptionsConstruccion({
        chart: {
          background: "#f4f4f4",
          foreColor: "#333",
          type: "scatter",
        },
        xaxis: {
          categories: [
            "Estado de México",
            "Ciudad de México",
            "Veracruz",
            "Jalisco",
            "Puebla",
            "Guanajuato",
            "Chiapas",
            "Nuevo León",
            "Michoacán",
            "Oaxaca",
            "Chihuahua",
            "Guerrero",
            "Tamaulipas",
            "Baja California",
            "Coahuila",
            "Sinaloa",
            "Hidalgo",
            "Sonora",
            "San Luis Potosí",
            "Tabasco",
            "Querétaro",
            "Yucatán",
            "Morelos",
            "Durango",
            "Quintana Roo",
            "Zacatecas",
            "Aguascalientes",
            "Tlaxcala",
            "Nayarit",
            "Campeche",
            "Baja California Sur",
            "Colima",
          ],
        },
        fill: {
          colors: ["#aa00ee"],
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          row: {
            colors: ["#ffffff", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        title: {
          text: "Construcción de México",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
          },
        },
      });
      setSeriesConstruccion([
        {
          name: "Construccion",
          type: "scatter",
          data: [
            3742743,
            2901864,
            4853986,
            660445,
            573036,
            5610153,
            982540,
            4143593,
            3801487,
            3657048,
            3250602,
            2634868,
            3218720,
            115674,
            2200414,
            3074745,
            286142,
            2279637,
            259098,
            2044058,
            186996,
            172359,
            1666426,
            1434635,
            138011,
            1288571,
            1000617,
            80408,
            785153,
          ],
        },
      ]);
    }, []);
    return (
      <div className="flex grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 p-2">
        <div className="m-2">
          <PopChart options={optionsEstados} series={seriesEstados} type='bar' />
        </div>
        <div className="m-2">
          <PopChart options={optionsEmpleo} series={seriesEmpleo} type='bar'/>
        </div>
        <div className="m-2">
          <PopChart options={optionsVivienda} series={seriesVivienda} type='line'/>
        </div>
        <div className="m-2">
          <PopChart options={optionsConstruccion} series={seriesConstruccion} type='scatter'/>
        </div>
      </div>
    );
}
