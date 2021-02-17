import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import ItemDetails, { Record } from "../item-details/item-details";
import Row from "../row";
import { PersonList } from "../sw-components";
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
    const { getPerson, getPersonImage } = this.swapiService;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <PersonList onItemSelected={this.onPersonSelected}>
        {(i) => `${i.name} (${i.birthYear})`}
      </PersonList>
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
