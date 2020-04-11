{this.state.details ? (
    <Details
      onClose={this.DetailsClose}
      country={cases.country}
      cases={cases.cases}
      todaycases={cases.todayCases}
      deaths={cases.deaths}
      todaydeaths={cases.todayDeaths}
      recovered={cases.recovered}
      active={cases.active}
      critical={cases.critical}
      cases_per_1m={cases.casesPerOneMillion}
      deaths_per_1m={cases.deathsPerOneMillion}
    />
  ) : null}

  <div className="row px-3">
  <div className="col-3">col</div>

  <div className="col">
    <div className="col">{this.props.country}</div>
    <div className="col">Cases: {this.props.cases}</div>
    <div className="col">Today Cases: {this.props.todaycases}</div>
    <div className="col">Deaths: {this.props.deaths}</div>
    <div className="col">Today Deaths: {this.props.todaysdeaths}</div>
    <div className="col">Recovered: {this.props.recovered}</div>
    <div className="col">Active: {this.props.active}</div>
    <div className="col">Critical: {this.props.critical}</div>
    <div className="col">
      Cases Per 1million: {this.props.cases_per_1m}
    </div>
    <div className="col">
      Deaths Per 1million: {this.props.deaths_per_1m}
    </div>
  </div>
</div>

'd-none d-block d-sm-none'