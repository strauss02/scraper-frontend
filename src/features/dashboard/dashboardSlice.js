import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalEntriesCount: 555,
  Stat2: "",
  Stat3: "",
  stat4: {
    "The Watercooler": [],
    "The Feelings Room": [],
    "Mid-Life Crisis": [],
  },
  stat5: {
    "The Watercooler": [],
    "The Feelings Room": [],
    "Mid-Life Crisis": [],
  },
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    changeTotalEntriesCount: (state, action) => {
      state.totalEntriesCount = action.payload;
    },
    // changeCurrentRoom: (state, action) => {
    //   state.currentRoom = action.payload;
    // },
    // changeCurrentUsername: (state, action) => {
    //   state.currentUsername = action.payload;
    // },
    // addMessageToChatLog: (state, action) => {
    //   state.chatLogs[action.payload.room].push(action.payload);
    // },
    // changeRoomPopulation: (state, action) => {
    //   state.roomPopulation = action.payload;
    // },
  },
});

export const {
  changeTotalEntriesCount,
  // changeCurrentUsername,
  // addMessageToChatLog,
  // changeCurrentRoom,
  // changeMessageInput,
} = dashboardSlice.actions;

export const selectDashboard = (state) => state.dashboard;

export default dashboardSlice.reducer;
