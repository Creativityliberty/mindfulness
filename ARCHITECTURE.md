# Mindfulness & Bien-être Studio - Architecture

## 🚀 Vue d'ensemble
Ce projet est une plateforme de formation haut de gamme développée avec React, Tailwind CSS et Lucide Icons. L'architecture est pensée pour être modulaire, performante et esthétiquement irréprochable.

## 📂 Structure des fichiers
- `theme.ts` : **LE FICHIER LE PLUS IMPORTANT**. Centralise les couleurs de marque (Indigo & Bleu Ciel), les chaînes de caractères marketing et les constantes de design.
- `App.tsx` : Chef d'orchestre du routage. Gère les transitions fluides entre la page d'accueil, les formations, les pages légales et l'espace membre.
- `types.ts` : Définitions des interfaces TypeScript pour une robustesse accrue.

### 🧩 Composants Clés
- `Header.tsx` : Barre de navigation flottante de type "Island" avec effets de flou (Glassmorphism).
- `Hero.tsx` : Section d'impact avec animations de texte cycliques et visuels immersifs.
- `CourseGrid.tsx` / `CourseDetail.tsx` : Système de catalogue complet avec filtres par catégorie et pages de détails pédagogiques.
- `ContactChatbot.tsx` : **Mikmik IA**, un assistant intelligent (Gemini 3 Flash) intégré avec :
    - Mode sombre ultra-moderne.
    - Actions rapides (Quick Actions) pour la navigation.
    - Cartes d'action WhatsApp personnalisées.
    - Formatage de texte pur (sans Markdown) pour une lisibilité maximale.
- `AuthPage.tsx` : Interface split-view pour la connexion et l'inscription.
- `LegalNotice.tsx`, `TermsAndConditions.tsx`, `PrivacyPolicy.tsx` : Pages de conformité réglementaire intégrées.

## 🎨 Personnalisation du style
Pour modifier l'apparence de l'application :
1. Consultez `theme.ts`.
2. Mettez à jour `THEME.colors` pour changer la palette.
3. Modifiez `THEME.content` pour mettre à jour le copywriting sans toucher au code JSX.

## 🤖 Intelligence Artificielle
Le chatbot utilise le SDK `@google/genai` avec le modèle `gemini-3-flash-preview`. 
- **Instruction Système** : Configurée pour incarner "Mikmik", un expert bienveillant.
- **Contraintes** : L'IA est instruite de ne jamais utiliser de formatage Markdown (pas d'astérisques) pour garantir une intégration visuelle parfaite dans l'UI HTML.

## 📱 Responsivité & Animations
- Approche **Mobile-First** avec Tailwind.
- Animations de scroll via `IntersectionObserver` pour des révélations progressives ("Reveal effects").
- Effets 3D dans `StudioGallery.tsx` utilisant les perspectives CSS.

## ⚖️ Conformité
L'application inclut nativement la gestion du RGPD via la `PrivacyPolicy.tsx` et respecte les standards de vente en ligne via les `CGV`.