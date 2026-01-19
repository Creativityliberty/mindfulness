
import React from 'react';

export const TermsAndConditions: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-[#FDFBF9]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tight">Conditions <span className="text-indigo-600">Générales de Vente</span></h1>
        
        <div className="space-y-12 text-slate-600 leading-relaxed font-medium">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">1. Objet</h2>
            <p>
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre Mindfulness & Bien-être Studio et toute personne effectuant un achat de formation sur le site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">2. Produits et Services</h2>
            <p>
              Les formations proposées sont des contenus numériques (vidéos, documents PDF) accessibles en ligne après paiement. La description détaillée de chaque formation est disponible sur sa fiche produit respective.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">3. Prix et Modalités de Paiement</h2>
            <p>
              Les prix sont indiqués en euros et sont nets de taxes (TVA non applicable, art. 293 B du CGI). Le paiement est exigible immédiatement à la commande. Nous acceptons les paiements par carte bancaire via des plateformes sécurisées.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Droit de rétractation</h2>
            <p>
              Conformément à l'article L. 221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support matériel dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation. 
            </p>
            <p>
              Toutefois, Mindfulness & Bien-être Studio offre une garantie "satisfait ou remboursé" de 14 jours sur certains programmes, spécifiée sur la page de vente du produit.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">5. Accès au service</h2>
            <p>
              L'accès aux formations est strictement personnel. L'utilisateur s'engage à ne pas partager ses identifiants de connexion. Toute utilisation abusive pourra entraîner la suspension du compte sans remboursement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
