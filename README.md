# Example project using npm/yarn link for local package development with Angular.
Angular version 5.2. This example uses npm, but you may use the same commands with yarn.

Go to `package-consumer-app` and run `npm install` to get a working example.

#

### Step 1: Symlink using `npm link`
- Navigate to your npm project directory (`linked-package` in this example) and run ```npm link```
- Navigate to your project directory which will consume the npm package (`package-consumer-app` in this example) and run: ```npm link package-name```

#

### Step 2: Run `npm start`. Done!
Changing a project file will compile the latest changes from your linked package. But the cli will not be able to directly watch your linked package.

#

Once complete, run ```npm unlink``` in each respective directory to destroy the symlinks. Remove any config changes from below.

#

### Troubleshooting
Older versions of Angular/cli/Typescript may produce build errors. The following are common solutions:

#

##### Tell the cli to maintain sym links during build
In `.angular-cli.json` add `preserveSymlinks: true` to the `build` object under `defaults`.
```
"defaults": {
    ...
    "build": {
      "preserveSymlinks": true 
    }
}
```
#

##### Include the file or directory in your `tsconfig.app.json`
Add the relative path to the `include` array as a root property. If you didn't have an `include` array, add the `"**/*.ts"` entry.

```
{
  "include": [
    "**/*.ts",
    "../node_modules/linked-package"
  ],
 }
```