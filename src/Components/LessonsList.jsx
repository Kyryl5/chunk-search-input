import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { getLesson } from '../features/lessons/lessonsSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function LessonsList() {
  const dispatch = useDispatch()
  const lessonsData = useSelector((state) => {
    return state.lessonsReducers.lessons
  })

  return lessonsData?.map((item, index) => (
    <Paper
      sx={{ p: 3, mb: 2 }}
      style={{ backgroundColor: 'lightgrey' }}
      key={index}
    >
      <Link
        onClick={() => {
          dispatch(getLesson(item.name))
        }}
        to={`lessons/${item.name}`}
      >
        {`Lesson Name: ${item.name}`}
        <br />
        {`Lesson Title: ${item.title}`}
      </Link>
    </Paper>
  ))
}
