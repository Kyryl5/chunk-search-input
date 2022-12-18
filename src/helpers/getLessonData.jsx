export const getLessonData = async ({ params }) => {
  const result = await fetch(
    `https://react-course-api.azurewebsites.net/lesson/${params.lesson}`
  )
  const user = await result.json()
  return user[0]
}
