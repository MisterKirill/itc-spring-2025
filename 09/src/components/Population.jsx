import { useEffect, useState, useRef } from "react";
import { Graph } from "./Graph"
import classes from './Population.module.css'

const populationUrl = "https://countriesnow.space/api/v0.1/countries/population";

export const Population = () => {
  const [data, setData] = useState([]);
  const [population, setPopulation] = useState(null);
  const ref = useRef();

  useEffect(() => {
    fetch(populationUrl)
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  const handleChangeCountry = () => {
    const countryCode = ref.current.value;
    const country = data.find((v) => v.code == countryCode);
    setPopulation(country.populationCounts);
  }

  return (
    <div>
      <select ref={ref} className={classes.select} onChange={handleChangeCountry} defaultValue="">
      { data.map((d, i) => {
        return <option key={i} value={ d.code }>{ d.country }</option>
      }) }
      </select>
      <Graph population={ population } />
    </div>
  );
}
