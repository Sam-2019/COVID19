import React from "react";
import View from "./View";
import Spinner from "../Spinner";
import Search from './Search'

const isSearched = (searchTerm) => (item) =>
  !searchTerm || item.country.toLowerCase().includes(searchTerm.toLowerCase());

class CountryStats extends React.Component {
    intervalID;
    state = {
      cases: [],
      searchTerm: "",
    };
  

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  
  componentDidMount() {
    this.getData();
  }
  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    fetch("https://corona.lmao.ninja/countries")
      .then((response) => response.json())
      .then((cases) => {
        this.setState({ cases });
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
      });
      }

  render() {
    const { searchTerm, cases } = this.state;
    let countryContent;
    let lengthCases = cases.length;

    let content = cases
      .filter(isSearched(searchTerm))
      .map((item, index) => (
        <View
          key={index}
          image={item.countryInfo.flag}
          country={item.country}
          cases={item.cases}
          todaycases={item.todayCases}
          deaths={item.deaths}
          todaydeaths={item.todayDeaths}
          recovered={item.recovered}
          active={item.active}
          critical={item.critical}
          casesPerOneMillion={item.casesPerOneMillion}
          deathsPerOneMillion={item.deathsPerOneMillion}
        />
      ));

    if (lengthCases === 0) {
      countryContent = <Spinner />;
    } else if (lengthCases > 0) {
      countryContent = (
        <>
          <div className="navie">
            <div className="head">Countries</div>
            <div className="text-right">
              <Search
                value={searchTerm}
                onChange={this.onSearchChange.bind(this)}
              ></Search>
            </div>
          </div>
          {content}
        </>
      );
    }

    return <>{countryContent}</>;
  }
}


export default CountryStats;