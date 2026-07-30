import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { WebsiteSettings } from "@/types/settings";

const COLLECTION = "settings";
const DOCUMENT = "website";

const defaultSettings: WebsiteSettings = {
  hero: {
    title: "Om Sree Ayyan Seva Trust",
    subtitle: "Serving Humanity with Compassion, Dignity and Hope",
    description: "",
    buttonText: "Donate Now",
    buttonLink: "/donate",
    backgroundImage: "",
  },

  about: {
  title: "About Us",
  subtitle: "Serving Humanity",
  description: "",
  image: "",

  valuesTitle: "Our Values",
  valuesDescription: "",

  visionTitle: "Our Vision",
  visionDescription: "",

  missionTitle: "Our Mission",
  missionDescription: "",
},

  contact: {
    phone: "",
    alternatePhone: "",
    email: "",
    address: "",
    googleMap: "",
  },

  donation: {
    accountName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    branch: "",
    upiId: "",
    qrImage: "",
  },

  footer: {
    copyright: "© Om Sree Ayyan Seva Trust",
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: "",
    linkedin: "",
  },

  seo: {
    siteTitle: "Om Sree Ayyan Seva Trust",
    metaDescription: "",
    keywords: "",
    ogImage: "",
  },
};

export async function getWebsiteSettings(): Promise<WebsiteSettings> {
  const ref = doc(db, COLLECTION, DOCUMENT);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    await setDoc(ref, {
      ...defaultSettings,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return defaultSettings;
  }

  return snapshot.data() as WebsiteSettings;
}

export async function saveWebsiteSettings(
  settings: WebsiteSettings
): Promise<void> {
  const ref = doc(db, COLLECTION, DOCUMENT);

  await setDoc(
    ref,
    {
      ...settings,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}