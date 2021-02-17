import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorBtn from "../error-button";
import ErrorIndicator from "../error-indicator";
import Header from "../header";
import ItemDetails, { Record } from "../item-details/item-details";
import PeoplePage from "../people-page";
import RandomPlanet from "../random-planet";
import Row from "../row";
import { StarshipList, PlanetList } from "../sw-components";
import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    selectedShip: null,
    selectedPlanet: null,
  };

  toggleRandomPlanet = () => {};

  onShipSelected = (id) => {
    this.setState({ selectedShip: id });
  };
  onPlanetSelected = (id) => {
    this.setState({ selectedPlanet: id });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getPlanet,
      getPlanetImage,
    } = this.swapiService;

    const starshipDetails = (
      <ItemDetails
        itemId={this.state.selectedShip}
        getData={getStarship}
        getImgUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    const planetDetails = (
      <ItemDetails
        itemId={this.state.selectedPlanet}
        getData={getPlanet}
        getImgUrl={getPlanetImage}
      >
        <Record field="rotationPeriod" label="RP" />
        <Record field="diameter" label="Diameter" />
        <Record field="population" label="Population" />
      </ItemDetails>
    );

    const starshipList = (
      <StarshipList onItemSelected={this.onShipSelected}>
        {(i) => `${i.name} (${i.model})`}
      </StarshipList>
    );
    const planetList = (
      <PlanetList onItemSelected={this.onPlanetSelected}>
        {(i) => `${i.name} (${i.population})`}
      </PlanetList>
    );

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div>
        <Header />
        <div className="container-md">
          <RandomPlanet />
          <ErrorBtn />
          <PeoplePage />
          <Row left={starshipList} right={starshipDetails} />
          <Row left={planetList} right={planetDetails} />
        </div>
      </div>
    );
  }
}
