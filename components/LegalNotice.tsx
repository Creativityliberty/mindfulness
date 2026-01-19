
import React from 'react';

export const LegalNotice: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-[#FDFBF9]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tight">Mentions <span className="text-indigo-600">Légales</span></h1>
        
        <div className="space-y-12 text-slate-600 leading-relaxed font-medium">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">1. Présentation du site</h2>
            <p>
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site Mindfulness & Bien-être Studio l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Propriétaire :</strong> Fabienne Dizy-Olliveaud - Auto-entrepreneur</li>
              <li><strong>Responsable publication :</strong> Fabienne Dizy-Olliveaud</li>
              <li><strong>Hébergeur :</strong> Google Cloud Platform</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">2. Conditions générales d'utilisation</h2>
            <p>
              L’utilisation du site Mindfulness & Bien-être Studio implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">3. Propriété intellectuelle</h2>
            <p>
              Fabienne Dizy-Olliveaud est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Limitations de responsabilité</h2>
            <p>
              Mindfulness & Bien-être Studio ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site. Le site propose des formations dans le domaine du bien-être et ne saurait en aucun cas se substituer à un avis médical professionnel.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
