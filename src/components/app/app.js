import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import ErrorBtn from "../error-button";
import PeoplePage from "../people-page";
import Row from "../row";
import SwapiService from "../../services/swapi-service";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";

import "./app.css";
import ItemDetails, { Record } from "../item-details/item-details";
import ItemList from "../item-list";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    selectedShip: null,
  };

  toggleRandomPlanet = () => {};

  onShipSelected = (id) => {
    this.setState({ selectedShip: id });
  };

  componentDidCatch() {
    console.log("ComponentDidCatch");
    this.setState({ hasError: true });
  }

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={1} getData={getPerson} getImgUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

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

    const starshipList = (
      <StarshipList>{(i) => `${i.name} (${i.model})`}</StarshipList>
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
        </div>
      </div>
    );
  }
}
