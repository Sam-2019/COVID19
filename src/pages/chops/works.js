import React from "react";
import View from "./View";

import "./Dashboard.css";

class Dashboard extends React.Component {
  state = {
    cases: [
      {
        country: "USA",
        countryInfo: {
          _id: 840,
          country: "USA",
          iso2: "US",
          iso3: "USA",
          lat: 38,
          long: -97,
          flag:
            "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/us.png"
        },
        cases: 123428,
        todayCases: 19302,
        deaths: 2211,
        todayDeaths: 515,
        recovered: 3231,
        active: 117986,
        critical: 2666,
        casesPerOneMillion: 373,
        deathsPerOneMillion: 7
      },
      {
        country: "GHANA",
        countryInfo: {
          _id: 233,
          country: "GHANA",
          iso2: "GH",
          iso3: "GH",
          lat: 38,
          long: -97,
          flag:
            "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/gh.png"
        },
        cases: 123428,
        todayCases: 19302,
        deaths: 2211,
        todayDeaths: 515,
        recovered: 3231,
        active: 117986,
        critical: 2666,
        casesPerOneMillion: 373,
        deathsPerOneMillion: 7
      }
    ]
  };

  componentDidMount() {
    this.getData();
  }


  getData = () => {
    fetch("https://corona.lmao.ninja/countries")
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
        (console.log(data))
      });
  };

  render() {
    const cases = this.state.cases;

    let content = cases.map(item => (
      <View
        key={item.countryInfo._id}
        id={item.countryInfo._id}
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

    return (
      <>
        <div className=" col-12">{content}</div>
      </>
    );
  }
}

export default Dashboard;
