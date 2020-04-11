import React from "react";
import View from "./View";
import Spinner from "./Spinner";

let cases = [
  {
    country: "World",
    countryInfo: {
      _id: null,
      iso2: null,
      iso3: null,
      lat: 0,
      long: 0,
    },
    cases: 1119801,
    todayCases: 3158,
    deaths: 59247,
    todayDeaths: 89,
    recovered: 229349,
    active: 831205,
    critical: 39411,
    casesPerOneMillion: 144,
    deathsPerOneMillion: 7.6,
    updated: 1585990527678,
  },
  {
    country: "USA",
    countryInfo: {
      _id: 840,
      iso2: "US",
      iso3: "USA",
      lat: 38,
      long: -97,
    },
    cases: 277522,
    todayCases: 361,
    deaths: 7403,
    todayDeaths: 11,
    recovered: 12283,
    active: 257836,
    critical: 5787,
    casesPerOneMillion: 838,
    deathsPerOneMillion: 22,
    updated: 1585990527678,
  },
  {
    country: "Italy",
    countryInfo: {
      _id: 380,
      iso2: "IT",
      iso3: "ITA",
      lat: 42.8333,
      long: 12.8333,
    },
    cases: 119827,
    todayCases: 0,
    deaths: 14681,
    todayDeaths: 0,
    recovered: 19758,
    active: 85388,
    critical: 4068,
    casesPerOneMillion: 1982,
    deathsPerOneMillion: 243,
    updated: 1585990527678,
  },
  {
    country: "Spain",
    countryInfo: {
      _id: 724,
      iso2: "ES",
      iso3: "ESP",
      lat: 40,
      long: -4,
    },
    cases: 119199,
    todayCases: 0,
    deaths: 11198,
    todayDeaths: 0,
    recovered: 30513,
    active: 77488,
    critical: 6416,
    casesPerOneMillion: 2549,
    deathsPerOneMillion: 240,
    updated: 1585990527678,
  },
  {
    country: "Germany",
    countryInfo: {
      _id: 276,
      iso2: "DE",
      iso3: "DEU",
      lat: 51,
      long: 9,
    },
    cases: 91159,
    todayCases: 0,
    deaths: 1275,
    todayDeaths: 0,
    recovered: 24575,
    active: 65309,
    critical: 3936,
    casesPerOneMillion: 1088,
    deathsPerOneMillion: 15,
    updated: 1585990527678,
  },
  {
    country: "France",
    countryInfo: {
      _id: 250,
      iso2: "FR",
      iso3: "FRA",
      lat: 46,
      long: 2,
    },
    cases: 82165,
    todayCases: 0,
    deaths: 6507,
    todayDeaths: 0,
    recovered: 14008,
    active: 61650,
    critical: 6662,
    casesPerOneMillion: 1259,
    deathsPerOneMillion: 100,
    updated: 1585990527678,
  },
];

class Dashboard extends React.Component {
  intervalID;
  state = {
    cases: cases,
  };

  /*
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
      });
  }; */

  render() {
    const cases = this.state.cases;
    let countryContent;
    let lengthCases = cases.length;

    let content = cases.map((item, index) => (
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
        <div className=" px-2">
          <div className="head mb-2">Countries</div>
          {content}
        </div>
      );
    }

    return <>{countryContent}</>;
  }
}

export default Dashboard;
