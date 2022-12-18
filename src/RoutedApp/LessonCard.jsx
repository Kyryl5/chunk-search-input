import { Paper } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function LessonCard() {
  const lessonsData = useSelector((state) => {
    return state.lessonsReducers.lesson
  })

  return Object.values(lessonsData).length > 0 ? (
    <Paper sx={{ p: 3, mt: 4 }} style={{ backgroundColor: 'lightgrey' }}>
      <h2>
        {lessonsData?.type} {lessonsData?.name} "{lessonsData?.title}"
      </h2>
      {lessonsData?.keyPoints && (
        <ul className="keypoints">
          <h4>Lesson Topics</h4>
          {lessonsData?.keyPoints?.map((keypoint, i) => (
            <li key={i}>
              <p>{keypoint}</p>
            </li>
          ))}
        </ul>
      )}
      {lessonsData?.prerequisite && (
        <ul>
          <h4>Prepare for lesson</h4>
          {lessonsData?.prerequisite?.map((prerequisite, i) => (
            <li key={i}>
              <p>{prerequisite}</p>
            </li>
          ))}
        </ul>
      )}
      {lessonsData?.links && (
        <ul>
          <h4>Links</h4>
          {lessonsData?.links?.map((link, i) => (
            <li key={i}>
              <a href={link[1]}>{link[0]}</a>
            </li>
          ))}
        </ul>
      )}
      {lessonsData?.hometask && (
        <ul>
          <h4>Hometask</h4>
          {lessonsData?.hometask?.map((hometask, i) => (
            <li key={i}>
              <p>{hometask}</p>
            </li>
          ))}
        </ul>
      )}
      {lessonsData?.youtube && (
        <ul>
          <h4>Lesson video</h4>
          <a target="_blank" href={lessonsData?.youtube}>
            <YouTubeIcon fontSize="large" color="error" />
          </a>
        </ul>
      )}
    </Paper>
  ) : (
    <>
      <p>Sorry something went wrong</p>
      <p>
        Click →{<NavLink to="/chunk-search-input/">to Find Lessons</NavLink>} to
        go back
      </p>
    </>
  )
}
