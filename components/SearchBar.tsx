import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    // Add any search logic here
  };

  return (
    <View className="flex-row items-center bg-white rounded-full p-3 shadow-sm">
      <Ionicons name="search" size={20} color="black" />
      <TextInput
        className="flex-1 ml-2 text-black"
        placeholder="Search"
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={handleSearchChange}
      />
    </View>
  );
};

export default SearchBar;
