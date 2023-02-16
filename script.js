
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("all.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[card-title]")
      const image = card.querySelector("[card-image]")
      const desc = card.querySelector("[card-desc]")

      header.textContent = user.name
      desc.textContent = user.desc
      image.innerHTML = "<img src='/assets/" + user.image + "'>"
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })