![](https://badgen.net/badge/Editor.js/v2.0/blue)

# EditorJS Laravel Picker Tool

Laravel Picker tool for [Editor.js](https://editorjs.io).

This tool allows you to display a modal of API-driven items from your Laravel application to search and add.

## THIS IS A WIP
I have not updated the tests from the original project I forked, there is some cleanup that should also be done.
Ideally Id like to find a way to pass in the toolbar/toolbox title so it can be custom via config.

## Notes

This does require an API endpoint to fetch data. While this is meant for local API calls you could use this with any API endpoint if it returns the correct payloads.

## Installation

### Install via NPM
Get the package
```shell
$ npm i --save-dev editorjs-laravel-picker
```

Include module at your application

```javascript
import LaravelPicker from 'editorjs-laravel-picker';
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
const editor = EditorJS({
  tools: {
      picker: {
        class: LaravelPicker,
        inlineToolbar: true,
        config: {
          toolboxTitle: 'Documents',
          api: {
            endpoint: 'https://example.com/api/v1/documents',
            search_param: 'term',
            results_key: 'items',
          }
        }
      }
  }
});
```

## Config Params

| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| api       | `{endpoint: string}`  | Config for **API**. Contains 1 field: <br><br> **endpoint**: API `Endpoint URL`. |

## Tool's tunes

None

## Output data

| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| url            | `string`  | Item's url                      |
| name           | `string`  | Item's name                     |
| type           | `string`  | Item's type                     |
| image          | `string`  | Item's image                    |
| summary        | `string`  | Item's summary                  |
| size           | `string`  | Item's size                     |

**API Item Examples**

```json
{
    "type" : "item",
    "data" : {
      "file" : {
        "url" : "https://example.com/foobar",
        "name": "Foobar",
        "type": "link",
        "image": "https://ui-avatars.com/api/?name=Link&color=7F9CF5&background=EBF4FF",
        "summary": "A sample page url",
        "size": false,
      },
      "title": "Foobar"
    }
}
```
```json
{
    "type" : "item",
    "data" : {
      "file": {
        "url" : "https://example.com/storage/files/project.pdf",
        "name": "Project.pdf",
        "type": "file",
        "image": "https://ui-avatars.com/api/?name=PDF&color=7F9CF5&background=EBF4FF",
        "summary": false,
        "size": "106.9 Kib",
      },
      "title": "Project.pdf"
    }
}
```

## Development

**Development mode**
```shell
$ yarn build:dev
```

**Production release**
1. Create a production bundle
```shell
$ yarn build
```

2. Commit `dist/bundle.js`

**Run tests**
```shell
$ yarn test
```

## Code of conduct
We welcome everyone to contribute. Make sure you have read the [CODE_OF_CONDUCT][coc] before.

## Contributing
For information on how to contribute, please refer to our [CONTRIBUTING][contributing] guide.

## Changelog
Features and bug fixes are listed in the [CHANGELOG][changelog] file.

## License
This library is licensed under an MIT license. See [LICENSE][license] for details.

## Acknowledgements
Big thanks to https://github.com/kommitters/editorjs-inline-image
I copied and modified their project to create this one as it was close to what I needed.
You can find me at https://codypchristian.com and https://eruditestudios.com


[license]: https://github.com/codypchristian/editorjs-laravel-pickerblob/master/LICENSE
[coc]: https://github.com/codypchristian/editorjs-laravel-pickerblob/master/CODE_OF_CONDUCT.md
[changelog]: https://github.com/codypchristian/editorjs-laravel-pickerblob/master/CHANGELOG.md
[contributing]: https://github.com/codypchristian/editorjs-laravel-pickerblob/master/CONTRIBUTING.md
