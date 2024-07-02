import { useParams } from "react-router-dom"


function User() {
    const {userid} = useParams()
  return (
    <div className="text-3xl bg-gray-500 text-white text-center py-5 rounded-sm">User: {userid}</div>
  )
}

export default User