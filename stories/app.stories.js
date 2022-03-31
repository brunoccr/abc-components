import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.17.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";

import storyInitialValues from "../src/storyInitialValues";
import storyMain from "../src/storyMain";
import storySublimitComposition from "../src/storySublimitComposition";
import storySublimitTerms from "../src/storySublimitTerms";
import storySublimitWarrantyGroups from "../src/storySublimitWarrantyGroups";
import storyDocumentation from "../src/storyDocumentation";

export const initialValuesStory1 = () => createElement("c-app", { is: storyInitialValues });

export const mainStory2 = () => createElement("c-app", { is: storyMain });
export const mainStory2SublimitComposition = () => createElement("c-app", { is: storySublimitComposition });
export const mainStory2SublimitTerms = () => createElement("c-app", { is: storySublimitTerms });
export const mainStory2SublimitWarrantyGroups = () => createElement("c-app", { is: storySublimitWarrantyGroups });

export const documentationStory3 = () => createElement("c-app", { is: storyDocumentation });