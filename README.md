# Seachable text-input for React Native

Text-input component with search functionality.
For users who wants to show multiple search result to the user.
e.g Search for the near by restrurents.

## Table of content

1. What is Searchable Text-input
2. Why to use this package
3. Getting Started
4. Feedback

### 1. What is Searchable Text-input

Text-input component with search functionality.
For users who wants to show multiple search result to the user.
e.g Search for the near by restrurents.

### 2. Why to use this package

This searchable text-input is fully customizable.

1. You can change the look of a **text input field**.
2. You can change the look of the **search results**.
3. Pass the **array of the strings to filter** from.

### 3. Getting Started

1. #### How to use

   1. `<import SearchableTextInput from "./components/searchable-text-input";>`
   2. `<SearchableTextInput/>` Use the component where you want.

2. #### Parameter to pass
   1. `arrayWithSetOfValue={dummyArray}` //pass the array from which you want to show the filterd results.
   2. `const onTextChange = (dataFromTextInput) => { console.log("data from searchableTextInput", dataFromTextInput); };` // create a function to get the values from text input.
   3. `handleOnChangeText={onTextChange}` //pass the function to SearchableTextInput component.
   4. `placeholder="this is placefolder "` //pass your choice of placeholder
   5. `textInputStyle={{ backgroundColor: "#a7c4bc" }}` //if required pass the desired styling for textInput
   6. `listSeparatorStyle={{ borderColor: "#dfeeea" }}` // styling for list separator
   7. `searchTextStyle={{ fontSize: 15 }}`// styling for search text

### 3. Feedback
For any help or feedback you can write email @ pratiksanap007@gmail.com
