import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorBtn from "../error-button";
import Spinner from "../spinner";
import "./item-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li>
      {label}: {item[field]}
    </li>
  );
};

export default class ItemDetails extends Component {
  state = {
    item: null,
    loaded: false,
    image: null,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updateItem();
  }

  updateItem() {
    const { itemId, getData, getImgUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({ item, loaded: true, image: getImgUrl(item) });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loaded: false });
      this.updateItem();
    }
  }

  render() {
    if (!this.state.item) {
      return (
        <div className="info-block">
          <span>Select a item from a list</span>
        </div>
      );
    }
    const { item, image } = this.state;
    if (!this.state.loaded) {
      return (
        <div className="info-block">
          <Spinner />
        </div>
      );
    }
    return (
      <div className="info-block">
        <img className="info-block__image" src={image}></img>
        <div className="info-block__desc">
          <h3 className="info-block__desc-title">{item.name}</h3>
          <ul className="info-block__desc-list">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorBtn />
        </div>
      </div>
    );
  }
}

export { Record };

