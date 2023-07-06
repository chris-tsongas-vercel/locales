1. In the root folder, run `yarn install`.

2. In the `serve-locales` folder, run `yarn dev`.

3. Verify an array of locale strings appears at http://localhost:3001/api/locales.

4. In the `load-locales` folder, run `yarn dev`.

5. Verify `**** locale en-US` appears in the console from the previous step.

You can also verify builds will work by running `yarn build` then `yarn start` in the `serve-locales` and then `load-locales` folders.

Warning: as currently written, the `load-locales` application will **not** be able to start if the locales are not available via fetch.
