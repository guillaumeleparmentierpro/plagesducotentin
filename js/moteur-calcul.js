/**
 * Moteur de calcul - Cotentin Web Studio
 * Centralise le croisement des données (Météo, Marée, Vent, Soleil)
 */

export const MoteurCalcul = {
  
  // 1. Analyse pour le mode Pêche à pied
  analyserPeche(donneesMaree) {
    const { coef, heuresBasseMaree } = donneesMaree;
    // TODO: Coder la règle des coefficients et de la fenêtre de tir de 2h
    return {
      statut: "ORANGE", // VERT, ORANGE, ROUGE
      message: "En attente des coefficients exacts"
    };
  },

  // 2. Analyse pour le mode Bronzette / Plage
  analyserPlage(donneesMeteo, donneesMaree, configurationPlage) {
    // Ici on croisera la température, le vent et l'orientation de la plage
    return {
      statut: "ROUGE",
      message: "Logique à définir"
    };
  }
};
