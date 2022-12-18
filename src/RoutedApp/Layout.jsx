import { useState } from 'react'
import LessonsList from '../Components/LessonsList'
import { getLessons } from '../features/lessons/lessonsSlice'
import { useDispatch } from 'react-redux'

export default function Layout() {
  const dispatch = useDispatch()
  const [urlWord, setUrlWord] = useState('')

  function onChangeHandler(e) {
    setUrlWord(e.target.value)
  }
  return (
    <>
      <header>
        <div className="input-button-group">
          <input
            onChange={onChangeHandler}
            type="text"
            placeholder="Find the lesson..."
          />
          <button onClick={() => dispatch(getLessons(urlWord))}>
            Find lesson
          </button>
        </div>
      </header>
      <main>
        <LessonsList />
      </main>
    </>
  )
}
