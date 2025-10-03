## [1.1.0](https://github.com/limazia/ph7-frontend/compare/v1.0.0...v1.1.0) (2025-10-03)

### ✨ Recursos

* enhance character filters with button for clearing all filters ([130d048](https://github.com/limazia/ph7-frontend/commit/130d048e0257b32c08af5c02c29f427e19bcd056))
* handle 404 errors in useCharacters hook and return empty results ([547a0af](https://github.com/limazia/ph7-frontend/commit/547a0af4753312f53df8eff97395e88ec4c6d51e))
* update QueryClient default options to include refetchOnWindowFocus setting ([b3322d4](https://github.com/limazia/ph7-frontend/commit/b3322d421a62bb031d34b98bed7d170a1b9978f8))

## 1.0.0 (2025-10-03)

### ✨ Recursos

* add App component with global styles and routing setup ([770f771](https://github.com/limazia/ph7-frontend/commit/770f77143612605b60b4f5b4f09d64866669fe14))
* add AppLayout component for main application layout structure ([a277618](https://github.com/limazia/ph7-frontend/commit/a277618599c321dce5a8a73b743458f7540f980f))
* add baseUrl and paths configuration to tsconfig.app.json for improved module resolution ([56f4671](https://github.com/limazia/ph7-frontend/commit/56f4671ce3f70c393e271e74786f5590df62c832))
* add character schema interfaces for API response structure ([1a18a35](https://github.com/limazia/ph7-frontend/commit/1a18a35160a6a7ad7fab31210962509dcdc995aa))
* add CharacterCard component to display character details ([4ee9b53](https://github.com/limazia/ph7-frontend/commit/4ee9b5381a5bf658bef0171a158c5db8dd8b68cd))
* add CharacterCardSkeleton component for loading state representation ([c6731db](https://github.com/limazia/ph7-frontend/commit/c6731db06af5e106b64f026ac6cdf29c9fe5f68c))
* add ClientProviders component for routing and context providers ([5b922cc](https://github.com/limazia/ph7-frontend/commit/5b922cc4acadc696b9049393cdfbc45d40e04e70))
* add components configuration file for Tailwind CSS and icon library setup ([931b341](https://github.com/limazia/ph7-frontend/commit/931b341c28129657c17bccd50b7dc0cb93023854))
* add custom hook useCharacters for fetching character data with query parameters ([dd1c5f6](https://github.com/limazia/ph7-frontend/commit/dd1c5f6273acebf1c3ef94abea3c4435c26cab1d))
* add CustomRoutes component with progress indicator and routing ([eeacd4b](https://github.com/limazia/ph7-frontend/commit/eeacd4bb3c42d3a102e1d00a48237feb6cb300e4))
* add environment schema validation using Zod ([7ef3069](https://github.com/limazia/ph7-frontend/commit/7ef3069c80933f46000684e0e63047b49d58f470))
* add favicon.ico and remove unused vite.svg asset ([6e34c36](https://github.com/limazia/ph7-frontend/commit/6e34c36389f1830ab212d4d2a5713809a9dc61fa))
* add FilterBar component for filtering characters by status, species, and gender ([c8858b7](https://github.com/limazia/ph7-frontend/commit/c8858b7aa038a1087074e1afd1589be3bef81f53))
* add GitHub Actions workflow for automated release process and configure semantic release ([dcd57b3](https://github.com/limazia/ph7-frontend/commit/dcd57b33220749c04015601acdbb4d1f50f4f853))
* add Header component with logo, page title, and version badge ([d219cb8](https://github.com/limazia/ph7-frontend/commit/d219cb8e4f325e465c6acc6f8c08a5dfec4abd00))
* add Home component with link to Characters page ([d91a24a](https://github.com/limazia/ph7-frontend/commit/d91a24a869b9935a741d1611a61a8e5929dc6312))
* add logo image asset to the project ([c705b31](https://github.com/limazia/ph7-frontend/commit/c705b31750b3f575da8068906f2e3467a0a2a3ac))
* add NotFound component for handling 404 errors ([f997d83](https://github.com/limazia/ph7-frontend/commit/f997d8349926f138cec875c4d3f0118ee850fe05))
* add QueryClient instance with default options for queries ([e2a6012](https://github.com/limazia/ph7-frontend/commit/e2a601294194f5a28b32f2f5349a7ef500fd8fd9))
* add routing for Home and Characters pages with NotFound fallback ([a691092](https://github.com/limazia/ph7-frontend/commit/a691092373d7333ebd4b0b3f398dbb7442e4859c))
* add semantic release script and update dependencies in package.json ([ed0deec](https://github.com/limazia/ph7-frontend/commit/ed0deecb6734fd2f4daaec3cb47bf7a0e47b60f6))
* add UI components including Badge, Button, Card, Input, Pagination, SearchBar, Select, Skeleton, Toaster, and Tooltip ([666d15d](https://github.com/limazia/ph7-frontend/commit/666d15d0951a2ce8b8b7e4bd9db2ec6d29837dfa))
* add useDebounce hook for debouncing values with a specified delay ([95d1131](https://github.com/limazia/ph7-frontend/commit/95d1131a8dac5adaf133a5dd059cf64f3fa32f34))
* add usePageTitle hook to manage document title based on current route ([f1af934](https://github.com/limazia/ph7-frontend/commit/f1af934c90ce1aafc62c1c7ab22ecb357e6a7cef))
* add utility function for merging class names with Tailwind CSS ([c8a9a30](https://github.com/limazia/ph7-frontend/commit/c8a9a30d6f58e1ba93a2e9bfcca47e6ac3a13361))
* create App component with global styles and routing setup ([30154c1](https://github.com/limazia/ph7-frontend/commit/30154c100468a093fbf3312baf6a1ec8408fbd05))
* create axios instance with configurable API delay ([1f9f1c8](https://github.com/limazia/ph7-frontend/commit/1f9f1c802f324ac68e5f14e741268c4f8e360016))
* enhance Vite configuration with Tailwind CSS support and server settings ([c60c01a](https://github.com/limazia/ph7-frontend/commit/c60c01ac26cef11856436d145be2f6a598d5555a))
* implement Characters page with filtering, search, and pagination features ([b088630](https://github.com/limazia/ph7-frontend/commit/b0886300698e54ff32744fbeece69bf7d2ee912f))
* implement getCharacters function for fetching character data with query parameters ([e1ef53a](https://github.com/limazia/ph7-frontend/commit/e1ef53ae37a341ed12cbf3015e280a355a0c7703))

### 🐛 Correções de Bugs

* update favicon and root element ID in index.html ([d800a7b](https://github.com/limazia/ph7-frontend/commit/d800a7b0ff53e85e13eb035fb2d2e9027963e9a1))

### 🔨 Refatoração de Código

* remove unused App component and associated styles ([58b1a29](https://github.com/limazia/ph7-frontend/commit/58b1a295ec5b1b716d14ad1df3da766431b400fb))
* remove unused index.css file ([aabd54f](https://github.com/limazia/ph7-frontend/commit/aabd54f5df412af37c9d85d509e02f595ffa3831))
* remove unused react.svg asset ([efcc338](https://github.com/limazia/ph7-frontend/commit/efcc3386bd8909296b2d1436324ece785bc5ec67))
* update main.tsx to use new App import and correct root element ([4247150](https://github.com/limazia/ph7-frontend/commit/4247150c48eb2cc81dd3b1858d98ada057f34dac))
