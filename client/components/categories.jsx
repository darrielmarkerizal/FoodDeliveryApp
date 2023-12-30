import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "../constants";

const Category = ({ category, isActive, onPress }) => {
  let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
  let textClass = isActive ? "font-semibold text-gray-800" : "text-gray-500";

  return (
    <View className="flex justify-center items-center mr-6">
      <TouchableOpacity
        onPress={onPress}
        className={`p-1 rounded-full shadow ${btnClass}`}
      >
        <Image style={{ width: 45, height: 45 }} source={category.image} />
      </TouchableOpacity>
      <Text className={`text-sm ${textClass}`}>{category.name}</Text>
    </View>
  );
};

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            isActive={category.id === activeCategory}
            onPress={() => setActiveCategory(category.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
