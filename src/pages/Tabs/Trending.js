import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import LargeHeader from "../../components/Header/LargeHeader";
import SmallHeader from "../../components/Header/SmallHeader";

export const Trending = () => {
  return (
    <IonPage>
      <SmallHeader title="Trending" />
      <IonContent fullscreen>
        <LargeHeader title="Trending" />
      </IonContent>
    </IonPage>
  );
};

export default Trending;
