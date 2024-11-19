import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

export default function InterestSelectionScreen() {
  const [selectedTags, setSelectedTags] :any = useState([]);

  const interests = [
    "Programming", "Data Science", "Technology", "Self Improvement", "Writing",
    "Relationships", "Machine Learning", "Productivity", "Politics", "Cryptocurrency",
    "Psychology", "Money", "Business", "Python", "Health", "Science",
    "Mental Health", "Life", "Software Development", "Startup", "Design",
    "JavaScript", "Artificial Intelligence", "Culture", "Software Engineering",
    "Blockchain", "Coding", "Entrepreneurship", "React", "UX", "Education",
    "History", "Humor", "Web Development", "Work", "Lifestyle", "Society",
    "Deep Learning", "Marketing", "Books", "NFT", "Social Media", "Leadership", "Android"
  ];

  const toggleTagSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const renderTag = ({ item }:any) => {
    const isSelected = selectedTags.includes(item);
    return (
      <TouchableOpacity
        onPress={() => toggleTagSelection(item)}
        style={[styles.tag, isSelected && styles.tagSelected]}
      >
        <Text style={[styles.tagText, isSelected && styles.tagTextSelected]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What are you interested in?</Text>
      <Text style={styles.subheaderText}>Choose three or more.</Text>
      
      <FlatList
        data={interests}
        keyExtractor={(item) => item}
        renderItem={renderTag}
        numColumns={3}
        contentContainerStyle={styles.tagsContainer}
      />
      
      <TouchableOpacity
        style={[styles.continueButton, selectedTags.length >= 3 && styles.continueButtonActive]}
        disabled={selectedTags.length < 3}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Playfair Display"
  },
  subheaderText: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Playfair Display"
  },
  tagsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#333",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    margin: 5,
  },
  tagSelected: {
    backgroundColor: "#00c853",
  },
  tagText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  tagTextSelected: {
    color: "white",
    fontWeight: "bold",
  },
  continueButton: {
    backgroundColor: "#00c853",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  continueButtonActive: {
    backgroundColor: "#00c853",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Playfair Display"
  },
});
