// Influencer management
class InfluencerManager {
  constructor() {
    this.influencers = this.loadInfluencers()
    this.initializeExampleData()
  }

  loadInfluencers() {
    const saved = localStorage.getItem("influencers")
    return saved ? JSON.parse(saved) : []
  }

  saveInfluencers() {
    localStorage.setItem("influencers", JSON.stringify(this.influencers))
  }

  initializeExampleData() {
    if (this.influencers.length === 0) {
      this.influencers = [
        {
          id: "1",
          name: "Ana Silva",
          photo: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
          email: "ana.silva@email.com",
          phone: "(11) 99999-1234",
          description:
            "Influenciadora de lifestyle e moda com mais de 500k seguidores. Especialista em conteúdo feminino, tendências de moda e beleza. Trabalha com marcas premium e tem alta taxa de engajamento com público feminino de 18-35 anos.",
        },
        {
          id: "2",
          name: "Carlos Santos",
          photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
          email: "carlos.santos@email.com",
          phone: "(11) 99999-5678",
          description:
            "Creator de tecnologia e games com 800k seguidores. Focado em reviews de produtos, unboxings e conteúdo educativo sobre inovação. Audiência majoritariamente masculina interessada em tech e gaming.",
        },
        {
          id: "3",
          name: "Mariana Costa",
          photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
          email: "mariana.costa@email.com",
          phone: "(21) 98888-1111",
          description:
            "Fitness influencer e nutricionista com 650k seguidores. Especializada em treinos funcionais, alimentação saudável e bem-estar. Público engajado interessado em saúde e qualidade de vida.",
        },
        {
          id: "4",
          name: "Pedro Oliveira",
          photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
          email: "pedro.oliveira@email.com",
          phone: "(11) 97777-2222",
          description:
            "Empreendedor digital e coach de negócios com 400k seguidores. Foca em conteúdo sobre empreendedorismo, investimentos e desenvolvimento pessoal. Audiência de profissionais e aspirantes a empreendedores.",
        },
        {
          id: "5",
          name: "Juliana Mendes",
          photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
          email: "juliana.mendes@email.com",
          phone: "(31) 96666-3333",
          description:
            "Food blogger e chef com 550k seguidores. Especialista em culinária brasileira, receitas práticas e gastronomia. Público interessado em culinária, receitas e cultura gastronômica.",
        },
        {
          id: "6",
          name: "Rafael Lima",
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
          email: "rafael.lima@email.com",
          phone: "(85) 95555-4444",
          description:
            "Travel blogger e fotógrafo com 720k seguidores. Especializado em destinos nacionais e internacionais, dicas de viagem e fotografia. Audiência apaixonada por viagens e aventuras.",
        },
        {
          id: "7",
          name: "Camila Rodrigues",
          photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
          email: "camila.rodrigues@email.com",
          phone: "(41) 94444-5555",
          description:
            "Beauty guru e maquiadora profissional com 480k seguidores. Especialista em tutoriais de maquiagem, skincare e produtos de beleza. Público feminino interessado em cosméticos e autocuidado.",
        },
        {
          id: "8",
          name: "Lucas Ferreira",
          photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
          email: "lucas.ferreira@email.com",
          phone: "(71) 93333-6666",
          description:
            "Músico e produtor musical com 380k seguidores. Foca em conteúdo sobre música, produção musical e bastidores da indústria. Audiência jovem interessada em música e arte.",
        },
        {
          id: "9",
          name: "Fernanda Alves",
          photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
          email: "fernanda.alves@email.com",
          phone: "(61) 92222-7777",
          description:
            "Influenciadora de maternidade e família com 420k seguidores. Compartilha experiências sobre maternidade, educação infantil e vida familiar. Público de mães e famílias jovens.",
        },
        {
          id: "10",
          name: "Diego Martins",
          photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
          email: "diego.martins@email.com",
          phone: "(51) 91111-8888",
          description:
            "Influenciador de carros e automobilismo com 600k seguidores. Especialista em reviews de veículos, modificações e cultura automotiva. Audiência masculina apaixonada por carros.",
        },
        {
          id: "11",
          name: "Isabela Santos",
          photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
          email: "isabela.santos@email.com",
          phone: "(81) 90000-9999",
          description:
            "Arquiteta e designer de interiores com 350k seguidores. Foca em decoração, arquitetura residencial e dicas de design. Público interessado em casa, decoração e lifestyle.",
        },
        {
          id: "12",
          name: "Thiago Pereira",
          photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
          email: "thiago.pereira@email.com",
          phone: "(62) 98888-0000",
          description:
            "Personal trainer e atleta com 520k seguidores. Especializado em musculação, crossfit e performance esportiva. Audiência focada em fitness, esportes e superação pessoal.",
        },
      ]
      this.saveInfluencers()
    }
  }

