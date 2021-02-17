import React from "react";
import itemlists from "../item-list";
import { withData } from "../hoc-helper";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const PersonList = () => {
  console.log("Some");
  return withData(ItemList, getAllPeople);
};
const PlanetList = () => withData(ItemList, getAllPlanets);
const StarshipList = () => withData(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
