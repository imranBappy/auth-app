const handleRequest = () =>{
    const url = `http://localhost:4000/game`;
    const token =  "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDg3MTcwMTFhOGU5NzA4ZDhlNmNkNjYiLCJ1c2VybmFtZSI6ImltcmFuIiwiaWF0IjoxNjE5NTQyNjY0LCJleHAiOjE2MTk1NDYyNjR9.kTmKPGy7UuGZXg2ndmdS07uSGgdVlyGUei5Cqzy4JkA"

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}