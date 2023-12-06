## Searching Local Storage File

Windows: ~\AppData\Roaming\Bitwarden\data,json

Finding:

1. Bitwarden does not use the same format for every item. For example, if an item does not have URL fields, and another item has URL fields, then the item with a URL will have a URL record in a JSON file while the item without a URL will not. It can be distinguished whether the item has URL fields.
2. The creation time, delete date, revision date can be viewed.