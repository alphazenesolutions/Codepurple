import { createSlice, configureStore } from "@reduxjs/toolkit";

const CodePurple = createSlice({
  name: "CodePurple",
  initialState: {
    isSideNav: false,
    isContact: false,
    isFaq: false,
    isBookDemo: false,
  },
  reducers: {
    sideNavHandler(store) {
      store.isSideNav = !store.isSideNav;
    },
    contactHandler(store) {
      store.isContact = !store.isContact;
    },
    faqtHandler(store) {
      store.isFaq = true;
    },
    faqfHandler(store) {
      store.isFaq = false;
    },
    bookHandler(store) {
      store.isBookDemo = !store.isBookDemo;
    },
  },
});

export const CodePurpleAction = CodePurple.actions;

const Store = configureStore(CodePurple);
export default Store;
