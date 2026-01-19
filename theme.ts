
/**
 * THEME CONFIGURATION
 * 
 * This file is the "Brain" of the application's visual identity.
 * Change values here to update the entire look and feel.
 */

export const THEME = {
  // BRAND COLORS (Tailwind Class Names)
  colors: {
    primary: "indigo-600",
    primaryHover: "indigo-700",
    primaryLight: "indigo-50",
    primaryText: "indigo-950",
    accent: "purple-600",
    accentHover: "purple-700",
    success: "emerald-500",
    error: "red-500",
    background: "#FDFBF9",
    white: "white",
    slate: "slate-900",
    slateLight: "slate-500",
    slateBorder: "slate-100",
  },

  // TYPOGRAPHY (Content strings)
  content: {
    brandName: "Mindfulness & Bien-être Studio",
    hero: {
      titlePrimary: "Un esprit libre",
      titleAccent: "aligné.",
      subtitle: "Découvrez le pouvoir vibratoire des pierres et maîtrisez les soins énergétiques. Apprenez à utiliser la tourmaline et les minéraux pour harmoniser votre quotidien.",
    },
    cta: {
      discover: "Découvrir les formations",
      signup: "S'inscrire",
      login: "Connexion",
    }
  },

  // LAYOUT & SPACING
  spacing: {
    sectionPadding: "py-24",
    containerMaxWidth: "max-w-7xl",
    borderRadiusLarge: "rounded-[3rem]",
    borderRadiusMedium: "rounded-2xl",
    glassEffect: "backdrop-blur-xl bg-white/70 border border-white/40",
  },

  // ANIMATIONS (CSS Classes)
  animations: {
    float: "animate-float",
    bounce: "animate-bounce-slow",
    reveal: "reveal",
  }
};
