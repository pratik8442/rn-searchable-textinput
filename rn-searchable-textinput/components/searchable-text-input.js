import React, { useState } from "react";
import {
  FlatList,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from "react-native";
const SearchableTextInput = (props) => {
  const [changedText, onChangeText] = useState("");
  const [filteredCompany, setFilteredCompany] = useState([]);

  //NOTE: code for text input with search
  const findCompany = (query) => {
    let filterdTextInput = query.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    );
    onChangeText(filterdTextInput);
    if (filterdTextInput.length) {
      const regex = new RegExp(`${filterdTextInput.trim()}`, "i");
      setFilteredCompany(
        props.arrayWithSetOfValue.filter(
          (companyName) => companyName.search(regex) >= 0
        )
      );
    } else {
      setFilteredCompany([]);
    }
  };

  const handleOnChangeText = (changedTextValue) => {
    return props.handleOnChangeText(changedTextValue);
  };
  const FlatListSeparator = () => {
    return (
      <View style={[styles.flatListSeparator, props.flatListSeparatorStyle]} />
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainView}>
        <View>
          <TextInput
            placeholder={props.placeholder}
            onChangeText={(text) => findCompany(text)}
            value={(handleOnChangeText(changedText), changedText)}
            autoFocus={true}
            style={[styles.autoCompleteResultText, props.textInputStyle]}
          />
        </View>
        <FlatList
          data={filteredCompany.slice(0, 5)}
          ItemSeparatorComponent={FlatListSeparator}
          style={styles.flatList}
          keyExtractor={(item) => item}
          maxToRenderPerBatch={1}
          onEndThreshold={0}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onChangeText(item);
                setFilteredCompany([]);
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
  flatListSeparator: {
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
