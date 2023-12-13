function App() {
    return (
        <div>
            <Person
                name="Bartholomew"
                age={18}
                hobbies={["Running fast", "Science stuff", "Saving the world"]}
            />
            <Person
                name="Bruce"
                age={30}
                hobbies={["Standing on buildings at night", "Being rich", "Beating up bad guys"]}
            />
            <Person
                name="Peter"
                age={16}
                hobbies={["Swinging through buildings", "Highschool", "Saving criminals to walls"]}
            />
        </div>
    )
}