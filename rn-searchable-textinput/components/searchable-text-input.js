import React, { useState } from "react";
import {
  FlatList,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
const SearchableTextInput = (props) => {
  const [changedText, onChangeText] = useState("");
  const [filteredTextInArray, setFilteredTextInArray] = useState([]);
  //NOTE: search the text entered in text-input and filter the array
  const findTextInArray = (query) => {
    //NOTE: avoid special char in text-input
    let filterdTextInput = query.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    );
    //NOTE: putting user enterd value in text-input
    onChangeText(filterdTextInput);
    //NOTE: filter the array with text entered by user
    if (filterdTextInput.length) {
      const regex = new RegExp(`${filterdTextInput.trim()}`, "i");
      setFilteredTextInArray(
        props.arrayWithSetOfValue.filter(
          (companyName) => companyName.search(regex) >= 0
        )
      );
    } else {
      setFilteredTextInArray([]);
    }
  };
  //NOTE: callback function to give user entered value to parent controller
  const handleOnChangeText = (changedTextValue) => {
    return props.handleOnChangeText(changedTextValue);
  };
  const listSeparator = () => {
    return <View style={[styles.listSeparator, props.listSeparatorStyle]} />;
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainView}>
        <View>
          <TextInput
            placeholder={props.placeholder}
            onChangeText={(text) => findTextInArray(text)}
            value={(handleOnChangeText(changedText), changedText)}
            autoFocus={true}
            style={[styles.autoCompleteResultText, props.textInputStyle]}
          />
        </View>
        <FlatList
          data={filteredTextInArray.slice(0, 5)}
          ItemSeparatorComponent={listSeparator}
          style={styles.flatList}
          keyExtractor={(item) => item}
          maxToRenderPerBatch={1}
          onEndThreshold={0}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onChangeText(item);
                setFilteredTextInArray([]);
              }}
            >
              <View style={styles.flatListView}>
                <Text style={[props.searchTextStyle]}>{item}</Text>
                <Text>-</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  autoCompleteResultText: {
    borderColor: "#798777",
    borderWidth: 1,
    borderRadius: 16,
    height: 50,
    width: 300,
    padding: 10,
  },
  listSeparator: {
    borderWidth: 0.3,
    borderColor: "#DEDDE3",
    height: 1,
    borderRadius: 8,
  },
  flatList: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
  },
  flatListView: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  mainView: {
    justifyContent: "center",
  },
  safeAreaView: {
    alignContent: "center",
  },
});

export default SearchableTextInput;
