

// seria usado em caso de ter que mudar o titulo direto na API
function UpdateUser() {
  const item = { title, id, userId }
  console.warn("item", item)
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(item)
  }).then((result) => {
    result.json().then(data => {
      setItens(data)
      console.log(data);
    })
  })

  return (
    <input type="text" />
  )
}

export default UpdateUser;