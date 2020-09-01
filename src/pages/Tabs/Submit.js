import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import LargeHeader from "../../components/Header/LargeHeader";
import SmallHeader from "../../components/Header/SmallHeader";

export const Submit = () => {
  return (
    <IonPage>
      <SmallHeader title="Submit" />
      <IonContent fullscreen>
        <LargeHeader title="Submit" />
      </IonContent>
    </IonPage>
  );
};

export default Submit;
