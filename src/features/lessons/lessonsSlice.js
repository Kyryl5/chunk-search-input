import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  lessons: [],
  lesson: {},
}
export const getLessons = createAsyncThunk(
  'lessonsReducers/getLessons',
  async (searchName, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      `https://react-course-api.azurewebsites.net/lesson/${searchName}`
    )
    dispatch(setLessons(res.data))
  }
)

export const getLesson = createAsyncThunk(
  'lessonsReducers/getLesson',
  async (name, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      `https://react-course-api.azurewebsites.net/lesson/${name}`
    )
    dispatch(setLesson(res.data[0]))
  }
)
export const lessonsSlice = createSlice({
  name: 'lessonsReducers',
  initialState,
  reducers: {
    setLessons: (state, action) => {
      state.lessons = action.payload
    },
    setLesson: (state, action) => {
      state.lesson = action.payload
    },
  },
  extraReducers: {
    [getLessons.rejected]: () => {
      alert('Something went wrond, please reload the page')
    },
  },
})
export const { setLessons, setLesson } = lessonsSlice.actions
export default lessonsSlice.reducer
