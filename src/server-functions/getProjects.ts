export function getProjects() {
      fetch('http://localhost:3000/api/projects')
            .then(data => data.json())
            .catch(error => console.log(error))
}