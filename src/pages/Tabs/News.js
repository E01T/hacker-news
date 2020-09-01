import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import LargeHeader from "../../components/Header/LargeHeader";
import SmallHeader from "../../components/Header/SmallHeader";

export const News = () => {
  return (
    <IonPage>
      <SmallHeader title="Hacker News" />
      <IonContent fullscreen>
        <LargeHeader title="Hacker News" />
      </IonContent>
    </IonPage>
  );
};

export default News;
