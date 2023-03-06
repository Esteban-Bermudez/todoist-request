import { TodoistApi } from "@doist/todoist-api-typescript"

window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search)
  const task = {
    content: params.get("content") || "Buy milk",
    due_date_utc: params.get("due_date") || "2023-03-07T12:00:00Z"
  }

  const token = params.get("api-token")
  const api = new TodoistApi(token)

  api.addTask({ content: "Buy Milk", projectId: "2297304082" })
    .then((task) => console.log(task))
    .catch((error) => console.log(error))
})
