
import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-[#FDFBF9]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tight">Politique de <span className="text-indigo-600">Confidentialité</span></h1>
        
        <div className="space-y-12 text-slate-600 leading-relaxed font-medium">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">1. Collecte des données</h2>
            <p>
              Nous collectons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, effectuez un achat ou remplissez un formulaire de contact. Les informations collectées incluent votre nom, votre adresse e-mail et vos informations de paiement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">2. Utilisation des informations</h2>
            <p>
              Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
              <li>Fournir un contenu pédagogique adapté</li>
              <li>Améliorer notre service client</li>
              <li>Vous contacter par e-mail (newsletter, informations sur les cours)</li>
              <li>Traiter les transactions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">3. Protection des données</h2>
            <p>
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Vos informations de paiement ne sont jamais stockées sur nos serveurs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Vos droits (RGPD)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données, vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données. Vous pouvez exercer ces droits en nous contactant à : contact@mindfulness-studio.com.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">5. Cookies</h2>
            <p>
              Nos cookies améliorent l'accès à notre site et identifient les visiteurs réguliers. Cependant, cette utilisation des cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
