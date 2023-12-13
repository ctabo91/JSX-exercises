function App() {
    return (
        <div>
            <Tweet
                username="@superman"
                name="Clark Kent"
                date={new Date().toDateString()}
                message="This is not a disguise"
            />
            <Tweet
                username="@superman"
                name="Clark Kent"
                date={new Date().toDateString()}
                message="I swear, I'm just a news reporter"
            />
            <Tweet
                username="@superman"
                name="Clark Kent"
                date={new Date().toDateString()}
                message="No man of steel here..."
            />
        </div>
    );
}