import React, {useRef, useState} from "react";
import {Platform, StyleSheet} from "react-native";
import YaMap, {Circle, Marker, MarkerRef} from "../../../";

export const MapScreen = () => {
  const [mapLoaded, setMapLoaded] = useState(false)
  const markerRef = useRef<MarkerRef | null>(null)
  const angleRef = useRef(0)

  return (
    <YaMap
      initialRegion={{lat: 55.751244, lon: 37.618423, zoom: 12}}
      style={styles.container}
      logoPosition={{horizontal: 'right', vertical: 'top'}}
      onMapLoaded={() => {
        setMapLoaded(true)
      }}
      onMapPress={e => {
        markerRef.current?.animatedMoveTo(e.nativeEvent, 500)
      }}
    >
      <Marker
        ref={markerRef}
        point={{lat: 55.751244, lon: 37.618423}}
        source={require('../assets/images/marker.png')}
        scale={0.25}
        visible={Platform.OS === 'android' ? mapLoaded : true}
        rotated={true}
      />
      <Circle
        center={{lat: 55.74, lon: 37.65}}
        radius={500}
        strokeWidth={5}
        strokeColor={'red'}
        fillColor={'blue'}
        onPress={() => {
          angleRef.current = angleRef.current + 180
          markerRef.current?.animatedRotateTo(angleRef.current, 300)
        }}
      />
    </YaMap>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
