import { useEffect, useState } from "react"

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.gitub.com/users/sahillamture20')
     .then(res => res.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    

  return (
    <div className="text-3xl bg-gray-500 text-white text-center py-5 rounded-sm">Github Followers: {data.followers} </div>
  )
}

export default Github