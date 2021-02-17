import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";
import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <PersonList>{(i) => `${i.name} (${i.birthYear})`}</PersonList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails
          itemId={this.state.selectedPerson}
          getData={getPerson}
          getImgUrl={getPersonImage}
        >
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
