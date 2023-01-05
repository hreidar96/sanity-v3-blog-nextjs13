import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Hreidars_Content_Studio',
  title: 'Hreidars Content Studio',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme,
})
