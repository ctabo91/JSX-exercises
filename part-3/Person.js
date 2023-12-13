function Person({name, age, hobbies}) {
    let message;
    let displayedName;

    if (age >= 18) {
        message = "Please Go Vote!";
    } else {
        message = "You must be 18";
    }

    if (name.length > 8) {
        displayedName = name.slice(0, 6);
    } else {
        displayedName = name;
    }

    return (
        <div>
            <p>Learn some information about {displayedName}</p>
            <h3>{message}</h3>
            <p>-Things I like to do:</p>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    );
}