import DS from 'ember-data';

let contentDefault = `
An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
look like:

  * this one
  * that one
  * the other one

####  links

[this is a link to google](http://www.google.com)

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

`

export default DS.Model.extend({
  name:         DS.attr('string', {defaultValue: "Title Placeholder"}),
  content:      DS.attr('string', {defaultValue: contentDefault}),
  createdAt:    DS.attr('date'),
  updatedAt:    DS.attr('date')
});