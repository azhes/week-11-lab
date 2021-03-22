const todoList = [ {todo: "do thing 1", status: "complete"},
{todo: "do thing 2", status: "complete"}, 
{todo: "do thing 3", status: "started"},
{todo: "do thing 4", status: "started"} ]

let completedTodos = []

for (const i of todoList) {
    if (i.status === "complete") {
        completedTodos.push(i)
    }
}

for (const i of completedTodos) {
    const {todo} = i
    console.log(todo)
}