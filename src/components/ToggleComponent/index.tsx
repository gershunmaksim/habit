import React, { useState } from "react";
import { Pressable, View } from "react-native";

type Props = {
  value?: boolean;
  onChange?: (val: boolean) => void;
};

const ToggleComponent = ({ value = false, onChange }: Props) => {
  const [isEnabled, setIsEnabled] = useState(value);

  const toggle = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onChange?.(newValue);
  };

  return (
    <Pressable
      onPress={toggle}
      style={{
        width: 44,
        height: 26,
        borderRadius: 13,
        padding: 2,
        backgroundColor: isEnabled ? "#4F6DFF" : "#E5E7EB",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 22,
          height: 22,
          borderRadius: 11,
          backgroundColor: "#fff",
          transform: [{ translateX: isEnabled ? 18 : 0 }],
        }}
      />
    </Pressable>
  );
};

export default ToggleComponent;