import { useLoaderData } from 'react-router-dom'

// 1. App.jsx
export const loader = async () => {
  return 'something'
}

const Landing = () => {
  const data = useLoaderData()
  console.log(data)
  return <h1>Landing</h1>
}

export default Landing
