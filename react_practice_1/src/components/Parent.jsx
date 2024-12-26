import Child from "./Child";

function Parent() {
  // Using same component with different data
  const sahilDetails = {
    firstName: "Sahil",
    lastName: "Lamture",
  };
  const sushilDetails = {
    firstName: "Sushil",
    lastName: "Mahajan",
  };

  const user = [
    {
      firstName: "Sumit",
      lastName: "Mahajan",
    },
    {
      firstName: "Sameer",
      lastName: "Patil",
    },
    {
      firstName: "Tanmay",
      lastName: "Jadhav",
    },
  ];
  return (
    <>
      {/* Using same component with different data from different objects*/}
      <Child userDetails={sahilDetails} />
      <Child userDetails={sushilDetails} />

      {/* Using same component with different data from array user*/}
      {user.map((user, key) => {
        return <Child userDetails={user} key={key} />;
      })}
    </>
  );
}

export default Parent;
