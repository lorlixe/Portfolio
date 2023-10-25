import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Privacy = () => {
  return (
    <div>
      <Navigation />

      <div className="page">
        <h1>Politique de Confidentialité</h1>
        <div>
          Dernière mise à jour : [Date de la dernière mise à jour] Je tiens à
          assurer la confidentialité de vos informations personnelles. Cette
          politique de confidentialité vous explique comment je collecte,
          utilise et protège vos données lorsque vous utilisez mon site web.
        </div>
        <div>
          <h2>Informations que je collecte</h2>
          Lorsque vous visitez mon site web et que vous remplissez le formulaire
          de contact, je peux collecter les informations personnelles suivantes
          :
          <ul>
            <li>
              Nom : Je collecte votre nom afin de personnaliser ma communication
              avec vous.
            </li>
            <li>
              Prénom : Je collecte votre prénom pour personnaliser ma
              communication avec vous.
            </li>
            <li>
              Adresse e-mail : Je collecte votre adresse e-mail pour pouvoir
              vous recontacter.
            </li>
          </ul>
          <h2>Comment j'utilise vos informations</h2>
          J'utilise ces informations personnelles uniquement dans le but de vous
          recontacter en réponse à vos demandes ou messages soumis via le
          formulaire de contact sur mon site web. Je ne partage pas ces
          informations avec des tiers sans votre consentement explicite.
          <h2>Conservation des données</h2>
          Je conserve vos informations personnelles aussi longtemps que
          nécessaire pour atteindre les objectifs pour lesquels elles ont été
          collectées. Une fois que ces informations ne sont plus nécessaires, je
          les supprime de mes systèmes.
          <h2>Vos droits</h2>
          Vous avez le droit de demander l'accès, la rectification ou la
          suppression de vos informations personnelles que je détiens. Si vous
          souhaitez exercer l'un de ces droits ou si vous avez des questions sur
          mon utilisation de vos informations, veuillez me contacter à
          marinekouadio@gmail.com.
          <h2>Sécurité des données</h2>
          Je prends des mesures raisonnables pour protéger vos informations
          personnelles contre la perte, l'accès non autorisé, la divulgation, la
          modification ou la destruction. Cependant, veuillez noter qu'aucune
          méthode de transmission sur Internet ou de stockage électronique n'est
          totalement sécurisée. Par conséquent, je ne peux garantir une sécurité
          absolue.
          <h2>Consentement</h2>
          En utilisant mon site web et en me fournissant vos informations
          personnelles, vous consentez à ma collecte et à mon utilisation de ces
          informations conformément à la présente politique de confidentialité.
          <h2>Modifications de la politique de confidentialité</h2>
          Je me réserve le droit de modifier cette politique de confidentialité
          à tout moment. Toute modification sera publiée sur cette page avec la
          date de la dernière mise à jour. Veuillez vérifier régulièrement cette
          page pour rester informé des éventuelles modifications apportées à ma
          politique de confidentialité. Si vous avez des questions ou des
          préoccupations concernant ma politique de confidentialité, veuillez me
          contacter à marinekouadio@gmail.com
        </div>
        Date de la dernière mise à jour : 24/10/2023
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
