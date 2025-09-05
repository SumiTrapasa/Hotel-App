import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RangeSlider from "rn-range-slider";

interface PriceRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  onValueChange: (low: number, high: number) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min = 0,
  max = 1000,
  step = 10,
  onValueChange,
}) => {
  const [low, setLow] = useState(min);
  const [high, setHigh] = useState(max);

  const handleValueChange = (lowValue: number, highValue: number) => {
    setLow(lowValue);
    setHigh(highValue);
    onValueChange(lowValue, highValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Price Range: ${low} - ${high}
      </Text>
      <RangeSlider
        min={min}
        max={max}
        step={step}
        low={low}
        high={high}
        floatingLabel
        renderThumb={() => <View style={styles.thumb} />}
        renderRail={() => <View style={styles.rail} />}
        renderRailSelected={() => <View style={styles.railSelected} />}
        renderLabel={(value) => (
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>{value}</Text>
          </View>
        )}
        onValueChanged={handleValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "gray",
  },
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#ddd",
  },
  railSelected: {
    height: 4,
    borderRadius: 2,
    backgroundColor: "gray",
  },
  labelContainer: {
    padding: 4,
    backgroundColor: "gray",
    borderRadius: 4,
  },
  labelText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default PriceRangeSlider;
