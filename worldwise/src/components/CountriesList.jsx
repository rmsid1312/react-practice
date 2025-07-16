import CountryItem from "./CountryItem";
import styles from "./CountriesList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city one the map" />
    );

  const contries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  console.log("contries : ", contries);
  return (
    <ul className={styles.contriesList}>
      {contries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountriesList;
