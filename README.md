# [medium-editor-textcolor](https://github.com/sonce/medium-editor-textcolor)
[![](https://img.shields.io/badge/Powered%20by-medium-editor-textcolor%20base-brightgreen.svg)](https://github.com/sonce/medium-editor-textcolor)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sonce/medium-editor-textcolor/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/sonce/medium-editor-textcolor.svg?branch=master)](https://travis-ci.org/sonce/medium-editor-textcolor)
[![Coveralls](https://img.shields.io/coveralls/sonce/medium-editor-textcolor.svg)](https://coveralls.io/github/sonce/medium-editor-textcolor)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/medium-editor-textcolor)
[![NPM downloads](http://img.shields.io/npm/dm/medium-editor-textcolor.svg?style=flat-square)](http://www.npmtrends.com/medium-editor-textcolor)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/sonce/medium-editor-textcolor.svg)](http://isitmaintained.com/project/sonce/medium-editor-textcolor "Percentage of issues still open")

MediumEditor Text Color is an extension to add a Color Picker button/behavior to MediumEditor.

Demo: http://sonce.github.io/medium-editor-textcolor/

## Usage

You can install manually or either by using npm or bower:

```
npm install medium-editor-textcolor
```

or

```
bower install medium-editor-textcolor
```

On your app, link the style and the script and initialize MediumEditor with the textcolor extension:

```html
<!doctype html>
<html>
<head>
...
		<link rel="stylesheet" href="../bower_components/medium-editor/dist/css/medium-editor.min.css" />
		<link rel="stylesheet" href="../bower_components/medium-editor/dist/css/themes/default.min.css" />
		<link href="../bower_components/font-awesome-5/css/all.min.css" rel="stylesheet" />
...
</head>
<body>
  <div class="editable"></div>

  <script type="text/javascript" src="<path_to_medium-editor>/dist/js/medium-editor.js"></script>
  <script type="text/javascript" src="<path_to_medium-editor-textcolor>/dist/js/medium-editor-textcolor.js"></script>

  <script type="text/javascript" charset="utf-8">
  var editor = new MediumEditor('.editable', {
    buttonLabels: 'fontawesome',
    toolbar: {
      buttons: [
        'bold',
        'italic',
        'textcolor'
      ]
    },
    extensions: {
      colorPicker: mediumtextcolor.createInstance()
    }
  });
  </script>
</body>
</html>
```

## Initialization options

* __showHSL__: 	If falsy hide the HSL inputs. Default: 	true.
* __showRGB__: 	If falsy hide the RGB inputs. Default: true.
* __showHEX__: 	If falsy hide the RGB HEX inputs. Default: true.
* __showAlpha__: 	If truly show control to change opacity. Default: false.
* __color__: 	Initial color. Default: #ff0000.
* __palette__: Array of predefined colors.
Each element can be color name, rgb array, hex rgb, rgb(), rgba(), hsl(), hsla(). Type: Array, Default: null.
* __paletteEditable__: 	If truly make the palette editable. Default: false.
* __useAlphaInPalette__: If truly enable alpha channel in palette colors,
if 'auto' depends on the value of 'showAlpha'. Type:String|Boolean, Default: auto.
* __hueBarSize__: 	Size of hue bar in pixel (width, height). Type:Array, Default: [150,11].
* __slBarSize__: Size of saturation/luminance canvas in pixel (width, height).  Type:Array, Default: [232,150].

> about property detail look at [https://narsenico.github.io/a-color-picker/#api_options]

* __contentDefault__: when buttonLabels is not fontawesome,the Medium Editor toolbar button content
* __contentFA__: 	when buttonLabels is fontawesome,the Medium Editor toolbar button content
* __aria__: The button title in Medium Editor toolbar
* __removeButtonContent__: 	remove button content in a-color-picker content
* __removeButtonTitle__: 	remove button title in a-color-picker


### Example

```javascript
...
    extensions: {
      colorPicker: mediumtextcolor.createInstance()
    }
...
```

## Demo

Clone the repository and:

```
bower install
open demo/index.html
```
## dependency

a-color-picker:https://github.com/narsenico/a-color-picker

## License

MIT: https://github.com/sonce/medium-editor-textcolor/blob/master/LICENSE