  addInfluencer(influencerData) {
    const newInfluencer = {
      id: Date.now().toString(),
      ...influencerData,
      photo:
        influencerData.photo ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(influencerData.name)}&size=150&background=7c3aed&color=fff`,
    }

    this.influencers.push(newInfluencer)
    this.saveInfluencers()
    return newInfluencer
  }

  removeInfluencer(id) {
    this.influencers = this.influencers.filter((inf) => inf.id !== id)
    this.saveInfluencers()
  }

  getInfluencers() {
    return this.influencers
  }
}

// Toast notifications
function showToast(message, type = "success") {
  const toast = document.getElementById("toast")
  toast.textContent = message
  toast.className = `toast ${type}`
  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}

// Generate initials for avatar
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

// Create avatar HTML
function createAvatar(influencer) {
  if (influencer.photo && influencer.photo !== "") {
    return `<img src="${influencer.photo}" alt="${influencer.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="display: none;">${getInitials(influencer.name)}</div>`
  }
  return `<div>${getInitials(influencer.name)}</div>`
}

// Load and display influencers on home page
function loadInfluencers() {
  const influencers = window.influencerManager.getInfluencers()
  const grid = document.getElementById("influencers-grid")
  const emptyState = document.getElementById("empty-state")
  const countBadge = document.getElementById("influencer-count")

  // Update count
  countBadge.textContent = `${influencers.length} Influenciadores Disponíveis`

  if (influencers.length === 0) {
    grid.style.display = "none"
    emptyState.style.display = "block"
    return
  }

  grid.style.display = "grid"
  emptyState.style.display = "none"

  grid.innerHTML = influencers
    .map(
      (influencer) => `
        <div class="card" onclick="openInfluencerModal(${JSON.stringify(influencer).replace(/"/g, "&quot;")})">
            <div class="card-header">
                <div class="avatar">
                    ${createAvatar(influencer)}
                </div>
                <h3>${influencer.name}</h3>
            </div>
            <div class="card-content">
                <p>${influencer.description.substring(0, 120)}${influencer.description.length > 120 ? "..." : ""}</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${influencer.email}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${influencer.phone}</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Modal functionality
function openInfluencerModal(influencer) {
  const modal = document.getElementById("influencer-modal")
  const modalName = document.getElementById("modal-name")
  const modalDescription = document.getElementById("modal-description")
  const modalEmail = document.getElementById("modal-email")
  const modalPhone = document.getElementById("modal-phone")
  const modalWhatsapp = document.getElementById("modal-whatsapp")
  const modalAvatarContent = document.getElementById("modal-avatar-content")

  // Set content
  modalName.textContent = influencer.name
  modalDescription.textContent = influencer.description
  modalEmail.href = `mailto:${influencer.email}`
  modalEmail.querySelector("span").textContent = influencer.email
  modalPhone.href = `tel:${influencer.phone}`
  modalPhone.querySelector("span").textContent = influencer.phone

  // WhatsApp link (remove formatting from phone)
  const whatsappNumber = influencer.phone.replace(/\D/g, "")
  modalWhatsapp.href = `https://wa.me/55${whatsappNumber}`
  modalWhatsapp.querySelector("span").textContent = "Enviar mensagem"

  // Set avatar
  modalAvatarContent.innerHTML = `
    <div class="avatar">
      ${createAvatar(influencer)}
    </div>
  `

  // Show modal
  modal.classList.add("show")
  document.body.style.overflow = "hidden"
}

function closeInfluencerModal() {
  const modal = document.getElementById("influencer-modal")
  modal.classList.remove("show")
  document.body.style.overflow = "auto"
}

// Event listeners for modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("influencer-modal")
  const closeBtn = document.querySelector(".modal-close")

  if (closeBtn) {
    closeBtn.addEventListener("click", closeInfluencerModal)
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeInfluencerModal()
      }
    })
  }

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeInfluencerModal()
    }
  })
})

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  window.influencerManager = new InfluencerManager()

  // Load influencers on home page
  if (document.getElementById("influencers-grid")) {
    loadInfluencers()
  }
})
