# Boilerplate nextjs antd tailwindcss
A boilerplate for Reactjs app using nextjs, next-intl, next-auth, zustand, antd, tailwindcss.

View the [Demo](https://boilerplate-nextjs-antd-tailwindcss.vercel.app/)

## Features
This boilerplate is updated with:

- [x] [React 18x](https://reactjs.org)
- [x] [Nextjs 13x](https://nextjs.org/)
- [x] [Antd 5x](https://ant.design/)
- [x] [Tailwind CSS 3x](https://tailwindcss.com/) - SCSS/CSS Module
- [x] [Next-intl](https://next-intl-docs.vercel.app/)
- [x] [Next-auth](https://next-auth.js.org/)
- [x] [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [x] [Eslint](https://eslint.org/)
- [x] The Demo is using the template of [Float UI](https://floatui.com/)

## Getting Started

1. Check if your [Node.js](https://nodejs.org/) version is v18.x.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your app on `public/manifest.json`.
5. Run `yarn` to install the dependencies.
6. Run `yarn dev` for development.
6. Run `yarn build` and `yarn start` for production.
6. Run `yarn build:staging` and `yarn start:staging` for staging.

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:8080/api/users](http://localhost:8080/api/users). This endpoint can be edited in `pages/api/users/index.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Environment Variables

By default all environment variables loaded through `.env` are only available in the Node.js environment, meaning they won't be exposed to the browser.

In order to expose a variable to the browser you have to prefix the variable with `NEXT_PUBLIC_.` For example:

```js
PORT=8080

APP_ENV=development

NEXT_PUBLIC_API_URL=http://localhost:$PORT/api
NEXT_PUBLIC_WEB_URL=http://localhost:$PORT
```

This loads process.env.NEXT_PUBLIC_ANALYTICS_ID into the Node.js environment automatically, allowing you to use it anywhere in your code. The value will be inlined into JavaScript sent to the browser because of the NEXT_PUBLIC_ prefix. This inlining occurs at build time, so your various NEXT_PUBLIC_ envs need to be set when the project is built.

##### Default Environment Variables
In general only one `.env` file is needed. However, sometimes you might want to add some defaults for the development (next dev) or production (next start) environment.

Allows you to set defaults in `.env` (all environments), `.env.development` (development environment), `and .env.production` (production environment), `and .env.staging` (staging environment).

`.env` always overrides the defaults set.

Reference in the file `.env-example`.

[Learn more](https://nextjs.org/docs/basic-features/environment-variables)


## Stylesheet
#### Adding a Global Stylesheet

Create a `app/layout.js` file if not already present. Then, `import` the `styles.css` file.

```js
import 'antd/dist/reset.css';
import 'src/theme/globals.css';

import React from 'react';

const RootLayout = (props) => {
	const { children } = props;

	return (
		<>
			{children}
		</>
	);
};

export default RootLayout;
```

#### Adding Component-Level SCSS or CSS

Supports SCSS/CSS Modules using the `[name].module.[scss/css]` file naming convention.

SCSS/CSS Modules locally scope SCSS/CSS by automatically creating a unique class name. This allows you to use the same SCSS/CSS class name in different files without worrying about collisions.

This behavior makes SCSS/CSS Modules the ideal way to include component-level SCSS/CSS. SCSS/CSS Module files can be imported anywhere in your application.

For example, consider a reusable Button component in the `components/` folder:

First, create `components/Button.module.[scss/css]` with the following content:

```js
/*
  You do not need to worry about .error {} colliding with any other `.scss` or
`.module.scss` files!
*/
.error {
  color: white;
  background-color: red;
}
```

Then, create `components/Button.js`, importing and using the above SCSS file:

```js
import classes from './Button.module.scss'

export function Button() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `classes` object.
      className={classes.error}
    >
      Destroy
    </button>
  )
}
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

If you find any problems, please [open an issue](https://github.com/tientran0019/boilerplate-nextjs-antd-tailwindcss/issues/new) or submit a fix as a pull request.

## Author
Tien Tran <tientran0019@gmail.com>

