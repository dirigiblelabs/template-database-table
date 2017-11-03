# Template V3 - Database Table

[![Eclipse License](http://img.shields.io/badge/license-Eclipse-brightgreen.svg)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/dirigiblelabs/template-v3-database-table.svg)](https://github.com/dirigiblelabs/template-v3-database-table/graphs/contributors)


## Overview

Simple "Database Table"
```javascript
{
	'name': '{{tableName}}',
	'type': 'TABLE',
	'columns': [{
		'name': 'ID',
		'type': 'INTEGER',
		'primaryKey': 'true'
	}, {
		'name': 'NAME',
		'type': 'VARCHAR',
		'length': '50'
	}]
}
```


## License

This project is copyrighted by [SAP SE](http://www.sap.com/) and is available under the [Eclipse Public License v 1.0](https://www.eclipse.org/legal/epl-v10.html). See [LICENSE](LICENSE) and [NOTICE.txt](NOTICE.txt) for further details.
