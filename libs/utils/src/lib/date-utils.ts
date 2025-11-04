/**
 * Formate une date en format lisible (ex: "4 novembre 2025")
 */
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('fr-FR', options);
}

/**
 * Formate une date en format court (ex: "04/11/2025")
 */
export function formatDateShort(date: Date): string {
  return new Date(date).toLocaleDateString('fr-FR');
}

/**
 * Vérifie si une date est dans le passé
 */
export function isPastDue(date: Date): boolean {
  return new Date(date) < new Date();
}

/**
 * Calcule le nombre de jours jusqu'à une date
 */
export function daysUntil(date: Date): number {
  const now = new Date();
  const target = new Date(date);
  const diffTime = target.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Génère un ID unique
 */
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
