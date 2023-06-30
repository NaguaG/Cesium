import React, { useState, useEffect } from "react";

import Header from "./components/Header";

import "./App.css";

import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "./service/Request";
import SideBar from "./components/SideBar";
import MaterialInfo from "./components/MaterialInfo";
import TotalCost from "./components/TotalCost";

const App = () => {

  const [materials, setMaterials] = useState([
    {
      _id: 1,
      name: "Material 1",
      color: "#2e2e",
      volume: 20,
      date: "2021-01-01",
      cost: 20,
    },
    {
      _id: 2,
      name: "Material 2",
      color: "#2e2e3c",
      volume: 30,
      date: "2021-01-01",
      cost: 20,
    },
  ]);
  const [material, setMaterial] = useState({
    name: "",
    color: "#000",
    volume: 0,
    cost: 0,
    date: new Date().toISOString().split("T")[0],
  });
  const [totalCost, setTotalCost] = useState(0);

  const onSave = () => {
    if (material.name) {
      if (!material._id) {
        postRequest("api", material).then((response) => {
          fetch();
        });
      } else {
        putRequest("api", material).then((response) => {
          fetch();
        });
      }
    }
  };

  const onRemove = () => {
    if (material._id) {
      deleteRequest("api/" + material._id).then((resonse) => {
        fetch();
      });
    }
  };

  const fetch = () => {
    getRequest("api/").then((response) => {
      setMaterials(response.data);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    const totalCost = materials
      .map((item) => item.cost * item.volume)
      .reduce((prev, next) => prev + next, 0);
    setTotalCost(totalCost);
  }, materials);

  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Header onSave={onSave} onRemove={onRemove} setMaterial={setMaterial} />
        <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5">
          <SideBar
            materials={materials}
            setMaterial={setMaterial}
            selectedMaterial={material}
          />
          <MaterialInfo material={material} setMaterial={setMaterial} />
        </div>
        <TotalCost totalCost={totalCost} />
      </div>
    </div>
  );
};

export default App;
