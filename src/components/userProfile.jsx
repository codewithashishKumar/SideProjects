const UserProfile = (props) => {
    return (
        <div>
            <h1>This a structure passing props by {props.name} </h1>
            <h1>who is of age {props.age} and lives in {props.location}</h1>
        </div>
    )
}

const SampleUser = () => {
    const userDetails = {
        name: 'Ashish',
        age: '28',
        company: 'Self Made',
        location: 'Meerut'
    }

    return (
        <UserProfile {...userDetails} />
    )
}
export default SampleUser;