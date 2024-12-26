function Child({ userDetails }) {
  //Here destructuring done in function parameter
  // Destructuring
  // const {sahilDetails} = props;
  const { firstName, lastName } = userDetails; //further destructuring
  return (
    <div>
      <ul>
        {/*1) below list without destructuring: Here, we get props in function parameter. */}
        {/* <li>FirstName: {props.sahilDetails.firstName}</li>
                <li>LastName: {props.sahilDetails.lastName}</li>
                {props.sahilDetails.likesIcream && <li>{props.sahilDetails.firstName} likes icecream</li>}
                */}

        {/*2) Below lsit with destructuring 
                <li>FirstName: {sahilDetails.firstName}</li>
                <li>LastName: {sahilDetails.lastName}</li>
                {sahilDetails.likesIcream && <li>{sahilDetails.firstName} likes icecream</li>} */}

        {/*3) Below list with further destructuring */}
        <li>FirstName: {firstName}</li>
        <li>LastName: {lastName}</li>
      </ul>
    </div>
  );
}

export default Child;
