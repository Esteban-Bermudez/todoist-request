window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search)
  const task = {
    content: params.get("content") || "Buy milk",
    due_date_utc: params.get("due_date") || "2023-03-07T12:00:00Z"
  }

  const token = params.get("api-token")
  const todoist = TodoistJS(token)

  todoist.tasks
    .add(task)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    })
})
