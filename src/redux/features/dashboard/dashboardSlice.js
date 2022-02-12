import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCount = createAsyncThunk("entries/getCount", async () => {
  return fetch("http://localhost:3001/api/entry/count").then((res) => res.json());
});

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
  extraReducers: {
    [getCount.pending]: (state, action) => {
      state.loading = true;
    },
    [getCount.fulfilled]: (state, action) => {
      state.loading = false;
      state.totalEntriesCount = action.payload;
    },
    [getCount.rejected]: (state, action) => {
      state.loading = false;
    },
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
