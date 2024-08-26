<br>

<p align="center">
<img align="center" src="/static/img/UptickNetwork_logo02.svg">
</p>

<br>

Uptick ID Documentation is the documentation hub providing extensive documentation, community resources, and guides for enthusiasts and developers interested in learning about or building solutions using Uptick ID.

The [Uptick ID Documentation](https://devs.polygonid.com) website is built using [Docusaurus](https://docusaurus.io/), 
a modern static website generator to build optimized websites quickly.

## Contribute to Uptick ID Documentation
### Requirements

Note that on macOS, you also need Xcode and Command Line Tools.

* Install [Node.js](https://nodejs.org/en/download/) version >= 20

### Run the docs locally

1. Install the dependencies.
   
    ```
    npm install
    ```
    
   The site is built using Docusaurus. You may need to install Docusaurus before running the docs locally.

   ```
   npm add docusaurus
   ```

2. Run the docs locally. 
   The following command will start a local development server and open a browser window. 
   Most changes are reflected live without having to restart the server.

    ```
    npm run start
    ```



## Build

This command generates static content into the `build` directory and can be served using any static content hosting 
service:

```
npm run build
```

### Image Maintenance

To enhance the flexibility of centering and sizing images within our markdown files, we often utilize HTML. However, this approach complicates image maintenance. We provide two scripts to facilitate the management of images in our projects.

#### Finding Unused Images

This utility script assists in identifying static images that are no longer referenced within our documentation. To leverage this script, execute the following command from the project's root directory:

```bash
node scripts/find-unused-images.js
```

#### Identifying Broken Image Links

This script is designed to locate references to images within our documentation that lack corresponding files in the static folder. To use this script, run the following command from the project's root directory:

```bash
node scripts/find-broken-image-links.js
```

## Deployment

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the 
`gh-pages` branch.

```
GIT_USER=[your_github_handle] USE_SSH=true npm run deploy
```

### Caching

Deployments leverage GitHub caching to improve build times. Currently, 3 levels of caching are 
implemented:

- `.docusaurus`: caches the site structure. The build process will update this as needed
- `build`: caches the static assets to avoid regenerating any pages that have not changed
- `node_modules`: caches node_modules based on the hash of `package-lock.json`. Any changes to package dependencies will invalidate and rebuild this cache

Current cache config is defined in [master_deployment.yml](.github/workflows/master_deployment.yml#39). Caches can be viewed or invalidated in the 
GitHub repo settings.
