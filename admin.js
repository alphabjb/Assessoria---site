// Admin page functionality
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("add-influencer-form")) {
    initializeAdminPage()
  }
})

function initializeAdminPage() {
  const form = document.getElementById("add-influencer-form")

  // Load existing influencers
  loadInfluencersList()

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const influencerData = {
      name: formData.get("name").trim(),
      photo: formData.get("photo").trim(),
      email: formData.get("email").trim(),
      phone: formData.get("phone").trim(),
      description: formData.get("description").trim(),
    }

    // Validation
    if (!influencerData.name || !influencerData.email || !influencerData.phone) {
      window.showToast("Por favor, preencha todos os campos obrigatórios.", "error")
      return
    }

    // Add influencer
    window.influencerManager.addInfluencer(influencerData)

    // Reset form
    form.reset()

    // Reload list
    loadInfluencersList()

    // Show success message
    window.showToast("Influenciador adicionado com sucesso!")
  })
}

function loadInfluencersList() {
  const influencers = window.influencerManager.getInfluencers()
  const list = document.getElementById("influencers-list")
  const emptyState = document.getElementById("list-empty-state")
  const title = document.getElementById("list-title")

  // Update title
  title.textContent = `Influenciadores Cadastrados (${influencers.length})`

  if (influencers.length === 0) {
    list.style.display = "none"
    emptyState.style.display = "block"
    return
  }

  list.style.display = "block"
  emptyState.style.display = "none"

  list.innerHTML = influencers
    .map(
      (influencer) => `
        <div class="influencer-item">
            <div class="avatar">
                ${window.createAvatar(influencer)}
            </div>
            <div class="influencer-info">
                <h4>${influencer.name}</h4>
                <p>${influencer.email}</p>
            </div>
            <button class="btn btn-danger btn-sm" onclick="removeInfluencer('${influencer.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `,
    )
    .join("")
}

function removeInfluencer(id) {
  if (confirm("Tem certeza que deseja remover este influenciador?")) {
    window.influencerManager.removeInfluencer(id)
    loadInfluencersList()
    window.showToast("Influenciador removido com sucesso!")
  }
}

// Declare showToast and createAvatar functions
window.showToast = (message, type = "success") => {
  const toast = document.getElementById("toast")
  if (toast) {
    toast.textContent = message
    toast.className = `toast ${type}`
    toast.classList.add("show")

    setTimeout(() => {
      toast.classList.remove("show")
    }, 3000)
  }
}

window.createAvatar = (influencer) => {
  if (influencer.photo && influencer.photo !== "") {
    return `<img src="${influencer.photo}" alt="${influencer.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="display: none;">${getInitials(influencer.name)}</div>`
  }
  return `<div>${getInitials(influencer.name)}</div>`
}

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}
