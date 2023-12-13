function Tweet({username, name, date, message}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
                <p className="card-text">{message}</p>
                <p className="card-text"><small className="text-muted">{date}</small></p>
            </div>
        </div>
    );
}