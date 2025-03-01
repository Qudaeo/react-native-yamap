import React, {useState} from 'react'
import YaMap from './../../'
import {SelectOption} from "./components/SelectOption";

import {API_KEY} from './config'
import {MapScreen} from "./screens/MapScreen";
import {Screen} from "./screens/screens";
import {ClusteredMapScreen} from "./screens/ClusteredMapScreen";
import {SearchScreen} from "./screens/SearchScreen";
import {SuggestScreen} from "./screens/SuggestScreen";

YaMap.init(API_KEY);

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState(Screen.Map)

  return (
    <>
      <SelectOption selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen} />
      {selectedScreen === Screen.Map && <MapScreen />}
      {selectedScreen === Screen.ClusteredMap && <ClusteredMapScreen />}
      {selectedScreen === Screen.Search && <SearchScreen />}
      {selectedScreen === Screen.Suggest && <SuggestScreen />}
    </>
  )
}

