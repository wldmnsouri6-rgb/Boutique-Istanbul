import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// Store inquiries/reservations in memory for instant feedback
interface ReservationRequest {
  id: string;
  customerName: string;
  phone: string;
  itemName: string;
  size: string;
  notes?: string;
  createdAt: string;
  status: "pending" | "confirmed";
}

const reservations: ReservationRequest[] = [];

// API Endpoint for Size & Style Advice (Gemini Powered)
app.post("/api/style-advisor", async (req, res) => {
  try {
    const { occasion, stylePreference, bodyType, height, weight } = req.body;

    const ai = getGeminiClient();
    if (!ai) {
      // Fallback structured recommendation if key is not configured yet
      return res.json({
        recommendation: `Pour une tenue d été "${occasion || "décontractée"}", nous vous recommandons un t-shirt en coton peigné oversize associé à un short cargo léger ou un jogging d été respirant.`,
        suggestedItems: ["T-Shirt Coton Peigné Oversized", "Short Cargo Coton Ripstop", "Chemise Lin Manches Courtes"],
        stylistTip: "Passez en boutique Rte de Boukhiama à Béjaïa pour essayer ces pièces avec nos conseils sur place. Ouvert 7j/7 jusqu'à 21h !"
      });
    }

    const prompt = `Tu es le Styliste et Conseiller Mode de "Boutique Istanbul Béjaïa", un magasin de vêtements simples et décontractés pour hommes réputé situé à Béjaïa (Route de Boukhiama, Algérie).
En ce moment c'est la saison d'été. Notre collection est centrée sur des vêtements simples, légers et décontractés : t-shirts coton peigné oversize, shorts (cargo, chino, denim), joggings légers et chemises d'été en lin manches courtes (pas de costumes ni de vêtements lourds d'hiver).
Un client cherche des conseils vestimentaires et de taille.
Informations client:
- Occasion recherchée: ${occasion || "Sortie d'été décontractée"}
- Style préféré: ${stylePreference || "Casual & Tendance Été"}
- Morphologie / Taille / Poids: ${bodyType || "Standard"}, ${height || "N/A"} cm, ${weight || "N/A"} kg.

Donne une réponse très professionnelle, chaleureuse et amicale en français.
Recommande un look estival décontracté composé de 2 à 3 pièces simples (ex: t-shirt oversize + short cargo ou jogging léger + chemise lin manche courte).
Fournis également un conseil de coupe/taille précis.
Incite poliment le client à venir essayer les vêtements directement en boutique à Béjaïa (Route de Boukhiama, ouvert 7j/7 jusqu'à 21h, paiement espèces sur place).`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    res.json({
      recommendation: response.text || "Nos conseillers vous attendent en boutique pour essayer la collection.",
      suggestedItems: ["Chemise en lin", "Veste blazer ajustée", "Pantalon chino"],
      stylistTip: "Essayage sur mannequin et conseil personnalisé gratuit en magasin à Béjaïa !"
    });
  } catch (error) {
    console.error("Gemini Advisor Error:", error);
    res.status(500).json({
      error: "Erreur lors de la génération du conseil style.",
      recommendation: "Une sélection de tenues élégantes vous attend en boutique à Béjaïa. Passez nous voir avant 21h !"
    });
  }
});

// API Endpoint for Reserving size in-store (Click & Reserve)
app.post("/api/reserve-size", (req, res) => {
  const { customerName, phone, itemName, size, notes } = req.body;

  if (!customerName || !phone || !itemName || !size) {
    return res.status(400).json({ error: "Tous les champs requis doivent être remplis." });
  }

  const newReservation: ReservationRequest = {
    id: "RES-" + Math.floor(100000 + Math.random() * 900000),
    customerName,
    phone,
    itemName,
    size,
    notes,
    createdAt: new Date().toISOString(),
    status: "confirmed"
  };

  reservations.unshift(newReservation);

  res.json({
    success: true,
    message: `Votre demande de réservation pour la taille ${size} (${itemName}) a été enregistrée avec succès !`,
    reservation: newReservation,
    storeInfo: {
      address: "P2XR+QH7, Route de Boukhiama, Béjaïa",
      hours: "Ouvert 7j/7 jusqu'à 21h00",
      payment: "Paiement en espèces uniquement sur place"
    }
  });
});

// Contact / Inquiry route
app.post("/api/contact", (req, res) => {
  const { name, phone, message, subject } = req.body;
  res.json({
    success: true,
    message: "Merci pour votre message ! Notre équipe de Boutique Istanbul Béjaïa vous répondra rapidement.",
    receivedData: { name, phone, subject, date: new Date().toLocaleDateString("fr-FR") }
  });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Boutique Istanbul listening on http://localhost:${PORT}`);
  });
}

startServer();
